import fs from 'fs';

const buildRootScript = () => {
  const d3 = fs.readFileSync('model/js/d3.min.js', {
    encoding: 'utf-8',
    flag: 'r',
  });
  const gridCarouselFunction = fs.readFileSync('model/js/gridCarousel.js', {
    encoding: 'utf-8',
    flag: 'r',
  });
  const searchFunction = fs.readFileSync('model/js/searchFunction.js', {
    encoding: 'utf-8',
    flag: 'r',
  });
  const heatMap =fs.readFileSync('model/js/tooltip/heatMap.js', {
    encoding: 'utf-8',
    flag: 'r',
  });
  const lineChart = fs.readFileSync('model/js/tooltip/lineChart.js', {
    encoding: 'utf-8',
    flag: 'r',
  });
  const pieChart = fs.readFileSync('model/js/tooltip/pieChart.js', {
    encoding: 'utf-8',
    flag: 'r',
  });
  const treemap = fs.readFileSync('model/js/tooltip/treemap.js', {
    encoding: 'utf-8',
    flag: 'r',
  });

  const bundle = d3 + gridCarouselFunction + searchFunction + heatMap + lineChart + pieChart + treemap;

  fs.writeFileSync('public/js/script.js', bundle, (err) => {
    if (err) throw 'an error occured while writing the root page script bundle'
  });
}

export default buildRootScript