function pieChart(data) {
  const numberFormatterObject = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits:0});

  const arcs = Array.from( document.querySelectorAll('#pie-chart path') );
  const tooltip = document.querySelector('.tooltip__pie-chart');

  let m = 0;
  arcs.forEach( arc => {
    const equity = data[m].name;
    const value = data[m].marketCap;
    
    arc.addEventListener('pointermove', (e) => {
      const pieChartContainerYposition = document.querySelector('svg#pie-chart').getBoundingClientRect().top;
      const pointerPosition = e.clientY;
      const tooltipYaxisPosition = pointerPosition - pieChartContainerYposition;

      tooltip.style.display = 'block';
      tooltip.style.top = ( tooltipYaxisPosition - 37.5 ) + 'px';
      tooltip.style.left = ( e.clientX + 7.5 )  + 'px';
      tooltip.querySelector('.equity').textContent = equity;
      tooltip.querySelector('.value').textContent = numberFormatterObject.format(value);
    });

    arc.addEventListener('pointerleave', () => {
      tooltip.style.display = 'none';
    });

    arc.addEventListener('touchstart', (e) => {
      e.preventDefault();
    });

    m++;
  })
}