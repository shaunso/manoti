import { price90daysData, volume90DaysData } from '../../model/vfex_db_results.js';
const tradeVolume90Days = await volume90DaysData();
const price90Days = await price90daysData();

const price90DayDataArray = [];
const tradeVolume90DayDataArray = [];

const [ priceLastTradingDay, ...pricePreviousTradingDays ] = price90Days;
const [ volumeLastTradingDay, ...volumePreviousTradingDays ] = tradeVolume90Days;

price90DayDataArray.push(Object.keys(priceLastTradingDay));
Object.values(priceLastTradingDay).forEach( d => price90DayDataArray.push( [d] ));
pricePreviousTradingDays.forEach( d => {
  Object.values(d).forEach( (el,i) => {
    (price90DayDataArray[i+1]).push( el )
  });
});

tradeVolume90DayDataArray.push(Object.keys(volumeLastTradingDay));
Object.values(volumeLastTradingDay).forEach( d => tradeVolume90DayDataArray.push( [d] ));
volumePreviousTradingDays.forEach( d => {
  Object.values(d).forEach( (el,i) => {
    (tradeVolume90DayDataArray[i+1]).push( el )
  });
});

export { price90DayDataArray, tradeVolume90DayDataArray };