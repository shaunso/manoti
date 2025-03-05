// bar chart tooltip
function barChart(price, volume, dates) {
  const tooltipRectangles = Array.from(document.querySelectorAll('rect'));
  const tooltip = document.querySelector('#trade-volume-chart .tooltip');
  
  price.reverse();
  volume.reverse();
  dates.reverse();

  const closingPriceNumberFormatterObject = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 4, maximumFractionDigits:4});
  const thousandsSeparandNumberFormatterObject = new Intl.NumberFormat('en-GB');

  const dateFormatter = date => { return timeFormat("%d-%b-%Y")( (new Date().getTimezoneOffset() < 0) ? date : utcDay.offset(date, 1) )};

  tooltipRectangles.forEach( (d, i) => {
    const dateData = dates[i];
    const priceData = price[i];
    const volumeData = volume[i];

    d.addEventListener('pointermove', (e) => {
      e.preventDefault();

      const rectYposition = document.querySelector('svg#bar-chart').getBoundingClientRect().top;
      const pointerPosition = e.clientY;
      const tooltipYaxisPosition = pointerPosition - rectYposition;

      tooltip.style.display = 'block';
      // tooltip.style.top = ( -1 ) + 'px';
      tooltip.style.left = ( e.clientX - ( tooltip.getBoundingClientRect().width / 2 ) )  + 'px';
      tooltip.querySelector('.volume span').textContent = thousandsSeparandNumberFormatterObject.format(volumeData);
      tooltip.querySelector('.date').textContent = dateFormatter(isoParse(dateData));
      tooltip.querySelector('.price span').textContent = closingPriceNumberFormatterObject.format(priceData);
    });

    d.addEventListener('pointerleave', () => {
      tooltip.style.display = 'none';
    });

    d.addEventListener('touchstart', (e) => {
      e.preventDefault();
      
    });
  })
}
