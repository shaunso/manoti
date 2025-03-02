import express from 'express';
const router = express.Router();

import { summaryData, turnover90dayAverage, volume90DaysData } from '../../model/vfex_db_results.js';
import { vfexSOCI } from '../../model/vfex_soci_db_result.js';
import { equityData } from '../home/app.js';

const currentEquitiesTickerList = JSON.parse( process.env.EQUITY_TICKERS );
const summaryDataQueryResult = await summaryData();
const averageTurnover90Day = await turnover90dayAverage();
const tradeVolume90Days = await volume90DaysData();
const vfexSOCIData = await vfexSOCI();

// NUMBER FORMATTER
const currencyZeroDecimalPointsNumberFormatterObject = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 0});
const thousandsSeparandNumberFormatterObject = new Intl.NumberFormat('en-GB');

router.get( '/:ticker', async ( req, res ) => {
  try {
    const ticker = (req.params.ticker).toUpperCase();
    const tickerIndex = currentEquitiesTickerList.indexOf(ticker);

    if ( !currentEquitiesTickerList.includes( ticker ) ) {
      // error page returned if param value not in array
      res.status(404).render('404');
    } else {
        res.status(200).render( 'companyPageData', 
          { 
            averageTurnover90Day: currencyZeroDecimalPointsNumberFormatterObject.format(averageTurnover90Day[0][ticker]),
            address: summaryDataQueryResult[tickerIndex].address,
            auditors: summaryDataQueryResult[tickerIndex].external_auditors,
            boardSize: summaryDataQueryResult[tickerIndex].board_size,
            ceo: summaryDataQueryResult[tickerIndex].ceo,
            description: summaryDataQueryResult[tickerIndex].company_description,
            ebitda: currencyZeroDecimalPointsNumberFormatterObject.format(vfexSOCIData[tickerIndex].at(-1).ebitda),
            employees: summaryDataQueryResult[tickerIndex].no_of_employees ? thousandsSeparandNumberFormatterObject.format(summaryDataQueryResult[tickerIndex].no_of_employees) : null,
            founded: summaryDataQueryResult[tickerIndex].founded,
            listingDate: `${summaryDataQueryResult[tickerIndex].date_of_listing.toLocaleString('default', {month: 'long'})} ${summaryDataQueryResult[tickerIndex].date_of_listing.getUTCFullYear()}`,
            longName: summaryDataQueryResult[tickerIndex].long_name,
            marketCap: equityData[tickerIndex].marketCap,
            priceChange: equityData[tickerIndex].priceChange,
            pricePercentageChange: equityData[tickerIndex].pricePercentageChange,
            sector: summaryDataQueryResult[tickerIndex].sector.split(','),
            sharesIssued: thousandsSeparandNumberFormatterObject.format(summaryDataQueryResult[tickerIndex].shares_in_issue),
            shortName: summaryDataQueryResult[tickerIndex].short_name, 
            ticker: summaryDataQueryResult[tickerIndex].ticker, 
            website: summaryDataQueryResult[tickerIndex].website,
            yearEnd: summaryDataQueryResult[tickerIndex].year_end,
          })
    }
  } 
  catch(err) {
    // error page returned if server error occurs
      res.status(500).render('500', { requestedLink: req.originalUrl });
  }
});

export default router;