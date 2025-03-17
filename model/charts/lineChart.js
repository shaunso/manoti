import { axisBottom, axisLeft, axisRight, curveLinear, extent, format, isoParse, line, max, median, min, scaleLinear, scaleTime, select, timeFormat } from 'd3';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;

const svgChartElement = ( closingPriceDataArray, tradingVolumeDataArray, priceChange ) => {
  const dom = new JSDOM();
  const body = dom.window.document.body;
  
  // accessor functions
  // parsing the time in ISO format into a date object, as SQL returns dates in ISO
  const xAccessor = d => isoParse(d[0]);
  // closing price dataset retrieved from element at index [1]
  const yAccessor = d => +d[1];
  
  const margin = {top: 30, right: 40, bottom: 25, left: 40};
  const width = 400 - margin.left - margin.right;
  const height = 80 - margin.top - margin.bottom;
  
  const svg = select(body).append('svg')
    .attr('id', 'linechart')
    .attr("viewBox", [0, 0, width + margin.left + 30, height + margin.top + margin.bottom])
    .attr("style", "max-width: 100%; height: auto;");
  
  const chart = svg.append("g")
    .attr("transform", `translate(20, 17)`);
  
  const xScale = scaleTime()
    .domain( extent(closingPriceDataArray, xAccessor) )
    .range([0, width ]);
  
  const yScale = scaleLinear()
    .domain( [0, max(closingPriceDataArray, yAccessor)] )
    .range([height +15, 0])
    .nice();
  
  const dateFormatter = timeFormat("%e %b");

  const xAxis = axisBottom(xScale)
    .tickFormat( d => dateFormatter(d))
    .tickValues([min(closingPriceDataArray, xAccessor), median(closingPriceDataArray, xAccessor), max(closingPriceDataArray, xAccessor)]);
  
  chart.append("g")
    .call(xAxis.tickSize(0).tickPadding(12))
    .attr("transform", `translate(0, ${height + 15})`)
    .classed("xAxis", "true");
  
  const yAxis = axisRight(yScale)
    .tickFormat( format("$.2f") )
    .tickValues([0, (max(closingPriceDataArray, yAccessor)/2), max(closingPriceDataArray, yAccessor)]);
  
  chart.append("g")
    .call(yAxis)
    .attr("transform", `translate(${width}, 0)`)
    .classed("yAxis", "true");
  
  const lineGenerator = 
    line()
      .x( d => xScale( xAccessor(d) ))
      .y( d => yScale( yAccessor(d) ))
      .curve ( curveLinear)
  
  chart.append("g")
    .append("path")
    .datum(closingPriceDataArray)
    .attr("d", lineGenerator)
    .attr("fill", "none")
    .attr("stroke", () => {
      if (priceChange > 0) return "green"
      if (priceChange < 0) return "crimson"
      return "grey"        
    })
    .attr("stroke-width", 1.75);

  // drawing the tooltip
  const tooltipDot = chart.append("circle")
    .attr("r", 2)
    .attr("fill", "#204134a7")
    .attr("stroke", "#204134a7")
    .attr("stroke-width", 0.75)
    .style("opacity", 0)
    .style('pointer-events', 'none')
    .raise();

  // Add tooltip lines extending from the circle to the date and value
  const tooltipLineX = chart.append("line")
    .attr("class", "tooltip-line tooltip-line-x")
    .attr("id", "tooltip-line-x")
    .attr("stroke", "#161618")
    .attr("stroke-width", 1.2)
    .style("opacity", 0.5)
    .attr("stroke-dasharray", "0")
    .style("display", "none");      

  // tooltip container
  chart.append('rect')
    .attr("class", 'tooltip-listening-rectangle')
    .attr('width', width)
    .attr('height',  height + margin.bottom)
    .style('opacity', 0);
    
  // adding sub-title to graph
  chart.append("g")
    .append("text")
    .attr("class", "chart-sub-title")
    .attr("x", width / 2.25)
    .attr("y", -10)
    .text("price - 30 day");

  // add horizontal grid lines to chart
  const GridLine = () => axisLeft().scale(yScale);
  chart.append("g")
    .attr("class", "grid")
    .call(GridLine()
    .tickSize(-width,0,0)
    .tickFormat("")
    .tickValues([max(closingPriceDataArray, yAccessor)/2, max(closingPriceDataArray, yAccessor)])
    );    

  const svgString = dom.serialize(); 

  const svgStart = svgString.indexOf( '<svg' );
  const svgEnd = svgString.indexOf( '</body>' );

  return svgString.slice( svgStart, svgEnd );
};

export default svgChartElement;
