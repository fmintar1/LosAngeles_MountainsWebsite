const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.carousel_pictures_set');
const ellipses = document.querySelectorAll('.ellipses');

let currentSlideIndex = 0;
let nextButton = document.getElementById('carousel_next');
let prevButton = document.getElementById('carousel_prev');

function rotateCarousel() {
    slides[currentSlideIndex].style.display = 'none';
    currentSlideIndex++;
    slides[currentSlideIndex].style.display = 'block';
}

function rotateCarouselBackwards() {
    slides[currentSlideIndex].style.display = 'none';
    currentSlideIndex--;
    slides[currentSlideIndex].style.display = 'block';
}

function ellipseOpacity() {
    for(let i = 0; i < ellipses.length; i++) {
        if(i === currentSlideIndex) {
            ellipses[i].style.opacity = '1';
        } else {
            ellipses[i].style.opacity = '.3';
        }
    }
}

ellipseOpacity();

function buttonVisibility() {
    currentSlideIndex == 0 ? ( 
        prevButton.style.display = 'none',
        nextButton.style.display = 'block'
    ) : currentSlideIndex == slides.length - 1 ? (
        prevButton.style.display = 'block',
        nextButton.style.display = 'none'
     ) : (
        prevButton.style.display = 'block',
        nextButton.style.display = 'block'
    )
}

function prevButtonFunc() {
    rotateCarouselBackwards();
    buttonVisibility();
    ellipseOpacity();
}

function nextButtonFunc() {
    rotateCarousel();
    buttonVisibility();
    ellipseOpacity();
}