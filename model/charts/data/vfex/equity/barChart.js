import { axisBottom, axisLeft, isoParse, max, min, scaleBand, scaleLog, select, timeFormat } from 'd3';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;

const barChartSvg = (dataset, dates) => {
  dataset.reverse();
  dates.reverse();

  const data = dataset.map( (d,i) => ( {date: dates[i], value: +d} ));

  // accessor & format functions
  const dateAccessor = d => isoParse(d.date);
  const valueAccessor = d => d.value;
  const dateFormatter = timeFormat("%e-%b-%y");

  const dom = new JSDOM();
  const body = dom.window.document.body;

  const height = 300;
  const width = 800;
  const margin = {top:20, right: 15, bottom: 40, left: 17.5};

  // scales
  const svg = select(body)
    .append('svg')
    .attr('id', 'bar-chart')
    .attr("width", width + margin.left )
    .attr("height", height)
    .attr("viewBox", [0, 0, width + margin.left + margin.right, height])
    .attr("style", "max-width: 100%; height: auto;");
  // scales
  const xScale = scaleBand()
    .domain( dates )
    .range( [ (margin.left * 2.5), 815 ] )
    .padding(0.3);

  const yScale = scaleLog()
    .domain( [max(dataset), 1] )
    .range( [ margin.top, height - margin.bottom ] )
    .base(10)
    .nice()
    .clamp(true);

  // append & call x-axis
  svg.append('g').attr('transform', `translate(0,${height - margin.bottom })`).attr('class', 'bar-chart__xAxis').call(axisBottom(xScale).tickFormat( d => dateFormatter(d)).tickSizeInner(5).tickSizeOuter(0).tickValues([min(dates), (dates[parseInt(dates.length * 0.25)]), (dates[parseInt(dates.length * 0.5)]), (dates[parseInt(dates.length * 0.75)]), max(dates)]).tickPadding(8));

  // append & call y-axis
  svg.append('g').attr('transform', `translate(${margin.left * 2.5}, 0)`).attr('class', 'bar-chart__yAxis').call(axisLeft(yScale).ticks(10, d => (d === 1) ? 0 : new Intl.NumberFormat('en-GB', {notation: "compact", compactDisplay: "short", maximumFractionDigits: 0}).format(d)).tickSize(0).tickPadding(6));

  svg.append('g').attr('class', 'bars')
    .selectAll('rect')
    .data(data)
    .join('rect')
    .attr('class', 'bar')
    .attr('x', d => xScale(dateAccessor(d)))
    .attr('y', d => yScale(valueAccessor(d)))
    .attr('width', xScale.bandwidth())
    .attr('height', d => yScale(1) - yScale(d.value))
    .style('fill', '#204134ce')
    .attr('rx', 1)
    .attr('ry', 1);

  const svgString = dom.serialize(); 
  const svgStart = svgString.indexOf( '<svg' );
  const svgEnd = svgString.indexOf( '</body>' );
  return svgString.slice( svgStart, svgEnd );    
};

export default barChartSvg;