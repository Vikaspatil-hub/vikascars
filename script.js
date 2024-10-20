let currentSlide=1;
const slides=document.querySelectorAll('.slide');

function showSlide(slideindex) {
  slides.forEach((slide)=>slide.classList.remove('active'));
  slides[slideindex-1].classList.add('active');
}

function prevSlide() {
  if(currentSlide>1) {
    currentSlide--;
    showSlide(currentSlide);
  }
}
function nextSlide() {
  if (currentSlide<slides.length) {
    currentSlide++;
   showSlide(currentSlide);
  }
}
showSlide(currentSlide);
