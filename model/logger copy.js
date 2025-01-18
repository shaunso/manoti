import fs from 'fs';

const logger = ( req, res, next ) => {
  const logged = new Date();
  const logsStream = fs.createWriteStream('./utils/logs.txt', { flags: 'a' });
  logsStream.write(`\n>>>>>>>>> \n${logged}, ${req.headers['x-real-ip']},${req.rawHeaders}\n`);
//  logsStream.write('\n>>> ${req.headers["x-real-ip"]}\n');
  logsStream.end();
  next();
}

export default logger;