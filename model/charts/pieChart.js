import { arc, interpolateGreens, pie, quantize, scaleOrdinal, select } from 'd3';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;

const pieChartSVG = (marketCapData, vfexMarketCap) => {
  const dom = new JSDOM();
  const body = dom.window.document.body;

  const data = marketCapData;

  const margin = {top: 20, right: 20, bottom: 20, left: 20};
  const width = 50 - margin.left - margin.right;
  const height = 46 - margin.top - margin.bottom;
  const radius = width / 2;

  const svg = select(body).append('svg')
    .attr('id', 'pie-chart')
    .attr("viewBox", [0, 0, width + 5, height + 5]);

  const chart = svg.append("g")
    .attr("transform", `translate(${(width + 5) / 2}, ${(height + 5) / 2})`);

  const donut = pie()
    .value(d => +d.marketCap);

  const slices = donut(data);

  const arcs = arc()
    .outerRadius(radius)
    .innerRadius(radius / 1.4)
    .padAngle(0.05)  
    .padRadius(2.5)
    .cornerRadius(0.1);

  const colors = quantize(interpolateGreens, data.length);  

  const colorScale = scaleOrdinal()
    .domain(data.map( d => d.ticker))
    .range(colors);
     
  const arcsGroup = chart.append('g');

  arcsGroup.selectAll("path")
    .data(slices)
    .join("path")
    .attr("d", arcs)
    .attr("fill", d => colorScale(d.data.ticker))
    .on('pointerover', (d,i) => console.log( 'i.data.ticker'));

  svg.append("g")
    .append("text")
    .attr("id", "pie-chart-data")
    .attr("x", radius + 0.25 )
    .attr("y", radius + 1 )
    .text(vfexMarketCap);    

  const svgString = dom.serialize(); 
  const svgStart = svgString.indexOf( '<svg' );
  const svgEnd = svgString.indexOf( '</body>' );
  return svgString.slice( svgStart, svgEnd );
};

export default pieChartSVG;