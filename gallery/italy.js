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
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
    const targetIndex = dot.findIndex(slide => slide === targetDot);
    hideShowArrows(targetIndex);
}

const hideShowArrows = (targetIndex) => {
    if (targetIndex === 0) {
        previousButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        previousButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        previousButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

//when I click right, move slides to the right 
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);



});

//when I click left, move slides to the left 
previousButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);


    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);


});

//when clicking nav indicators, move to that slide.

dotNav.addEventListener('click', e => {
    //what indicator was clicked on?
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    //console.log(`currentSlide = ${currentSlide}`);
    const currentDot = dotNav.querySelector('.current-slide');
    const targetIndex = dot.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    //console.log(`targetSlide = ${targetSlide}`);

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);



});

//gallery.js:19 Uncaught TypeError: Cannot read properties of null (reading 'style')
//at moveToSlide(gallery.js: 19: 58)
//

//gallery.js:36 Uncaught TypeError: Cannot read properties of undefined (reading 'remove')
//at hideShowArrows(gallery.js: 36: 34)
//at updateDots(gallery.js: 28: 5)
//at HTMLDivElement. < anonymous > (gallery.js: 89: 5) at HTMLButtonElement. < anonymous > (gallery.js: 51: 5)