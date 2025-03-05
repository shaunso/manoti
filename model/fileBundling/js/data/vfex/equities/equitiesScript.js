import fs from 'fs';

const buildEquitiesScript = () => {
  const d3 = fs.readFileSync('model/js/d3.min.js', {
    encoding: 'utf-8',
    flag: 'r',
  });
  const searchFunction = fs.readFileSync('model/js/searchFunction.js', {
    encoding: 'utf-8',
    flag: 'r',
  });
  const barChart = fs.readFileSync('model/js/tooltip/barChart.js', {
    encoding: 'utf-8',
    flag: 'r',
  });

  const bundle = d3 + searchFunction + barChart ;

  fs.writeFileSync('public/js/data/vfex/equities/script.js', bundle, (err) => {
    if (err) throw 'an error occured while writing the equities script bundle'
  });
}

export default buildEquitiesScript