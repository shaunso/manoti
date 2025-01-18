import { axisRight, extent, isoParse, scaleTime, select } from 'd3';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;

const timelineSVG = (data) => {
  const dom = new JSDOM();
  const body = dom.window.document.body;

  data.sort((a, b) => a.date - b.date);

  const margin = {top: 20, right: 20, bottom: 20, left: 20};
  const width = 100 - margin.left - margin.right;
  const height = 310 - margin.top - margin.bottom;

  const accessor = d => isoParse(d.date);

  const scale = scaleTime()
    .domain([new Date(2020,9), new Date(2025,2)])
    .range([ 0, height - 5 ]);

  const svg = select(body).append('svg')
    .attr('id', 'timeline')
    .attr('viewBox', [0, 0, width, height]);

  const chart = svg.append('g')
    .attr('transform', `translate(${5}, 0)`)

  const axis = axisRight(scale).ticks(0).tickSizeOuter(0);

  chart.append('g').call(axis)

  chart.append('g')
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('cx', 0.5)
    .attr('cy', (d, i) => scale(accessor(d)) + (i)+(i*1.2))
    .attr('r', 2)
    .attr('fill', 'var(--ter-color)')
    .attr('stroke', 'var(--sec-color)')
    .attr('stroke-width', 0.75)
    // .raise()

  chart.append('g')
    .selectAll('text')
    .data(data)
    .join('text')
    .attr('x', 5)
    .attr('y', (d, i) => scale(accessor(d)) + (i + 1)+(i*1.2))
    .text(d => `${d.date.toLocaleString('default', { month: 'long' })}, ${new Date(d.date).getFullYear()} - ${d.name}`)


  const svgString = dom.serialize(); 
  const svgStart = svgString.indexOf( '<svg' );
  const svgEnd = svgString.indexOf( '</body>' );
  return svgString.slice( svgStart, svgEnd );
};

export default timelineSVG;