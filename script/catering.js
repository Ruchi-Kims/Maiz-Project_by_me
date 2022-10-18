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


/*Initialize Swiper -->*/
    
      var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
       {
        delay: 100,
      });
    

