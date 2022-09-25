const mySlideEl = document.querySelector(".mySlide");
const nextEl = document.querySelector(".next");
const mySlidesEl = document.querySelectorAll(".mySlides");

let currentSlide = 1;

nextEl.addEventListener('click', ()=>{
  currentSlide++
  updateSlide();
})

function updateSlide(){
  if(currentSlide > mySlidesEl.length){
      currentSlide = 1;
  }
  mySlideEl.style.transform = `translateX(-${(currentSlide - 1) * 100}%)`
}

