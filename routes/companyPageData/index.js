import express from 'express';
const router = express.Router();

const currentEquitiesTickerList = JSON.parse( process.env.EQUITY_TICKER );

router.get( '/:ticker', async ( req, res ) => {
  try {
    const ticker = (req.params.ticker).toUpperCase();
    const tickerIndex = currentEquitiesTickerList.indexOf(ticker);

    if ( !currentEquitiesTickerList.includes( ticker ) ) {
      // error page returned if param value not in array
      res.status(404).render('404');    
    } else {
        // send the data to ejs to populate res page
        res.status(200).send(`'ROOOUUTTEESS': ${ticker}`); 
        // res.status(200).render( `${ ticker }`, { summary: [tickerIndex], soci: [tickerIndex], sofp: [tickerIndex], socf: [tickerIndex], soce: [tickerIndex],} )
    }
  } 
  catch(err) {
    // error page returned if server error occurs
      res.status(500).render('500', { requestedLink: req.originalUrl });
  }
});

export default router;