import { median } from 'd3-array';

import { priceVolumeData, indicesData, summaryData, vfexSummaryData } from '../../model/db_results.js';
import svgChartElement from '../../model/charts/lineChart.js';
import pieChartSVG from '../../model/charts/pieChart.js';
import heatMapSVG from '../../model/charts/heatMap.js';
import timelineSVG from '../../model/charts/timeline.js';

// wait for the data from the db to be returned
const priceVolumeDataQueryResult = await priceVolumeData();
const indicesDataQueryResult = await indicesData();
const summaryDataQueryResult = await summaryData();
const vfexSummaryDataQueryResult = await vfexSummaryData();

// console.log(summaryDataQueryResult)

// the names & tickers of equities actively traded on the VFEX stored in environment variables as an array of strings
const equityNames = JSON.parse(process.env.EQUITY_NAMES);
const equityTickers = JSON.parse(process.env.EQUITY_TICKER);
const numberOfListedEquities = equityNames.length;

// the months of the year abbreviated to the first three letters stored in environment variables as an array of strings
const months = JSON.parse(process.env.MONTHS);

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

// number format objects
const closingPriceNumberFormatterObject = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 4, maximumFractionDigits: 4});
const closingPriceChangeNumberFormatterObject = new Intl.NumberFormat('en-GB', {signDisplay: 'exceptZero', maximumFractionDigits: 4});
const percentageTwoSignificantDigitsNumberFormatterObject = new Intl.NumberFormat('en-GB', {style: 'percent', signDisplay: 'exceptZero', minimumFractionDigits: 2, maximumFractionDigits: 2});
const thousandsSeparandNumberFormatterObject = new Intl.NumberFormat('en-GB');
const thousandsSeparandCompactNumberFormatterObject = new Intl.NumberFormat('en-GB', {notation: "compact", compactDisplay: "short"});
const tradingVolumeChangeNumberFormatterObject = new Intl.NumberFormat('en-GB', { signDisplay: 'always', maximumFractionDigits: 0});
const currencyZeroDecimalPointsNumberFormatterObject = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', notation: "compact", compactDisplay: "short", maximumFractionDigits: 0});
const currencyOneDecimalPointsNumberFormatterObject = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', notation: "compact", compactDisplay: "short", maximumFractionDigits: 1});
const currencyTwoDecimalPointsNumberFormatterObject = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', notation: "compact", compactDisplay: "long", maximumFractionDigits: 2});
const zeroDecimalPointSignedNumberFormatterObject = new Intl.NumberFormat('en-GB', { style: 'percent', signDisplay: 'exceptZero',  maximumFractionDigits: 0 });
const oneDecimalPointNumberFormatterObject = new Intl.NumberFormat('en-GB', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const twoDecimalPointNumberFormatterObject = new Intl.NumberFormat('en-GB', { signDisplay: 'exceptZero', minimumFractionDigits: 2, maximumFractionDigits: 2 });
const twoDecimalPointNumberNoSignFormatterObject = new Intl.NumberFormat('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const cuurencyTwoSignificantFiguresNumberFormatterObject = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 2 });
const percentageOneDecimalPointNumberFormatterObject = new Intl.NumberFormat('en-GB', { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1 });
const percentageTwoDecimalPointNumberFormatterObject = new Intl.NumberFormat('en-GB', { style: 'percent', maximumSignificantDigits: 2 });

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
    { metric: 'Turnover', value: currencyZeroDecimalPointsNumberFormatterObject.format(summaryDataQueryResult[m].turnover) },
    { metric: 'Volume (30 day avg.)', value: thousandsSeparandCompactNumberFormatterObject.format(summaryDataQueryResult[m].volume_30_day_avg) },
    { metric: 'P/E ratio', value: `${oneDecimalPointNumberFormatterObject.format(summaryDataQueryResult[m].pe_ratio)}x` },
    { metric: 'P/B ratio', value: `${oneDecimalPointNumberFormatterObject.format(summaryDataQueryResult[m].pb_ratio)}x` },
    { metric: 'EPS', value: cuurencyTwoSignificantFiguresNumberFormatterObject.format(summaryDataQueryResult[m].curr_eps) },
    { metric: 'Dividend yield', value: percentageTwoDecimalPointNumberFormatterObject.format(summaryDataQueryResult[m].dividend_yield) },
  ];

  const financialStatementSummary = [
    { metric: 'Revenue', value: currencyOneDecimalPointsNumberFormatterObject.format(summaryDataQueryResult[m].curr_revenue), change: zeroDecimalPointSignedNumberFormatterObject.format(summaryDataQueryResult[m].revenue_yoy) },
    { metric: 'Net income', value: currencyOneDecimalPointsNumberFormatterObject.format(summaryDataQueryResult[m].curr_net_income), change: zeroDecimalPointSignedNumberFormatterObject.format(summaryDataQueryResult[m].net_income_yoy) },
    { metric: 'Total assets', value: currencyOneDecimalPointsNumberFormatterObject.format(summaryDataQueryResult[m].curr_total_assets), change: zeroDecimalPointSignedNumberFormatterObject.format(summaryDataQueryResult[m].total_assets_yoy) },
    { metric: 'Total liabilities', value: currencyOneDecimalPointsNumberFormatterObject.format(summaryDataQueryResult[m].curr_total_liabilities), change: zeroDecimalPointSignedNumberFormatterObject.format(summaryDataQueryResult[m].total_liabilities_yoy) },
    { metric: 'Free cash flow', value: currencyOneDecimalPointsNumberFormatterObject.format(summaryDataQueryResult[m].curr_fcf), change: zeroDecimalPointSignedNumberFormatterObject.format(summaryDataQueryResult[m].fcf_yoy) },
    { metric: 'ROE', value: percentageTwoDecimalPointNumberFormatterObject.format(currentROE), change: returnOnEquityYoY },
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

  p++;
});

// VFEX SUMMARY
const vfexMarketCap = currencyTwoDecimalPointsNumberFormatterObject.format(vfexSummaryDataQueryResult[0].market_cap);
// PIE CHART 
const pieChart = pieChartSVG(marketCapData, vfexMarketCap );
// HEATMAP
const heatMap = heatMapSVG(heatMapData);
// MEDIAN P/E RATIO
const medianPEratio = oneDecimalPointNumberFormatterObject.format( median(peRatioData, d => d.peRatio) );
// TIMELINE
const timeline = timelineSVG(listingDate);

export { equityData, lastTradingDayDateFormatted, lastTradingDayDateFormattedReversed, year, tooltipData, alsi, marketCapData, vfexMarketCap, pieChart, heatMap, heatMapData, numberOfListedEquities, timeline, medianPEratio };