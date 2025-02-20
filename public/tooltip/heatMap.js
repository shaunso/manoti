function heatMap(data) {
  const numberFormatterObject = new Intl.NumberFormat('en-GB', { style: 'percent', signDisplay: 'exceptZero', minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const squares = Array.from( document.querySelectorAll('#heat-map rect') );
  const tooltip = document.querySelector('.tooltip__heat-map');

  let m = 0;
  squares.forEach( square => {
    const equity = data[m].name;
    const value = data[m].priceDifference;
    const price = data[m].price;
    
    square.addEventListener('pointermove', (e) => {
      const heatMapContainerYposition = document.querySelector('svg#heat-map').getBoundingClientRect().top;
      const pointerPosition = e.clientY;
      const tooltipYaxisPosition = pointerPosition - heatMapContainerYposition;

      tooltip.style.display = 'block';
      tooltip.style.top = ( tooltipYaxisPosition - 50 ) + 'px';
      tooltip.style.left = ( e.clientX + 7.5 )  + 'px';
      tooltip.querySelector('.name').textContent = equity;
      tooltip.querySelector('.price-change').textContent = !value ? '---' : numberFormatterObject.format(value);
      tooltip.querySelector('.heatmap-price').textContent = price;
    });

    square.addEventListener('pointerleave', () => {
      tooltip.style.display = 'none';
    });

    square.addEventListener('touchstart', (e) => {
      e.preventDefault();
    });

    m++;
  })
}