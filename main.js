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





const paymentFormBox = document.getElementById("requestForm");

const inputName = document.getElementById("userName");
const inputEmail = document.getElementById("userEmail");
const inputCountry = document.getElementById("userCountry");
const inputAmount = document.getElementById("userAmount");
const inputDesc = document.getElementById("userDesc");

const nameErrorMsg = document.getElementById("nameError");
const emailErrorMsg = document.getElementById("emailError");
const countryErrorMsg = document.getElementById("countryError");
const amountErrorMsg = document.getElementById("amountError");
const descErrorMsg = document.getElementById("descError");

/* NAME VALIDATION */

function validateName(nameValue){

const namePattern = /^[A-Za-z\s]+$/;

if(!namePattern.test(nameValue)){
return false;
}

return true;

}

/* FORM SUBMIT */

paymentFormBox.addEventListener("submit", function(e){

e.preventDefault();

let userNameValue = inputName.value.trim();
let userEmailValue = inputEmail.value.trim();
let userCountryValue = inputCountry.value.trim();
let userAmountValue = inputAmount.value.trim();
let userDescValue = inputDesc.value.trim();

let formValid = true;

/* name check */

if(userNameValue === "" || !validateName(userNameValue)){
nameErrorMsg.innerText="Only alphabets allowed in name";
inputName.classList.add("input-error");
formValid=false;
}else{
nameErrorMsg.innerText="";
inputName.classList.remove("input-error");
}

/* email check */

if(userEmailValue===""){
emailErrorMsg.innerText="Email required";
inputEmail.classList.add("input-error");
formValid=false;
}else{
emailErrorMsg.innerText="";
inputEmail.classList.remove("input-error");
}

/* country */

if(userCountryValue===""){
countryErrorMsg.innerText="Select country";
inputCountry.classList.add("input-error");
formValid=false;
}else{
countryErrorMsg.innerText="";
inputCountry.classList.remove("input-error");
}

/* amount */

if(userAmountValue===""){
amountErrorMsg.innerText="Enter amount";
inputAmount.classList.add("input-error");
formValid=false;
}else{
amountErrorMsg.innerText="";
inputAmount.classList.remove("input-error");
}

/* description */

if(userDescValue===""){
descErrorMsg.innerText="Enter description";
inputDesc.classList.add("input-error");
formValid=false;
}else{
descErrorMsg.innerText="";
inputDesc.classList.remove("input-error");
}

/* redirect */

if(formValid){
window.location.href="404.html";
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



















