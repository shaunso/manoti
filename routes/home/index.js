import express from 'express';
const router = express.Router();

import { alsi, equityData, heatMap, heatMapData, lastTradingDayDateFormatted, lastTradingDayDateFormattedReversed, marketCapData, turnover30dayValue, medianPEratio, numberOfListedEquities, pieChart, timeline, tooltipData, treemap, vfexEquitiesEndOfDayData, vfexMarketCap, year } from './app.js'

router.get( '/', async ( req, res ) => {
  try {
    // send the data to ejs to populate res page
    res.status(200).render('home', { 
      alsi,
      equityData,
      heatMap,
      heatMapData,
      lastTradingDayDateFormatted,
      lastTradingDayDateFormattedReversed,
      marketCapData,
      medianPEratio,
      numberOfListedEquities,
      pieChart,
      timeline,
      tooltipData,
      turnover30dayValue,
      treemap,
      vfexEquitiesEndOfDayData,
      vfexMarketCap,
      year
    });    
  } 
  catch(err) {
    // error page for internal errors
    res.status(500).render('500', { requestedLink: req.originalUrl });       
  }
});

export default router;