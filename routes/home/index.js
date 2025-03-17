import express from 'express';
const router = express.Router();

<<<<<<< HEAD
import { alsi, equityData, heatMap, heatMapData, lastTradingDayDateFormatted, lastTradingDayDateFormattedReversed, marketCapData, turnover30dayValue, medianPEratio, numberOfListedEquities, pieChart, timeline, tooltipData, treemap, vfexEquitiesEndOfDayData, vfexMarketCap, year } from './app.js'
=======
import { equityData, lastTradingDayDateFormatted, lastTradingDayDateFormattedReversed, year, tooltipData, alsi, marketCapData, vfexMarketCap, pieChart, heatMap, heatMapData, numberOfListedEquities, marketTurnover1day, marketTurnover50dayAverage, timeline, medianPEratio } from './app.js'
>>>>>>> 35b6819c08f5fa8738fbe628c95ed2f7bca4d95d

router.get( '/', async ( req, res ) => {
  try {
    // send the data to ejs to populate res page
<<<<<<< HEAD
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
=======
    res.status(200).render('home', { equityData, lastTradingDayDateFormatted, lastTradingDayDateFormattedReversed, year, tooltipData, alsi, marketCapData, vfexMarketCap, pieChart, heatMap, heatMapData, numberOfListedEquities, marketTurnover1day, marketTurnover50dayAverage, timeline, medianPEratio });    
>>>>>>> 35b6819c08f5fa8738fbe628c95ed2f7bca4d95d
  } 
  catch(err) {
    // error page for internal errors
    res.status(500).render('500', { requestedLink: req.originalUrl });       
  }
});

<<<<<<< HEAD
export default router;
=======
export default router;
>>>>>>> 35b6819c08f5fa8738fbe628c95ed2f7bca4d95d
