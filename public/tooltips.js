// grid carousel
const container = document.querySelectorAll('.carousel-grid-container');
const track = document.querySelectorAll('.carousel__track-grid-container');
let i = 0;

track.forEach( d => {
  const slides = Array.from( d.children );
  const slideWidth = slides[0].getBoundingClientRect().width;
  const slideHeight = slides[0].getBoundingClientRect().height;
  
  const carouselNavDotsIndicators = container[i].querySelector('.carousel__nav');
  const carouselPositionIndicatorDots = Array.from( carouselNavDotsIndicators.children );

  // arrange the slides next to each other
  const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  };
  slides.forEach( setSlidePosition );

  const moveToSlide = (d, currentSlide, targetSlide) => {
    if (!targetSlide) return;
    
    currentSlide.classList.remove('current-slide');
    currentSlide.classList.add('is-hidden');
    targetSlide.classList.add('current-slide');
    targetSlide.classList.remove('is-hidden');
  };

  const updateDotIndicatorPosition = ( currentDot, targetDot ) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
  };

  const displayArrows = (slides, previousButton, nextButton, targetDotIndex) => {
    if (targetDotIndex === 0) {
      previousButton.classList.add('is-hidden');
      nextButton.classList.remove('is-hidden')
    } else if (targetDotIndex === slides.length - 1) {
      previousButton.classList.remove('is-hidden');
      nextButton.classList.add('is-hidden');
    } else {
      previousButton.classList.remove('is-hidden');
      nextButton.classList.remove('is-hidden');
    }
  }

  const nextButton = container[i].querySelector('.carousel__button--right');
  const previousButton = container[i].querySelector('.carousel__button--left');

  // when user clicks left, move slide to the left
  previousButton.addEventListener('click', (e) => {
    const currentSlide = d.querySelector('.current-slide');
    const previousSlide = currentSlide.previousElementSibling;
    const previousIndex = slides.findIndex(slide => slide === previousSlide);
    const currentDot = carouselNavDotsIndicators.querySelector('.current-slide');
    const previousDot = currentDot.previousElementSibling;

    moveToSlide(d, currentSlide, previousSlide);
    updateDotIndicatorPosition(currentDot, previousDot);
    displayArrows(slides, previousButton, nextButton, previousIndex);
  });
  // when user clicks left, move slide to the right
  nextButton.addEventListener('click', (e) => {
    const currentSlide = d.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    const currentDot = carouselNavDotsIndicators.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;

    moveToSlide(d, currentSlide, nextSlide);
    updateDotIndicatorPosition(currentDot, nextDot);
    displayArrows(slides, previousButton, nextButton, nextIndex);
  });

  // when user clicks the nav indicators, move to the clicked slide
  carouselNavDotsIndicators.addEventListener('click', (e) => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = d.querySelector('.current-slide');
    const currentDot = carouselNavDotsIndicators.querySelector('.current-slide');
    const targetDotIndex = carouselPositionIndicatorDots.findIndex( el => el === targetDot );
    const targetSlide  = slides[targetDotIndex];
    
    moveToSlide(d, currentSlide, targetSlide);
    updateDotIndicatorPosition(currentDot, targetDot);
    displayArrows(slides, previousButton, nextButton, targetDotIndex);
  })
  i++;
})
// searcg function
const body = document.querySelector('body');
const icon = document.querySelector('#search-icon');
const searchBox = document.querySelector('#search-box');
const searchBoxTextBox = document.querySelector('#search-text-box');
const searchResultsBox = document.querySelector('#search-results');
const closeSearchBox = document.querySelector('svg.lucide-x');

searchResultsBox.replaceChildren();

const userSearchList = ["asun - african sun limited","axia - axia corporation limited","cmcl - caledonia mining corporation plc, zimbabwe depository receipts","edgr - edgars stores limited","fca - first capital bank limited","inn - innscor africa limited","inv - invictus energy limited, zimbabwe depository receipts","ned - nedbank zimbabwe limited, zimbabwe depository receipts","phl - padenga holdings limited","scil - seed co international limited","sim - simbisa brands limited","wphl - westprop holdings limited","zimw - zimplow holdings limited"];

const searchListReturnedResultArray = ["ASUN - African Sun Limited","AXIA - Axia Corporation Limited","CMCL - Caledonia Mining Corporation Plc, Zimbabwe Depository Receipts","EDGR - Edgars Stores Limited","FCA - First Capital Bank Limited","INN - Innscor Africa Limited","INV - Invictus Energy Limited, Zimbabwe Depository Receipts","NED - Nedbank Zimbabwe Limited, Zimbabwe Depository Receipts","PHL - Padenga Holdings Limited","SCIL - Seed Co International Limited","SIM - Simbisa Brands Limited","WPHL - Westprop Holdings Limited","ZIMW - Zimplow Holdings Limited"];

const linksList = ["/asun","/axia","/cmcl","/edgr","/fca","/inn","/inv","/ned","/phl","/scil","/sim","/wphl","/zimw"];

icon.addEventListener('click', () => {
  searchBox.style.display = 'block';
  closeSearchBox.style.display = 'block';
  icon.style.display = 'none';
  searchBoxTextBox.value = '';
})

searchBoxTextBox.addEventListener('input', (e) => {
  if ( e.target.value.length > 1 ) {
    const userTextInput = e.target.value.toLowerCase();
    const searchResults = userSearchList.filter( x => x.includes(userTextInput) );
  
    ( searchResults.length === 0 ) ? noMatchFound() : displaySearchResults(searchResults);    
  } else {
    searchResultsBox.replaceChildren();
  }
});

closeSearchBox.addEventListener('click', () => {
  searchBox.style.display = 'none';
  closeSearchBox.style.display = 'none';
  icon.style.display = 'block';
});

body.addEventListener( 'click', (e) => {
    searchResultsBox.replaceChildren();
});

// functions
function displaySearchResults(data) { 
  const searchResultsArray = [];

  data.forEach( d => {
    const listElement = document.createElement('li');
    const a = document.createElement('a');
    const arrayPosition = userSearchList.indexOf(d);

    a.textContent = searchListReturnedResultArray[arrayPosition];
    a.href = `/data/vfex/equities${ linksList[arrayPosition] }`;
    listElement.classList.add('search-result-item');

    listElement.appendChild(a);
    searchResultsArray.push(listElement);
  })

  searchResultsBox.replaceChildren(...searchResultsArray);
};

function noMatchFound() { 
  const listElement = document.createElement('li');

  listElement.textContent = 'No match found';
  listElement.style.cursor = 'default';
  listElement.classList.add('no-match-text');
  listElement.addEventListener( 'click' , e => e.stopPropagation() )

  searchResultsBox.replaceChildren(listElement);
};
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
// pie chart
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
//  treemap
function treemap(data) {
  // sort data by market cap
  data.sort( (a,b) => a.market_cap - b.market_cap ).reverse()
  const currencyOneDecimalPointsNumberFormatterObject = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', notation: "compact", compactDisplay: "short", maximumFractionDigits: 1});
  const thousandsSeparandNumberFormatterObject = new Intl.NumberFormat('en-GB');

  const leaves = Array.from(document.querySelectorAll('.treemap-leaves g')).slice(0,13);
  const tooltip =document.querySelector('.tooltip__treemap');

  leaves.forEach( (d,i) => {
    const name = data[i].short_name;
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
      tooltip.style.top = ( tooltipYaxisPosition - 82.5 ) + 'px';
      tooltip.style.left = ( e.clientX + 7.5 )  + 'px';
      tooltip.querySelector('.name').textContent = `${name}  (${ticker})`;
      tooltip.querySelector('.market-cap').textContent = 'market cap: ' + currencyOneDecimalPointsNumberFormatterObject.format(marketCap);
      tooltip.querySelector('.pe-ratio').textContent = 'p/e-ratio: ' +  ( !peRatio ? '---' : `${peRatio}x` );
      tooltip.querySelector('.trade-volume-30-days').textContent = '30 day avg volume: ' + thousandsSeparandNumberFormatterObject.format(tradeVolume30days);
    })

    d.addEventListener('pointerleave', () => {
      tooltip.style.display = 'none';
    });

    d.addEventListener('touchstart', (e) => {
      e.preventDefault();
    });    
  })
}
