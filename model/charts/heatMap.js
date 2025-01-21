import { select } from 'd3';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;

const heatMapSVG = (dataset) => {
  const dom = new JSDOM();
  const body = dom.window.document.body;

  dataset.sort((a, b) => a.priceDifference - b.priceDifference).reverse();

  const positiveColors = '#0f8f3c';  
  const noChangeColor = '#878787';  
  const negativeColors = '#dd0720';  

  const margin = {top: 20, right: 20, bottom: 20, left: 20};
  const width = 100 - margin.left - margin.right;
  const height = 75 - margin.top - margin.bottom;

  const svg = select(body).append('svg')
    .attr('id', 'heat-map')
    .attr('viewBox', [0, 0, width, height]);

  const box = 9;

  svg.append('g')
    .attr('transform', `translate(${7.5}, ${2.5})`)
    .selectAll('rect')
    .data(dataset)
    .join('rect')
    .attr('stroke', 'black')
    .attr('stroke-width', 0.05)
    .attr('width', box - 0.9)
    .attr('height', box - 0.9)
    .attr('x', (d, i) => box * (i % 5) )
    .attr('y', (d, i) => box * ((i / 5) | 0))
    .attr('rx', 1)
    .attr('ry', 1)
    .attr('fill', d => {
      if (d.priceDifference > 0) {
        return positiveColors
      } else if (d.priceDifference < 0) {
        return negativeColors
      } else return noChangeColor
    });

  const svgString = dom.serialize(); 
  const svgStart = svgString.indexOf( '<svg' );
  const svgEnd = svgString.indexOf( '</body>' );
  return svgString.slice( svgStart, svgEnd );
};

export default heatMapSVG;