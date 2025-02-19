// import modules
import { hierarchy, interpolateRainbow, quantize, scaleOrdinal, select, treemap, treemapResquarify } from 'd3';
import jsdom from 'jsdom';

// variable declaration
const { JSDOM } = jsdom;

const treemapSVG = ( marketCapData ) => {
 const dom = new JSDOM();
 const body = dom.window.document.body;

 const data = {
  name: '50dayVolumeTurnover',
  children: []
};

marketCapData.forEach( d => {
  (data.children).push( {
    name: d.ticker,
    value: d.market_cap
  })
})

 const dimensions = {
  width: 50,
  height: 55,
  margin: {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  }
 }

 const chartWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
 const chartHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

 // scale
 const colors = quantize(interpolateRainbow, marketCapData.length)
 const colorScale = scaleOrdinal()
  .domain(marketCapData.map( d => d.ticker) )
  .range(colors);

  //create the hierarchy
  const root = hierarchy(data)
    .sum(d => d.value)
    .sort((a,b) => b.value - a.value);

  // create the treemap layout
  const nodes = treemap()
    .tile(treemapResquarify)
    .size([ chartWidth, chartHeight ])
    .paddingTop(1)
    .round(true);

 const svg = select(body)
  .append('svg')
  .attr('id', 'treemap')
  .attr('viewBox', [0, 0, chartWidth, chartHeight ]);

  const chart = svg.append('g')
    .attr('class', 'treemap-leaves');

  // add cell for each leaf of the hierarchy
  const leaf = chart.selectAll('g')
    .data(nodes(root).leaves())
    .join('g')
    .attr('class', d => d.data.name);
  
  // draw the treemap
  leaf.append('rect')
    .style('fill', d => colorScale(d.data.name))
    .attr('opacity', 0.75)
    .attr('x', d => d.x0)
    .attr('y', d => d.y0)
    .attr('width', d => d.x1 - d.x0)
    .attr('height', d => d.y1 - d.y0)
    .attr('rx', 0.5)
    .attr('ry', 0.5);

  // treemap labels
  const labels = chart.append('g')
    .attr('class', 'treemap-label')
    .selectAll('g')
    .data(root.children)
    .join('g')
    .attr('class', d => (d.x1 - d.x0) > 3 && ((d.y1 - d.y0) > 3) ? `${d.data.name}-label label--visible` : `${d.data.name}-label label--hidden` )
    .call( text => {
      text.append('text')
      .text( d => d.data.name )
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('dx', '0.75em')
      .attr('dy', '1.5em')
    })

  const svgString = dom.serialize();
  const svgStart = svgString.indexOf('<svg');
  const svgEnd = svgString.indexOf('</body>');
  return svgString.slice(svgStart, svgEnd);
}

export default treemapSVG;