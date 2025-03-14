import express from 'express';
const router = express.Router();

import { summaryData, turnover90dayAverage } from '../../model/vfex_db_results.js';
import { vfexSOCI } from '../../model/vfex_soci_db_result.js';
import { equityData } from '../home/app.js';
import { price90DayDataArray, tradeVolume90DayDataArray } from './tradeVolumeData90Days.js';
import barChartSvg from '../../model/charts/data/vfex/equity/barChart.js';

const currentEquitiesTickerList = JSON.parse( process.env.EQUITY_TICKERS );
const month = JSON.parse(process.env.MONTHS_LONG);
const summaryDataQueryResult = await summaryData();
const averageTurnover90Day = await turnover90dayAverage();
const vfexSOCIData = await vfexSOCI();
const clone = structuredClone(vfexSOCIData);
const price90Days = price90DayDataArray;
const tradeVolume90Days = tradeVolume90DayDataArray;

// NUMBER FORMATTERS
const closingPriceNumberFormatterObject = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 4, maximumFractionDigits: 4});
const currencyTwoDecimalPointsNumberFormatterObject = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', notation: "compact", compactDisplay: "short", maximumFractionDigits: 2});
const thousandsSeparandNumberFormatterObject = new Intl.NumberFormat('en-GB');
const thousandsSeparandTwoDecimalPlacesNumberFormatterObject = new Intl.NumberFormat('en-GB', {notation: "compact", compactDisplay: "short", maximumFractionDigits: 2});

// HANDLING THE REQUEST
router.get( '/:ticker', async ( req, res ) => {
  try {
    const tickerUpperCase = req.params.ticker.toUpperCase();
    const tickerLowerCase = req.params.ticker.toLowerCase();
    const tickerIndex = currentEquitiesTickerList.indexOf(tickerUpperCase);

    if ( !currentEquitiesTickerList.includes( tickerUpperCase )) {
        // error page returned if param value not in array
        res.status(404).render('404');
    } else {
        const dataset = structuredClone(tradeVolume90Days[tickerIndex + 2]);
        const dates = structuredClone(tradeVolume90Days[1]);
        const barChart = barChartSvg(dataset,dates);

        const yearEndOfLatestFinancialStatement = vfexSOCIData[tickerIndex].at(-1).date;
    
        // remove unwanted properties from objects in array
        clone[tickerIndex].forEach( d => {
          delete d[`${tickerLowerCase}`];
          delete d.date;
          delete d.depreciation_and_ammortisation;
          delete d.ebitda;
        });
    
        // structure the table data
        const currentFY = clone[tickerIndex].at(-1);
        const previousFY = clone[tickerIndex].at(-2);
        // const previousFY = clone[tickerIndex].slice(0,-1).reverse();
        const incomeStatementTableData = Object.entries( currentFY );
        Object.values(previousFY).forEach( (d,i) => {
          incomeStatementTableData[i].push(d);  
          incomeStatementTableData[i].push( ( !((incomeStatementTableData[i][1] - d) / d) ) ? null : ((incomeStatementTableData[i][1] - d) / d) );
        });
        incomeStatementTableData[0][incomeStatementTableData[0].length -1] = 1;
        // DISPLAYS ALL AVAILABLE FINANCIAL YEAR DATA
        // previousFY.forEach( (d) => {
        //   Object.values(d).forEach( (d,i) => incomeStatementTableData[i].push(d) )
        // });

        // send response to client
        res.status(200).render( 'companyPageData', 
          { 
            averageTurnover90Day: currencyTwoDecimalPointsNumberFormatterObject.format(averageTurnover90Day[0][tickerUpperCase]),
            address: summaryDataQueryResult[tickerIndex].address,
            auditors: summaryDataQueryResult[tickerIndex].external_auditors,
            boardSize: summaryDataQueryResult[tickerIndex].board_size,
            ceo: summaryDataQueryResult[tickerIndex].ceo,
            charts: {
              priceData: price90Days[tickerIndex + 2],
              scaleDates: tradeVolume90Days[1],
              tradeVolume: barChart,
              // dailyReturns = ,
              volumeData: tradeVolume90Days[tickerIndex + 2],
            },
            description: summaryDataQueryResult[tickerIndex].company_description,
            ebitda: (!vfexSOCIData[tickerIndex].at(-1).ebitda) ? '---' : currencyTwoDecimalPointsNumberFormatterObject.format(vfexSOCIData[tickerIndex].at(-1).ebitda),
            employees: summaryDataQueryResult[tickerIndex].no_of_employees ? thousandsSeparandNumberFormatterObject.format(summaryDataQueryResult[tickerIndex].no_of_employees) : null,
            fyCurrent: incomeStatementTableData[0][1],
            fyPrevious: incomeStatementTableData[0][2],
            founded: summaryDataQueryResult[tickerIndex].founded,
            listingDate: `${summaryDataQueryResult[tickerIndex].date_of_listing.toLocaleString('default', {month: 'long'})} ${summaryDataQueryResult[tickerIndex].date_of_listing.getUTCFullYear()}`,
            longName: summaryDataQueryResult[tickerIndex].long_name,
            marketCap: currencyTwoDecimalPointsNumberFormatterObject.format(summaryDataQueryResult[tickerIndex].market_cap),
            price: closingPriceNumberFormatterObject.format(summaryDataQueryResult[tickerIndex].close),
            priceChange: equityData[tickerIndex].priceChange,
            pricePercentageChange: equityData[tickerIndex].pricePercentageChange,
            sector: summaryDataQueryResult[tickerIndex].sector.split(','),
            sharesIssued: thousandsSeparandTwoDecimalPlacesNumberFormatterObject.format(summaryDataQueryResult[tickerIndex].shares_in_issue),
            shortName: summaryDataQueryResult[tickerIndex].short_name, 
            ticker: summaryDataQueryResult[tickerIndex].ticker,
            tableData: incomeStatementTableData,
            website: summaryDataQueryResult[tickerIndex].website,
            yearEnd: summaryDataQueryResult[tickerIndex].year_end,
            yearOfLatestFinancialStatements: month[yearEndOfLatestFinancialStatement.getMonth()] + ' ' + yearEndOfLatestFinancialStatement.getDate(),
          })          
    }
  } 
  catch(err) {
    // error page returned if server error occurs
    res.status(500).render('500', { requestedLink: req.originalUrl });
  }
});

export default router;