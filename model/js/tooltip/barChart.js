// bar chart tooltip
function barChart(price, volume, dates) {
  const body = document.querySelector('body');
  const tooltipRectangles = Array.from(document.querySelectorAll('div#trade-volume-chart rect'));
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

    d.addEventListener('mousemove', (e) => {
      e.preventDefault();

      tooltip.style.display = 'block';
      tooltip.style.left = ( e.clientX - ( tooltip.getBoundingClientRect().width / 2 ) )  + 'px';
      tooltip.querySelector('.volume span').textContent = thousandsSeparandNumberFormatterObject.format(volumeData);
      tooltip.querySelector('.date').textContent = dateFormatter(isoParse(dateData));
      tooltip.querySelector('.price span').textContent = closingPriceNumberFormatterObject.format(priceData);
    });

    d.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
  })
}
