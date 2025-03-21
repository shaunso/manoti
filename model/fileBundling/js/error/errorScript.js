import fs from 'fs';

const buildErrorScript = () => {
  const searchFunction = fs.readFileSync('model/js/searchFunction.js', {
    encoding: 'utf-8',
    flag: 'r',
  });

  const bundle = searchFunction ;

  fs.writeFileSync('public/js/error/script.js', bundle, (err) => {
    if (err) throw 'an error occured while writing the error script bundle'
  });
}

export default buildErrorScript