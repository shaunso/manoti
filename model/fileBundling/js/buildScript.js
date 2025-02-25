import fs from 'fs';

const buildScript = () => {
  const d3 = fs.readFileSync('public/lineChartFunctions.min.js', {
    encoding: 'utf-8',
    flag: 'r',
  });
  const gridCarouselFunction = fs.readFileSync('model/fileBundling/js/gridCarousel.js', {
    encoding: 'utf-8',
    flag: 'r',
  });
  const searchFunction = fs.readFileSync('model/fileBundling/js/searchFunction.js', {
    encoding: 'utf-8',
    flag: 'r',
  });
  const heatMap =fs.readFileSync('model/fileBundling/js/heatMap.js', {
    encoding: 'utf-8',
    flag: 'r',
  });
  const lineChart = fs.readFileSync('model/fileBundling/js/lineChart.js', {
    encoding: 'utf-8',
    flag: 'r',
  });
  const pieChart = fs.readFileSync('model/fileBundling/js/pieChart.js', {
    encoding: 'utf-8',
    flag: 'r',
  });
  const treemap = fs.readFileSync('model/fileBundling/js/treemap.js', {
    encoding: 'utf-8',
    flag: 'r',
  });

  const bundle = d3 + gridCarouselFunction + searchFunction + heatMap + lineChart + pieChart + treemap;

  fs.writeFileSync('public/script.js', bundle, (err) => {
    if (err) throw 'an error occured while writing the script bundle'
  });
}

export default buildScript