import 'dotenv/config';
import pool from './db.js';

// queries return the 30 days closing price & trading volume data for each equity
const priceVolumeData30DaysJoined = process.env.PRICE_VOLUME_DATA_QUERY;
const indices = process.env.INDICES_QUERY;
const summary = process.env.SUMMARY_QUERY;
const vfexSummary = process.env.VFEX_SUMMARY_QUERY;

const priceVolumeData = () => {
  return new Promise( (resolve, reject)=>{
    pool.execute(priceVolumeData30DaysJoined,  (error, result) => {
      if(error){
        console.error(error)
        return reject('An error occured while executing the [ -- priceVolumeData -- ] query on the database');
      }
      return resolve(result);
      });
  });
};

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

const vfexSummaryData = () => {
  return new Promise( (resolve, reject)=>{
    pool.execute(vfexSummary,  (error, result) => {
      if(error){
        console.error(error)
        return reject('An error occured while executing the [ -- vfex summary -- ] query on the database');
      }
      return resolve(result);
      });
  });
};

export { priceVolumeData, indicesData, summaryData, vfexSummaryData };