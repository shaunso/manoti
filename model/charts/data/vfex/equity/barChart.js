import { axisBottom, axisLeft, extent, isoParse, max, min, scaleLinear, scaleBand, select } from 'd3';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;

const barChartSvg = (dataset, dates) => {
  dataset.reverse()
  dates.reverse()

  const data = dataset.map( (d,i) => ( {date: dates[i], value: +d} ));

  // accessor functions
  const dateAccessor = d => isoParse(d.date);
  const valueAccessor = d => d.value;

  // console.log(dateAccessor('2025-01-02T22:00:00.000Z'))

  const dom = new JSDOM();
  const body = dom.window.document.body;

  const height = 300;
  const width = 800;

  const margin = {top:20, right: 15, bottom: 40, left: 17.5};

  // scales
  const svg = select(body)
    .append('svg')
    .attr("width", width + margin.left )
    .attr("height", height)
    .attr("viewBox", [0, 0, width + margin.left + margin.right, height])
    .attr("style", "max-width: 100%; height: auto;");
  // scales
  const xScale = scaleBand()
    .domain( dates )
    .range( [ (margin.left * 4), 815 ] )
    .padding(0.5);

  const yScale = scaleLinear()
    .domain( [0, max(dataset)] )
    .range( [ height - margin.bottom, margin.top ] );

  svg.append('g').attr('transform', `translate(0,${height - margin.bottom })`).attr('class', 'bar-chart__xAxis').call(axisBottom(xScale).tickSizeInner(0).tickSizeOuter(0))
  svg.append('g').attr('transform', `translate(${margin.left * 4}, 0)`).attr('class', 'bar-chart__yAxis').call(axisLeft(yScale).tickSize(4).tickValues([min(dataset), max(dataset) / 2, max(dataset)]))
console.log(dataset[22])
  svg.append('g').attr('class', 'bars')
    .selectAll('rect')
    .data(data)
    .join('rect')
    .attr('class', 'bar')
    .attr('x', d => xScale(dateAccessor(d)))
    .attr('y', d => yScale(valueAccessor(d)))
    .attr('width', xScale.bandwidth())
    .attr('height', d => yScale(0) - yScale(d.value))
    .style('fill', '#204134ce');

  const svgString = dom.serialize(); 
  const svgStart = svgString.indexOf( '<svg' );
  const svgEnd = svgString.indexOf( '</body>' );
  return svgString.slice( svgStart, svgEnd );    
};

export default barChartSvg;