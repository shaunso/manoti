import express from 'express';
const router = express.Router();

import { equityData, lastTradingDayDateFormatted, lastTradingDayDateFormattedReversed, year, tooltipData, alsi, marketCapData, vfexMarketCap, pieChart, heatMap, heatMapData, numberOfListedEquities, marketTurnover1day, marketTurnover50dayAverage, timeline, medianPEratio } from './app.js'

router.get( '/', async ( req, res ) => {
  try {
    // send the data to ejs to populate res page
    res.status(200).render('home', { equityData, lastTradingDayDateFormatted, lastTradingDayDateFormattedReversed, year, tooltipData, alsi, marketCapData, vfexMarketCap, pieChart, heatMap, heatMapData, numberOfListedEquities, marketTurnover1day, marketTurnover50dayAverage, timeline, medianPEratio });    
  } 
  catch(err) {
    // error page for internal errors
    res.status(500).render('500', { requestedLink: req.originalUrl });       
  }
});

export default router;
