function heatMap(data) {
  const numberFormatterObject = new Intl.NumberFormat('en-GB', { style: 'percent', signDisplay: 'exceptZero', minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const squares = Array.from( document.querySelectorAll('#heat-map rect') );
  const tooltip = document.querySelector('.tooltip__heat-map');

  let m = 0;
  squares.forEach( square => {
    const equity = data[m].name;
    const value = data[m].priceDifference;
    const price = data[m].price;
    
    square.addEventListener('pointerover', (e) => {
      console.log([`clientX: ${e.clientX}`, `clientY: ${e.clientY}`, `layerX: ${e.layerX}`, `layerY: ${e.layerY}`])
      tooltip.style.display = 'block';
      tooltip.style.top = ( e.layerY * 7 )  + 'px';
      tooltip.style.left = ( e.clientX + 5 )  + 'px';
      tooltip.querySelector('.name').textContent = equity;
      tooltip.querySelector('.price-change').textContent = numberFormatterObject.format(value);
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