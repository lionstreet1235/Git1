let currentSlide = 0;
const slide = document.querySelector('.carousel-slide');
const slides = slide.querySelectorAll('img');
const slideWidth = slides[0].clientWidth;

function moveSlide() {
  slide.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

function nextSlide() {
  if (currentSlide >= slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  moveSlide();
}

setInterval(nextSlide, 3000);