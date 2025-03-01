import express from 'express';
const router = express.Router();

import { summaryData } from '../../model/db_results.js';
import { equityData } from '../home/app.js';

const currentEquitiesTickerList = JSON.parse( process.env.EQUITY_TICKERS );
const summaryDataQueryResult = await summaryData();

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
            address: summaryDataQueryResult[tickerIndex].address,
            auditors: summaryDataQueryResult[tickerIndex].external_auditors,
            boardSize: summaryDataQueryResult[tickerIndex].board_size,
            ceo: summaryDataQueryResult[tickerIndex].ceo,
            description: summaryDataQueryResult[tickerIndex].company_description, 
            employees: summaryDataQueryResult[tickerIndex].no_of_employees ? thousandsSeparandNumberFormatterObject.format(summaryDataQueryResult[tickerIndex].no_of_employees) : null,
            founded: summaryDataQueryResult[tickerIndex].founded,
            listingDate: `${summaryDataQueryResult[tickerIndex].date_of_listing.toLocaleString('default', {month: 'long'})} ${summaryDataQueryResult[tickerIndex].date_of_listing.getUTCFullYear()}`,
            longName: summaryDataQueryResult[tickerIndex].long_name,
            priceChange: (equityData[tickerIndex].priceChange),
            pricePercentageChange: (equityData[tickerIndex].pricePercentageChange),
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