// Here the code js of our code for the index html.


/*Sticky nav bar*/ 
const nav_barEl = document.querySelector(".nav_bar");
console.log(nav_barEl.offsetHeight)

const fast_blockEl = document.querySelector(".fast_block");
console.log(fast_blockEl.offsetHeight)

window.addEventListener("scroll",() =>{
   if(window.scrollY > fast_blockEl.offsetTop - nav_barEl.offsetHeight){
     nav_barEl.classList.add("sticky");
   }
   else{
    nav_barEl.classList.remove("sticky");
   }
})


/*Toggle Nav bar*/ 
let btn = document.querySelector('#btn');
let navigationEl = document.querySelector(".menu");
console.log(btn)




btn.addEventListener('click', () =>{
  if(navigationEl.style.display === "block"){
    navigationEl.style.display = "none";
  }
  else {
    navigationEl.style.display = "block";
  }

} )

/*btn.addEventListener('click', () =>{
  navigationEl.classList.toggle('hide');
})*/
