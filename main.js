/* HAMBURGER MENU */

const hamburger = document.getElementById("hamburger")
const mobileMenu = document.getElementById("mobileMenu")
const closeMenu = document.getElementById("closeMenu")

hamburger.addEventListener("click", ()=>{
mobileMenu.classList.add("active")
})

closeMenu.addEventListener("click", ()=>{
mobileMenu.classList.remove("active")
})



/* MOBILE DROPDOWN */

const mobileHome = document.querySelector(".mobile-home")
const mobileSubmenu = document.getElementById("mobileSubmenu")

mobileHome.onclick = () =>{

mobileSubmenu.style.display =
mobileSubmenu.style.display === "block" ? "none" : "block"

}



/* SCROLL ANIMATION */

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show")
}

})

})

document.querySelectorAll(".animate").forEach(el=>observer.observe(el))




const c = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show")
}

})

})

document.querySelectorAll(".animate").forEach(el=>c.observe(el))









const cards = document.querySelectorAll(".why-card")

const h = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1"
entry.target.style.transform="translateY(0)"
}
})
})

cards.forEach(card=>{
card.style.opacity="0"
card.style.transform="translateY(40px)"
card.style.transition="0.8s"
h.observe(card)
})



const v = document.querySelectorAll(".pay-card");

function revealCards(){

const trigger = window.innerHeight * 0.85;

v.forEach(card => {

const cardTop = card.getBoundingClientRect().top;

if(cardTop < trigger){
card.classList.add("show");
}

});

}

window.addEventListener("scroll", revealCards);
revealCards();



const stacklyBoxes = document.querySelectorAll(".stackly-card");

function stacklyRevealCards(){

let screenTrigger = window.innerHeight * 0.85;

stacklyBoxes.forEach(function(box){

let boxPosition = box.getBoundingClientRect().top;

if(boxPosition < screenTrigger){

box.classList.add("stackly-show");

}

});

}

window.addEventListener("scroll", stacklyRevealCards);

stacklyRevealCards();





/* FORM ELEMENT */

const form = document.getElementById("requestForm");

/* INPUTS */

const inputName = document.getElementById("userName");
const inputEmail = document.getElementById("userEmail");
const inputCountry = document.getElementById("userCountry");
const inputAmount = document.getElementById("userAmount");
const inputDesc = document.getElementById("userDesc");

/* ERROR ELEMENTS */

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const countryError = document.getElementById("countryError");
const amountError = document.getElementById("amountError");
const descError = document.getElementById("descError");


/* ---------------- NAME LIVE VALIDATION ---------------- */

inputName.addEventListener("input", function(){

let value = inputName.value;

/* remove numbers & special characters */
inputName.value = value.replace(/[^A-Za-z\s]/g,'');

if(inputName.value === ""){
nameError.innerText = "Only alphabets allowed";
}else{
nameError.innerText = "";
}

});


/* ---------------- AMOUNT LIVE VALIDATION ---------------- */

inputAmount.addEventListener("input", function(){

let value = inputAmount.value;

/* remove alphabets */
inputAmount.value = value.replace(/[^0-9]/g,'');

});


/* ---------------- FORM SUBMIT ---------------- */

form.addEventListener("submit", function(e){

e.preventDefault();

let name = inputName.value.trim();
let email = inputEmail.value.trim();
let country = inputCountry.value.trim();
let amount = inputAmount.value.trim();
let desc = inputDesc.value.trim();

let valid = true;

/* NAME */

if(name === ""){
nameError.innerText = "Name required";
valid = false;
}else{
nameError.innerText = "";
}

/* EMAIL */

if(email === ""){
emailError.innerText = "Email required";
valid = false;
}else{
emailError.innerText = "";
}

/* COUNTRY */

if(country === ""){
countryError.innerText = "Select country";
valid = false;
}else{
countryError.innerText = "";
}

/* AMOUNT */

if(amount === ""){
amountError.innerText = "Enter amount";
valid = false;
}else{
amountError.innerText = "";
}

/* DESCRIPTION */

if(desc === ""){
descError.innerText = "Enter description";
valid = false;
}else{
descError.innerText = "";
}

/* SUCCESS */

if(valid){
window.location.href = "404.html";
}

});

/* PAGE LOAD ANIMATION */

const formAnimation = document.querySelector(".animate-form");

window.addEventListener("load", function(){

setTimeout(function(){

formAnimation.classList.add("show");

},200);

});








const stacklySteps = document.querySelectorAll(".stackly-step");

function revealStacklySteps(){

let triggerPoint = window.innerHeight * 0.85;

stacklySteps.forEach(function(step){

let stepTop = step.getBoundingClientRect().top;

if(stepTop < triggerPoint){
step.classList.add("show");
}

});

}

window.addEventListener("scroll", revealStacklySteps);

revealStacklySteps();








const stacklyRevealItems = document.querySelectorAll(".reveal-left, .reveal-right");

function stacklyReveal(){

let triggerHeight = window.innerHeight * 0.85;

stacklyRevealItems.forEach(function(item){

let itemTop = item.getBoundingClientRect().top;

if(itemTop < triggerHeight){
item.classList.add("show");
}

});

}

window.addEventListener("scroll", stacklyReveal);

stacklyReveal();










const slider = document.querySelector(".stackly-slider");
const next = document.getElementById("nextBtn");
const prev = document.getElementById("prevBtn");

let scrollAmount = 0;

next.addEventListener("click", function(){

slider.scrollBy({
left:350,
behavior:"smooth"
});

});

prev.addEventListener("click", function(){

slider.scrollBy({
left:-350,
behavior:"smooth"
});

});
















