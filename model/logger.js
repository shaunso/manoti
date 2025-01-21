import fs from"fs";const logger=(e,r,t)=>{const a=new Date,s=fs.createWriteStream("./utils/logs2.txt",{flags:"a"});s.write(`\n>>>>>>>>> \n${a}, ${e.headers["x-real-ip"]},${e.rawHeaders}\n`),s.end(),t()};export default
logger;
