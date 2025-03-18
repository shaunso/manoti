import { axisBottom, format, scaleLinear, select } from 'd3';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;

const boxPlotSvg = (dataset) => {
  const dom = new JSDOM();
  const body = dom.window.document.body;
  const { ticker, min, '1Q': q1, median, '3Q': q3, max } = dataset;

  // dimensions & margins
  const height = 300;
  const width = 800;
  const margin = {top:20, right: 15, bottom: 40, left: 17.5};

  // append svg element
  const svg = select(body)
    .append('svg')
    .attr('id', 'box-plot')
    .attr('width', width )
    .attr('height', height)
    .attr('viewBox', [0, 0, width + margin.left + margin.right, height])
    .attr('style', 'max-width: 100%; height: auto;');

  const chart = svg.append('g')
    .attr('class', 'chart')
    .attr('transform', `translate(${ margin.left }, 0)`);

  // x-scale
  const xScale = scaleLinear()
    .domain([min, max])
    .range([0, width  ]);

  // x-axis
  const xAxis = chart.append('g')
    .attr('class', 'xAxis')
    .attr('transform', `translate(0, ${height / 1.5 })`);

  xAxis.call( axisBottom(xScale).tickFormat(d => d == 0 ? '0%' : format('+.1%')(d) ).tickValues([ min, q1*2, median, q3*2, max]));

  xAxis.selectAll('text')  
  .style('text-anchor', 'end')
  .attr('x', '-9px')
  .attr('y', '-6px')
  .attr('transform', 'rotate(-90)')

  // box-plot features
  const boxCenterY = (height - margin.top - margin.bottom) / 2;
  const boxHeight = (height) / 3.375;

  // append the line element for extremes
  chart.append('g')
    .attr('class', 'line')
    .append('line')
    .attr('x1', xScale(+min))
    .attr('x2', xScale(+max))
    .attr('y1', boxCenterY)
    .attr('y2', boxCenterY)
    .attr('stroke', 'black')
    .attr('stroke-width', 1.25); 

  // append the rect element
  chart.append('g')
    .attr('class', 'rect')
    .append('rect')
    .attr('x', xScale(q1 * 2))
    .attr('y', (boxCenterY - (boxHeight / 2)) )
    .attr('height', boxHeight)
    .attr('width', xScale(q3 * 2) - xScale(q1 * 2) )
    .attr('stroke', 'black')
    .attr('stroke-width', 1.5)
    .attr('fill', '#69b3a2')
    .attr('rx', 1.5)
    .attr('ry', 1.5);

  // append the line element for min, median & max
  chart.selectAll('vertical-lines')
    .data([min, median, max])
    .join('line')
    .attr('x1', d => xScale(d))
    .attr('x2', d => xScale(d))
    .attr('y1', boxCenterY - (boxHeight / 2))
    .attr('y2', boxCenterY + (boxHeight / 2))
    .attr('stroke', 'black')
    .attr('stroke-width', 1.25);

  // adjust value for q1 & q3 ticks
  const ticks = Array.from(body.querySelectorAll('g.xAxis g.tick text'));  
  ticks[1].textContent = format('+.1%')(q1);
  ticks[3].textContent = format('+.1%')(q3);

  const svgString = dom.serialize(); 
  const svgStart = svgString.indexOf( '<svg' );
  const svgEnd = svgString.indexOf( '</body>' );
  return svgString.slice( svgStart, svgEnd );  
};

export default boxPlotSvg;