function pieChart(data) {
  const numberFormatterObject = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits:0});

  const arcs = Array.from( document.querySelectorAll('#pie-chart path') );
  const tooltip = document.querySelector('.tooltip__pie-chart');
  const radius = document.getElementById('market-cap').getBoundingClientRect().width / 2;

  let m = 0;
  arcs.forEach( arc => {
    const equity = data[m].name;
    const value = data[m].marketCap;
    
    arc.addEventListener('pointerover', (e) => {
      tooltip.style.display = 'block';
      tooltip.style.top = radius  + 'px';
      tooltip.style.left = e.clientX  + 'px';
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