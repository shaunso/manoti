import 'dotenv/config';
import { pool } from './db.js';

// queries return the 30 days closing price & trading volume data for each equity
const indices = process.env.INDICES_QUERY;
const priceVolumeData30DaysJoined = process.env.PRICE_VOLUME_DATA_QUERY;
const price90days = process.env.PRICE_90_DAY_QUERY;
const price90dayReturns = process.env.PRICE_90_DAY_PRICE_RETURN_QUERY;
const summary = process.env.SUMMARY_QUERY;
const turnover = process.env.TURNOVER_30_DAY;
const turnover90dayAverageData = process.env.AVG_TRADE_VOLUME_90_DAY_DATA_QUERY;
const vfexSummary = process.env.VFEX_SUMMARY_QUERY;
const volume90Days = process.env.VOLUME_90_DAY_QUERY;


const indicesData = () => {
  return new Promise( (resolve, reject)=>{
    pool.execute(indices,  (error, result) => {
      if(error){
        console.error(error)
        return reject('An error occured while executing the [ -- indices -- ] query on the database');
      }
      return resolve(result);
    });
  });
};

const priceVolumeData = () => {
  return new Promise( (resolve, reject)=>{
    pool.execute(priceVolumeData30DaysJoined,  (error, result) => {
      if(error){
        console.error(error)
        return reject('An error occured while executing the [ -- 30 day priceVolumeData -- ] query on the database');
      }
      return resolve(result);
      });
  });
};

const price90daysData = () => {
  return new Promise( (resolve, reject)=>{
    pool.execute(price90days,  (error, result) => {
      if(error){
        console.error(error)
        return reject('An error occured while executing the [ -- 90 day closing price -- ] query on the database');
      }
      return resolve(result);
      });
  });
};

const price90dayReturnsData = () => {
  return new Promise( (resolve, reject)=>{
    pool.execute(price90dayReturns,  (error, result) => {
      if(error){
        console.error(error)
        return reject('An error occured while executing the [ -- 30 day daily price returns -- ] query on the database');
      }
      return resolve(result);
      });
  });
};

const summaryData = () => {
  return new Promise( (resolve, reject)=>{
    pool.execute(summary,  (error, result) => {
      if(error){
        console.error(error)
        return reject('An error occured while executing the [ -- summary -- ] query on the database');
      }
      return resolve(result);
      });
  });
};

const turnover30dayData = () => {
  return new Promise( (resolve, reject)=>{
    pool.execute(turnover,  (error, result) => {
      if(error){
        console.error(error)
        return reject('An error occured while executing the [ -- 30 day turnover -- ] query on the database');
      }
      return resolve(result);
      });
  });
};

const turnover90dayAverage = () => {
  return new Promise( (resolve, reject)=>{
    pool.execute(turnover90dayAverageData,  (error, result) => {
      if(error){
        console.error(error)
        return reject('An error occured while executing the [ -- 90 day turnover -- ] query on the database');
      }
      return resolve(result);
      });
  });
};

const vfexSummaryData = () => {
  return new Promise( (resolve, reject)=>{
    pool.execute(vfexSummary,  (error, result) => {
      if(error){
        console.error(error)
        return reject('An error occured while executing the [ -- summary -- ] query on the database');
      }
      return resolve(result);
      });
  });
};

const volume90DaysData = () => {
  return new Promise( (resolve, reject)=>{
    pool.execute(volume90Days,  (error, result) => {
      if(error){
        console.error(error)
        return reject('An error occured while executing the [ -- 90 day priceVolumeData -- ] query on the database');
      }
      return resolve(result);
      });
  });
};

export { indicesData, priceVolumeData, price90daysData, price90dayReturnsData, summaryData, turnover30dayData, turnover90dayAverage, vfexSummaryData, volume90DaysData };