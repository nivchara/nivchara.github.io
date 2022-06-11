const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const previousButton = document.querySelector('.carousel__button--left');
const dotNav = document.querySelector('.carousel__nav');
const dot = Array.from(dotNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

//arrange slides next to one another
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
})

//when clicking left icon, move slides left as well as right on right icon click. 
//when clicking nav indicators, move to that slide.