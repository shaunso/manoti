// import modules
import { median } from 'd3-array';
// import sql queries
import { indicesData, priceVolumeData, summaryData, turnover30dayData, vfexSummaryData } from '../../model/vfex_db_results.js';
//import chart functions
import svgChartElement from '../../model/charts/lineChart.js';
import pieChartSVG from '../../model/charts/pieChart.js';
import heatMapSVG from '../../model/charts/heatMap.js';
import timelineSVG from '../../model/charts/timeline.js';
import treemapSVG from '../../model/charts/treemap.js';

// variabloe declerations
const priceVolumeDataQueryResult = await priceVolumeData();
const indicesDataQueryResult = await indicesData();
const summaryDataQueryResult = await summaryData();
const vfexSummaryDataQueryResult = await vfexSummaryData();
const turnover30dayDataQueryResult = await turnover30dayData();

const months = JSON.parse(process.env.MONTHS);
const equityNames = JSON.parse(process.env.EQUITY_NAMES);
const equityTickers = JSON.parse(process.env.EQUITY_TICKERS);
const numberOfListedEquities = equityTickers.length;

//function declarations
function sum(previousDay, currentDay) {
  return +previousDay + +currentDay
}

// number formatters
const closingPriceNumberFormatterObject = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 4, maximumFractionDigits: 4});
const closingPriceChangeNumberFormatterObject = new Intl.NumberFormat('en-GB', {signDisplay: 'exceptZero', maximumFractionDigits: 4});
const currencyZeroDecimalPointsNumberFormatterObject = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', notation: "compact", compactDisplay: "short", maximumFractionDigits: 0});
const currencyOneDecimalPointsNumberFormatterObject = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', notation: "compact", compactDisplay: "short", maximumFractionDigits: 1});
const currencyTwoDecimalPointsNumberFormatterObject = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', notation: "compact", compactDisplay: "short", maximumFractionDigits: 2});
const curencyTwoSignificantFiguresNumberFormatterObject = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 2 });
const percentageOneDecimalPointNumberFormatterObject = new Intl.NumberFormat('en-GB', { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1 });
const percentageTwoDecimalPointNumberFormatterObject = new Intl.NumberFormat('en-GB', { style: 'percent', maximumSignificantDigits: 2 });
const percentageTwoSignificantDigitsNumberFormatterObject = new Intl.NumberFormat('en-GB', {style: 'percent', signDisplay: 'exceptZero', minimumFractionDigits: 2, maximumFractionDigits: 2});
const thousandsSeparandNumberFormatterObject = new Intl.NumberFormat('en-GB');
const thousandsSeparandCompactNumberFormatterObject = new Intl.NumberFormat('en-GB', {notation: "compact", compactDisplay: "short"});
const tradingVolumeChangeNumberFormatterObject = new Intl.NumberFormat('en-GB', { signDisplay: 'always', maximumFractionDigits: 0});
const zeroDecimalPointSignedNumberFormatterObject = new Intl.NumberFormat('en-GB', { style: 'percent', signDisplay: 'exceptZero',  maximumFractionDigits: 0 });
const oneDecimalPointNumberFormatterObject = new Intl.NumberFormat('en-GB', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const twoDecimalPointNumberFormatterObject = new Intl.NumberFormat('en-GB', { signDisplay: 'exceptZero', minimumFractionDigits: 2, maximumFractionDigits: 2 });
const twoDecimalPointNumberNoSignFormatterObject = new Intl.NumberFormat('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

//
// destructure data into current & following 29 trading days
const [ lastTradingDay, ...remainingTradingDays ] = priceVolumeDataQueryResult;

// arrays to store 30 day closing price & trading volume data for each equityName
// arrays will have length [no. of equities actively listed + 1] in which the extra element is for the dates
const closingPriceDataArray = [];
const tradingVolumeDataArray = [];

// arrays for last trading day closing price & trading volume for calculations
const lastTradingDayClosingPriceDataObject = {};
const lastTradingDayTradingVolumeDataObject = {};

// arrays for second last trading day closing price & trading volume for calculations
const secondlastTradingDayClosingPriceDataObject = {};
const secondlastTradingDayTradingVolumeDataObject = {};

// formatting  the date to be displayed on the HTML page to indicate to clients when the data was last updated
const lastTradingDayDate = priceVolumeDataQueryResult[0].date;
const [ month, day, year ] = lastTradingDayDate.toLocaleDateString().split("/");
const lastTradingDayDateFormatted = `${day}-${months[month-1]}-${year.slice(-2)}`;
const lastTradingDayDateFormattedReversed = `${year}-${month}-${day}`;

// add data from last trading day to array & object
for ( let dataPoint in lastTradingDay ) {
  if (dataPoint.includes('price')) {
    closingPriceDataArray.push([+lastTradingDay[dataPoint]]);
    lastTradingDayClosingPriceDataObject[dataPoint.replace('.price','')] = +lastTradingDay[dataPoint];
  } else if (dataPoint.includes('vol')) {
    tradingVolumeDataArray.push([+lastTradingDay[dataPoint]]);
    lastTradingDayTradingVolumeDataObject[dataPoint.replace('.vol','')] = +lastTradingDay[dataPoint];
  } else {
    closingPriceDataArray.push([lastTradingDay.date]);
    tradingVolumeDataArray.push([lastTradingDay.date]);
  }
};

// add data from second last trading day to object
for ( let dataPoint in priceVolumeDataQueryResult[1] ) {
  if (dataPoint.includes('price')) {
    secondlastTradingDayClosingPriceDataObject[dataPoint.replace('.price','')] = +priceVolumeDataQueryResult[1][dataPoint];
  } else if (dataPoint.includes('vol')) {
    secondlastTradingDayTradingVolumeDataObject[dataPoint.replace('.vol','')] = +priceVolumeDataQueryResult[1][dataPoint];
  } else {
    continue;
  }
};

// add data from remaining trading days to array
remainingTradingDays.forEach( day => {
  closingPriceDataArray[0].push(day.date);
  tradingVolumeDataArray[0].push(day.date);

  let h = 1;
  for (const el in day) {
    if ( el.includes('price') ) {
      closingPriceDataArray[h].push(+day[el]);
    } else if ( el.includes('vol') ) {
      tradingVolumeDataArray[h].push(+day[el]);
      h++;
    }
  }
});

// defining the dates array for the x-axis for the graph
const dateData30DaysArray = closingPriceDataArray[0];

// store closing price & trading volume data for the last two trading days
// store price & volume data for 30 days for d3 in tooltip
const equityData = [];
const tooltipData = [];
const heatMapData = [];

let m = 0, r = 1;

for ( let x in lastTradingDayClosingPriceDataObject ) {
  // calculate two day price/volume change & percentage change
  const priceChange = lastTradingDayClosingPriceDataObject[x] - secondlastTradingDayClosingPriceDataObject[x];
  const pricePercentageChange = ( (priceChange * 10000000) / (secondlastTradingDayClosingPriceDataObject[x] * 10000000) );

  heatMapData.push({
    name: equityNames[m],
    priceDifference: pricePercentageChange,
    price: closingPriceNumberFormatterObject.format(lastTradingDayClosingPriceDataObject[x]),
  });

  const volumeChange = lastTradingDayTradingVolumeDataObject[x] - secondlastTradingDayTradingVolumeDataObject[x];
  const volumePercentageChange = ( volumeChange / secondlastTradingDayTradingVolumeDataObject[x] );

  // retrieve closing price data for each equity
  const closingPriceDataToMap = closingPriceDataArray[r];
  const tradingVolumeDataToMap = tradingVolumeDataArray[r];

  // financial performance metrics
  const currentROE = ( summaryDataQueryResult[m].curr_net_income / summaryDataQueryResult[m].curr_avg_shares_issued);
  const previousROE = ( summaryDataQueryResult[m].prev_net_income / summaryDataQueryResult[m].prev_avg_shares_issued);
  const roeYoYchange = ( currentROE - previousROE ) / previousROE;
  const returnOnEquityYoY = (roeYoYchange) ? zeroDecimalPointSignedNumberFormatterObject.format(roeYoYchange) : '0%';

  // store market & financial statement data for each equity
  const marketStatistics = [
    { metric: 'Turnover', rawValue: summaryDataQueryResult[m].turnover, value: currencyZeroDecimalPointsNumberFormatterObject.format(summaryDataQueryResult[m].turnover) },

    { metric: 'Volume (30 day avg.)', rawValue: summaryDataQueryResult[m].volume_30_day_avg, value: thousandsSeparandCompactNumberFormatterObject.format(summaryDataQueryResult[m].volume_30_day_avg) },

    { metric: 'P/E ratio', rawValue: summaryDataQueryResult[m].pe_ratio, value: (!summaryDataQueryResult[m].pe_ratio) ? '-' : `${oneDecimalPointNumberFormatterObject.format(summaryDataQueryResult[m].pe_ratio)}x` },

    { metric: 'P/B ratio', rawValue: summaryDataQueryResult[m].pb_ratio, value: (!summaryDataQueryResult[m].pb_ratio) ? '-' : `${oneDecimalPointNumberFormatterObject.format(summaryDataQueryResult[m].pb_ratio)}x` },

    { metric: 'EPS', rawValue: summaryDataQueryResult[m].curr_eps, value: (!summaryDataQueryResult[m].curr_eps) ? '-' : curencyTwoSignificantFiguresNumberFormatterObject.format(summaryDataQueryResult[m].curr_eps) },

    { metric: 'Dividend yield', rawValue: summaryDataQueryResult[m].dividend_yield, value: (!summaryDataQueryResult[m].dividend_yield) ? '-' : percentageTwoDecimalPointNumberFormatterObject.format(summaryDataQueryResult[m].dividend_yield) },
  ];

  const financialStatementSummary = [
    { metric: 'Revenue', rawValue: summaryDataQueryResult[m].curr_revenue, value: (!summaryDataQueryResult[m].curr_revenue) ? '-' : currencyOneDecimalPointsNumberFormatterObject.format(summaryDataQueryResult[m].curr_revenue), change: (!summaryDataQueryResult[m].revenue_yoy) ? '' : zeroDecimalPointSignedNumberFormatterObject.format(summaryDataQueryResult[m].revenue_yoy) },

    { metric: 'Net income', rawValue: summaryDataQueryResult[m].curr_net_income, value: (!summaryDataQueryResult[m].curr_net_income) ? '-' : currencyOneDecimalPointsNumberFormatterObject.format(summaryDataQueryResult[m].curr_net_income), change: (!summaryDataQueryResult[m].net_income_yoy) ? '' : zeroDecimalPointSignedNumberFormatterObject.format(summaryDataQueryResult[m].net_income_yoy) },

    { metric: 'Total assets', rawValue: summaryDataQueryResult[m].curr_total_assets, value: (!summaryDataQueryResult[m].curr_total_assets) ? '-' : currencyOneDecimalPointsNumberFormatterObject.format(summaryDataQueryResult[m].curr_total_assets), change: (!summaryDataQueryResult[m].total_assets_yoy) ? '' : zeroDecimalPointSignedNumberFormatterObject.format(summaryDataQueryResult[m].total_assets_yoy) },

    { metric: 'Total liabilities', rawValue: summaryDataQueryResult[m].curr_total_liabilities, value: (!summaryDataQueryResult[m].curr_total_liabilities) ? '-' : currencyOneDecimalPointsNumberFormatterObject.format(summaryDataQueryResult[m].curr_total_liabilities), change: (!summaryDataQueryResult[m].total_liabilities_yoy) ? '' : zeroDecimalPointSignedNumberFormatterObject.format(summaryDataQueryResult[m].total_liabilities_yoy) },

    { metric: 'Free cash flow', rawValue: summaryDataQueryResult[m].curr_fcf, value: (!summaryDataQueryResult[m].curr_fcf) ? '-' : currencyOneDecimalPointsNumberFormatterObject.format(summaryDataQueryResult[m].curr_fcf), change: (!summaryDataQueryResult[m].fcf_yoy) ? '' : zeroDecimalPointSignedNumberFormatterObject.format(summaryDataQueryResult[m].fcf_yoy) },

    { metric: 'ROE', rawValue: currentROE, value: (!currentROE) ? '-' : percentageTwoDecimalPointNumberFormatterObject.format(currentROE), change: (!currentROE) ? '' : returnOnEquityYoY },
  ];

  // using the array 'map' method to make a new 2 dimensional array in which each array element is the closing price for each day for the previous 30 days. For each array element, [0] is the date and [1] is the closing price for that particular equity
  const twoDimensionalClosingPriceData = closingPriceDataToMap.map( (el, index) => [ dateData30DaysArray[index], el ] );
  const twoDimensionalTradingVolumeData = tradingVolumeDataToMap.map( (el, index) => [ dateData30DaysArray[index], el ] );

  // draw svg line chart for 30 day closing price
  const svg = svgChartElement( twoDimensionalClosingPriceData, twoDimensionalTradingVolumeData, priceChange );

  // create a new object for the equity with the neccessary data stored in key value pairs in order to be render by ejs
  // an array of objects is used to store the closing price data for each equity as an element item
  equityData.push( 
    {
    name: equityNames[m], 
    ticker: equityTickers[m],
    marketCap: currencyOneDecimalPointsNumberFormatterObject.format(summaryDataQueryResult[m].market_cap),
    price: closingPriceNumberFormatterObject.format(lastTradingDayClosingPriceDataObject[x]),
    priceChange: (priceChange) ? closingPriceChangeNumberFormatterObject.format(priceChange) : '---', 
    pricePercentageChange: (pricePercentageChange) ? percentageTwoSignificantDigitsNumberFormatterObject.format(pricePercentageChange) : '---',
    volume: thousandsSeparandNumberFormatterObject.format(lastTradingDayTradingVolumeDataObject[x]),
    volumeChange: (volumeChange) ? tradingVolumeChangeNumberFormatterObject.format(volumeChange) : '---',
    volumePercentageChange: (volumePercentageChange) ? zeroDecimalPointSignedNumberFormatterObject.format(volumePercentageChange) : '---',
    chart: svg,
    closingPriceData: twoDimensionalClosingPriceData.toReversed(),
    tradingVolumeData: twoDimensionalTradingVolumeData.toReversed(),
    marketStatistics: marketStatistics,
    financialStatementSummary: financialStatementSummary,
    FY: summaryDataQueryResult[m].fy,      
    }
  );

  tooltipData.push( {
    s: twoDimensionalClosingPriceData.toReversed(),
    t: twoDimensionalTradingVolumeData.toReversed(),
  });

  m++, r++;
}

// INDICES
const [ currentAllShareIndex, previousAllShareIndex ] = indicesDataQueryResult;
const priceChangeAllShareIndex = +currentAllShareIndex.all_share_index - +previousAllShareIndex.all_share_index;
const priceChangeDifferenceAllShareIndex = ( priceChangeAllShareIndex * 10000000 ) / ( +previousAllShareIndex.all_share_index * 10000000);
const percentageChangeAllShareIndex = percentageTwoSignificantDigitsNumberFormatterObject.format(priceChangeDifferenceAllShareIndex);
const alsi = {
  close: twoDecimalPointNumberNoSignFormatterObject.format(+currentAllShareIndex.all_share_index),
  priceChange: (priceChangeAllShareIndex) ? twoDecimalPointNumberFormatterObject.format(priceChangeAllShareIndex) : '---',
  percentageChange: (priceChangeAllShareIndex) ? percentageChangeAllShareIndex : '---',
}

// EQUITIES MARKET DATA
const marketCapData = [];
const peRatioData = [];
const listingDate = [];
let turnover;

let p = 0;
summaryDataQueryResult.forEach( d => {
  marketCapData.push({
    name: d.short_name,
    ticker: d.ticker,
    marketCap: d.market_cap,
  });

  peRatioData.push({
    name: d.short_name,
    ticker: d.ticker,
    peRatio: d.pe_ratio,
  });

  listingDate.push({
    name: d.short_name,
    ticker: d.ticker,
    date: d.date_of_listing,
  });

  turnover += +d.turnover;
  p++;
});

//
// VFEX SUMMARY QUERY DATA
const vfexEquitiesEndOfDayData = vfexSummaryDataQueryResult.slice(0, numberOfListedEquities)
const vfexAggregatedData = vfexSummaryDataQueryResult.slice(-2);

// alsi index
const vfexMarketCap = currencyTwoDecimalPointsNumberFormatterObject.format(vfexAggregatedData[0].market_cap);
// heatmap
const heatMap = heatMapSVG(heatMapData);
// pie chart 
const pieChart = pieChartSVG(marketCapData, vfexMarketCap );
// median p/e ratio
const medianPEratio = oneDecimalPointNumberFormatterObject.format( median(peRatioData, d => d.peRatio) );
// timeline
const timeline = timelineSVG(listingDate);
// treemap
const treemap = treemapSVG( vfexEquitiesEndOfDayData );
// turnover
const turnover30dayValueMultiDimensionalArray = [];
turnover30dayDataQueryResult.forEach( d => {
  turnover30dayValueMultiDimensionalArray.push(Object.values(d));
});
const turnover30dayValueArray = turnover30dayValueMultiDimensionalArray.flat();
const sumOfAllEquities50dayTradeVolume = turnover30dayValueArray.reduce(sum, 0);
// null counter variable takes into account the null values from equities that have listed or delisted within the window
const nullCounter = turnover30dayValueArray.filter( d => d === null ).length;
const turnover30dayValue = currencyOneDecimalPointsNumberFormatterObject.format( 
  sumOfAllEquities50dayTradeVolume / ( turnover30dayValueArray.length - nullCounter )
);

export { alsi, equityData, heatMap, heatMapData, lastTradingDayDateFormatted, lastTradingDayDateFormattedReversed, marketCapData, turnover30dayValue, medianPEratio, numberOfListedEquities, pieChart, timeline, tooltipData, treemap, vfexEquitiesEndOfDayData, vfexMarketCap, year };
