import fs from 'fs';

const buildEquitiesScript = () => {
  const searchFunction = fs.readFileSync('model/js/searchFunction.js', {
    encoding: 'utf-8',
    flag: 'r',
  });

  const bundle = searchFunction ;

  fs.writeFileSync('public/js/data/vfex/equities/script.js', bundle, (err) => {
    if (err) throw 'an error occured while writing the equities script bundle'
  });
}

export default buildEquitiesScript