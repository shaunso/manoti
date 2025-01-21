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