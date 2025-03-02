import { volume90DaysData } from '../../model/vfex_db_results.js';
const tradeVolume90Days = await volume90DaysData();

const tradeVolume90DayDataArray = [];

const [ lastTradingDay, ...previousTradingDays ] = tradeVolume90Days;
tradeVolume90DayDataArray.push(Object.keys(lastTradingDay));
Object.values(lastTradingDay).forEach( d => tradeVolume90DayDataArray.push( [d] ));

previousTradingDays.forEach( d => {
  Object.values(d).forEach( (el,i) => {
    (tradeVolume90DayDataArray[i+1]).push( el )
  });
});

export default tradeVolume90DayDataArray;