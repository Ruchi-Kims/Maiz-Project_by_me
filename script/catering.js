
/*Initialize Swiper -->*/
    
      var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


/*Carousel slides*/ 

const slidesQuotes = [{
  id: 1, 
  quote: "We had a great experience with the maiz catering team. All our friends thoroughly enjoyed the food and the entire process from contacting them to themwinding up post the service was seamless! I would highly recommend their service for your next party.",
  author: "Kaushal Shah"
},

  {
    id: 2, 
    quote: "Our experience with Maiz catering has been wonderful. The food taste and quality are authentic and the staff friendly and professional.We wouldn’t bat an eyelid for calling an encore!",
    author: "Anil Chopra"
  },

  {
    id: 3, 
    quote: "We loved the Maiz catering experience for my husband’s birthday celebration! The stand out was the service.Their staff was punctual, polite and professional. They set up, served and cleaned up perfectly. And as usual, the food was fresh and yummy. The best part was honestly how cost effective and convenient it was.We only had to provide a table and some hungry friends. They created the rest of the magic!",
    author: "Ruchi Shah"
  }
]
/*Get objets HTML*/ 
const quotes = document.getElementById("quotes");
const authors = document.getElementById("author");

/**Get Buttons chevrons */
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

  currentQuotes = 0;
  function slideFunc(){
    quotes.textContent = slidesQuotes[currentQuotes].quote;
    authors.textContent = slidesQuotes[currentQuotes].author;
  }

  nextBtn.addEventListener('click', function(){
    currentQuotes++
    if(currentQuotes > slidesQuotes.length - 1){
        currentQuotes = 0;
    }
    
    slideFunc()
  })

  prevBtn.addEventListener('click', function(){
    currentQuotes--
    if(currentQuotes < 0){
      currentQuotes = slidesQuotes.length - 1;
  }
    slideFunc()
  })
 

