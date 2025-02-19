function treemap(data, date) {
  // sort data by market cap
  data.sort( (a,b) => a.market_cap - b.market_cap ).reverse()
  const currencyOneDecimalPointsNumberFormatterObject = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', notation: "compact", compactDisplay: "short", maximumFractionDigits: 1});
  const thousandsSeparandNumberFormatterObject = new Intl.NumberFormat('en-GB');

  const leaves = Array.from(document.querySelectorAll('.treemap-leaves g')).slice(0,13);
  const tooltip =document.querySelector('.tooltip__treemap');

  leaves.forEach( (d,i) => {
    const ticker = data[i].ticker;
    const marketCap = data[i].market_cap;
    const peRatio = data[i].pe_ratio;
    const tradeVolume30days = data[i].volume_30_day_avg;

    d.addEventListener('pointermove', (e) => {
      e.preventDefault();
      const pieChartContainerYposition = document.querySelector('svg#treemap').getBoundingClientRect().top;
      const pointerPosition = e.clientY;
      const tooltipYaxisPosition = pointerPosition - pieChartContainerYposition;

      tooltip.style.display = 'block';
      tooltip.style.top = ( tooltipYaxisPosition - 37.5 ) + 'px';
      tooltip.style.left = ( e.clientX + 7.5 )  + 'px';
      tooltip.querySelector('.date').textContent = date;
      tooltip.querySelector('.ticker').textContent = ticker;
      tooltip.querySelector('.market-cap').textContent = currencyOneDecimalPointsNumberFormatterObject.format(marketCap);
      tooltip.querySelector('.pe-ratio').textContent = peRatio;
      tooltip.querySelector('.trade-volume-30-days').textContent = thousandsSeparandNumberFormatterObject.format(tradeVolume30days);
    })

    d.addEventListener('pointerleave', () => {
      tooltip.style.display = 'none';
    });

    d.addEventListener('touchstart', (e) => {
      e.preventDefault();
    });    
  })
}