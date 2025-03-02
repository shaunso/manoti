import 'dotenv/config';
import { pool2 } from './db.js';

const vfexSOCIquery = process.env.VFEX_SOCI;

const vfexSOCI = () => {
  return new Promise( (resolve, reject)=>{
    pool2.execute(vfexSOCIquery,  (error, result) => {
      if(error){
        console.error(error)
        return reject('An error occured while executing the [ -- vfex soci -- ] query on the database');
      }
      return resolve(result);
      });
  });
};

export { vfexSOCI };