import express from 'express';
const router = express.Router();

import { summaryData } from '../../model/db_results.js';

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
        // send the data to ejs to populate res page
        // res.status(200).send(`'ROOOUUTTEESS': ${ticker}`); 
        // res.status(200).render( `${ companyPageData }`, { ticker: summaryData[tickerIndex].ticker, shortName: summaryData[tickerIndex].short_name, longName: summaryData[tickerIndex].long_name, summary: [tickerIndex], soci: [tickerIndex], sofp: [tickerIndex], socf: [tickerIndex], soce: [tickerIndex],} )
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
            sector: summaryDataQueryResult[tickerIndex].sector,
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