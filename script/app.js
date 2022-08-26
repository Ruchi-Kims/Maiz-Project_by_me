// Here the code js of our code for the index html.


/*Sticky nav bar*/ 
const nav_barEl = document.querySelector(".nav_bar");
console.log(nav_barEl.offsetHeight)

const body_section1El = document.querySelector(".body-section1");
console.log(body_section1El.offsetHeight)

window.addEventListener("scroll",() =>{
   if(window.scrollY > body_section1El.offsetTop - nav_barEl.offsetHeight){
     nav_barEl.classList.add("sticky");
   }
   else{
    nav_barEl.classList.remove("sticky");
   }
})


/*Toggle Nav bar*/ 
const btn = document.querySelector('#btn');
console.log(btn)

const navigationEl = document.querySelector(".navigation")
console.log(navigationEl)

btn.addEventListener('click', () =>{
  navigationEl.classList.toggle('menu_slide')
} )
