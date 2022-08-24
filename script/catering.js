const btn = document.querySelector("#btn")
const p1El = document.querySelector(".p1")
const p2El = document.querySelector(".p2")
const p3El = document.querySelector(".p3")


const pElmts = [p1El,p2El,p3El]

  pElmts.forEach(choiceParagraph)

function choiceParagraph(array){
   let slides = Math.floor(Math.random() * array.length);
   
}







btn.addEventListener("click", choiceParagraph)

