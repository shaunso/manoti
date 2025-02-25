// line chart
function tooltipFunction(data) {
  const tooltipRectangles = document.querySelectorAll('.tooltip-listening-rectangle');

  const closingPriceNumberFormatterObject = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 4, maximumFractionDigits:4});
  const thousandsSeparandNumberFormatterObject = new Intl.NumberFormat('en-GB');

  const dateFormatter = date => { return timeFormat("%d-%b-%Y")( (new Date().getTimezoneOffset() < 0) ? date : utcDay.offset(date, 1) )};

  let n = 0;
  tooltipRectangles.forEach( (rectangle) => {
    const price = data[n].closingPriceData;
    const volume = data[n].tradingVolumeData;

    const tooltip = document.querySelectorAll('.tooltip')[n];
    const tooltipDot = document.querySelectorAll('svg#linechart circle')[n];
    const tooltipLineX = document.querySelectorAll('.tooltip-line-x')[n];

    const xAccessor = d => isoParse(d[0]);
    const yAccessor = d => +d[1];

    const xScale = scaleTime()
      .domain( extent(price, xAccessor) )
      .range([0, 400 - 80]);

    const yScale = scaleLinear()
      .domain( [0, max(price, yAccessor)] )
      .range([80 - 55 + 15, 0])
      .nice();

    rectangle.addEventListener('pointermove', (e) => {
      const userScreenWidth = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 1599) return (xPos ) + 'px'
        if (screenWidth > 1499) return (xPos ) + 'px'
        if (screenWidth > 1399) return (xPos ) + 'px'
        if (screenWidth > 1299) return (xPos / 2) + 'px'
        if (screenWidth > 1099) return (xPos / 2) + 'px'
        if (screenWidth > 999) return (xPos / 4) + 'px'
        if (screenWidth > 890) return (xPos/ 4) + 'px'
        if (screenWidth > 800) return (xPos / 4) + 'px'
        if (screenWidth > 680) return (xPos  / 4) + 'px'
        if (screenWidth > 599) return (xPos  / 4) + 'px'
        if (screenWidth > 524) return (xPos / 4) + 'px'
        if (screenWidth > 479) return (xPos / 4) + 'px'
        if (screenWidth > 419) return (xPos - 30) + 'px'
        return (xPos / 1.75 ) + 'px'
      };

      const [xCord] = pointer(e);
      const bisectDate = bisector(xAccessor).center;
      const x0 = xScale.invert(xCord);

      const i = bisectDate(price, x0);
      const d = price[i];
      const xPos = xScale(xAccessor(d));
      const yPos = yScale(yAccessor(d));

      const h = bisectDate(volume, x0);
      const vol = volume[h][1];

      tooltipDot.style.opacity = 1;
      tooltipDot.setAttribute('cx', (xPos) + 'px');
      tooltipDot.setAttribute('cy', (yPos) + 'px');

      tooltip.style.display = 'block';
      tooltip.style.left = userScreenWidth();
      tooltip.style.top = '-40' + 'px';
      tooltip.querySelector('.price').textContent = `${closingPriceNumberFormatterObject.format(yAccessor(d))}`;
      tooltip.querySelector('.date').textContent = dateFormatter(xAccessor(d));
      tooltip.querySelector('.volume').textContent = `${thousandsSeparandNumberFormatterObject.format(vol)}`;

      tooltipLineX.style.display = 'block';
      tooltipLineX.setAttribute('x1', (xPos) + 'px');
      tooltipLineX.setAttribute('x2', (xPos) + 'px');
      tooltipLineX.setAttribute('y1', -5);
      tooltipLineX.setAttribute('y2', 80 -52 +15);
    });

    rectangle.addEventListener('pointerleave', (e) => {
      tooltipDot.style.opacity = 0;
      tooltip.style.display = 'none';
      tooltipLineX.style.display = 'none';
    });

    rectangle.addEventListener('pointercancel', (e) => {
      tooltipDot.style.opacity = 0;
      tooltip.style.display = 'none';
      tooltipLineX.style.display = 'none';
    });

    rectangle.addEventListener('touchstart', (e) => {
      e.preventDefault();
    });
    n++;
  })
}
