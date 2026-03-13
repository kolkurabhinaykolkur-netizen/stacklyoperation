
// MOBILE MENU

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click",()=>{

mobileMenu.classList.add("active");

});

closeMenu.addEventListener("click",()=>{

mobileMenu.classList.remove("active");

});



/* COUNTER ANIMATION */

const counters = document.querySelectorAll(".counter");

let started = false;

window.addEventListener("scroll",()=>{

const trigger = window.innerHeight;

const section = document.querySelector(".hero-stats");

const sectionTop = section.getBoundingClientRect().top;

if(sectionTop < trigger && !started){

counters.forEach(counter=>{

const target = +counter.getAttribute("data-target");

let count = 0;

const speed = 40;

const update = ()=>{

count++;

counter.innerText = count;

if(count < target){

setTimeout(update,speed);

}

}

update();

});

started = true;

}

});

const cards = document.querySelectorAll(".feature-card");

window.addEventListener("scroll",()=>{

const trigger = window.innerHeight * 0.85;

cards.forEach(card=>{

const top = card.getBoundingClientRect().top;

if(top < trigger){

card.classList.add("show");

}

});

});


const steps = document.querySelector(".steps");

window.addEventListener("scroll",()=>{

const top = steps.getBoundingClientRect().top;
const trigger = window.innerHeight * 0.85;

if(top < trigger){

steps.style.opacity="1";
steps.style.transform="translateY(0)";

}

});




const sendSection = document.querySelector(".send-money");

window.addEventListener("scroll",()=>{

const sectionTop = sendSection.getBoundingClientRect().top;

const trigger = window.innerHeight * 0.85;

if(sectionTop < trigger){

sendSection.classList.add("show");

}

});


const testimonial = document.querySelector(".testimonial");

window.addEventListener("scroll",()=>{

const sectionTop = testimonial.getBoundingClientRect().top;

const trigger = window.innerHeight * 0.85;

if(sectionTop < trigger){

testimonial.classList.add("show");

}

});

// SCROLL ANIMATION FOR ALL SECTIONS

document.addEventListener("DOMContentLoaded", function(){

const sections = document.querySelectorAll(
".send-money, .testimonial, .pricing, .banking"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

sections.forEach(section=>{
observer.observe(section);
});

});


// NEWS CARD SCROLL ANIMATION

document.addEventListener("DOMContentLoaded",function(){

const cards = document.querySelectorAll(".news-card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{ threshold:0.2 });

cards.forEach(card=>{
observer.observe(card);
});

});









// FAQ ACCORDION

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item =>{

const question = item.querySelector(".faq-question");

question.addEventListener("click",()=>{

item.classList.toggle("active");

});

});







// EMAIL VALIDATION

const emailInput = document.getElementById("emailInput");
const subscribeBtn = document.getElementById("subscribeBtn");
const emailError = document.getElementById("emailError");

subscribeBtn.addEventListener("click", function(){

const email = emailInput.value.trim();

const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+$/;

if(email === ""){

emailError.textContent = "Please enter your email";

emailInput.classList.add("error");

return;

}

if(!regex.test(email)){

emailError.textContent = "Enter a valid email like name@domain";

emailInput.classList.add("error");

return;

}

emailError.textContent = "Subscribed successfully!";

emailError.style.color="lightgreen";

emailInput.classList.remove("error");

emailInput.value="";

});


// SERVICE HERO ANIMATION

const serviceHero = document.querySelector(".service-hero-content");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.3});

observer.observe(serviceHero);








// NUMBER COUNT ON SCROLL

const statElements = document.querySelectorAll(".stat-number");

let animationStarted = false;

window.addEventListener("scroll", () => {

const firstStatPosition = statElements[0].getBoundingClientRect().top;

const viewportHeight = window.innerHeight;

if(firstStatPosition < viewportHeight && !animationStarted){

statElements.forEach(item => {

const targetValue = +item.getAttribute("data-count");

let currentValue = 0;

const runCounter = () => {

const step = targetValue / 100;

if(currentValue < targetValue){

currentValue += step;

item.innerText = Math.floor(currentValue);

requestAnimationFrame(runCounter);

}else{

item.innerText = targetValue;

}

};

runCounter();

});

animationStarted = true;

}

});













// TEAM SECTION SCROLL ANIMATION

const teamSection = document.querySelector(".team-section");
const teamContent = document.querySelector(".team-right");
const teamMembers = document.querySelectorAll(".team-card");

window.addEventListener("scroll", () => {

const sectionPosition = teamSection.getBoundingClientRect().top;
const screenHeight = window.innerHeight;

if(sectionPosition < screenHeight - 100){

teamContent.classList.add("show");

teamMembers.forEach((member, index) => {

setTimeout(() => {

member.classList.add("show");

}, index * 200);

});

}

});


// Featured services scroll animation

const leftBlock = document.querySelector(".services-left");
const serviceBoxes = document.querySelectorAll(".service-card");

window.addEventListener("scroll", () => {

const triggerPoint = window.innerHeight * 0.85;

const sectionPosition = leftBlock.getBoundingClientRect().top;

if(sectionPosition < triggerPoint){

leftBlock.classList.add("show");

serviceBoxes.forEach((box, index) => {

setTimeout(() => {

box.classList.add("show");

}, index * 200);

});

}

});








const featureBoxes = document.querySelectorAll(".feature-box");
const stepBoxes = document.querySelectorAll(".step-box");

window.addEventListener("scroll",()=>{

featureBoxes.forEach(box=>{

const position = box.getBoundingClientRect().top;
const screen = window.innerHeight;

if(position < screen - 100){

box.style.opacity="1";
box.style.transform="translateY(0)";

}

});

stepBoxes.forEach(box=>{

const position = box.getBoundingClientRect().top;
const screen = window.innerHeight;

if(position < screen - 100){

box.style.opacity="1";
box.style.transform="translateY(0)";

}

});

});

const form = document.getElementById("contactForm");
const errorMsg = document.getElementById("formError");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");

/* ---------------- NAME LIVE VALIDATION ---------------- */

nameInput.addEventListener("input", function(){

let value = nameInput.value;

/* remove numbers and special characters */
nameInput.value = value.replace(/[^A-Za-z\s]/g,'');

});


/* ---------------- PHONE LIVE VALIDATION ---------------- */

phoneInput.addEventListener("input", function(){

let value = phoneInput.value;

/* remove alphabets and symbols */
phoneInput.value = value.replace(/[^0-9]/g,'');

/* limit to 10 digits */
if(phoneInput.value.length > 10){
phoneInput.value = phoneInput.value.slice(0,10);
}

});


/* ---------------- FORM SUBMIT VALIDATION ---------------- */

form.addEventListener("submit", function(e){

e.preventDefault();

const name = nameInput.value.trim();
const email = document.getElementById("email").value.trim();
const phone = phoneInput.value.trim();
const address = document.getElementById("address").value.trim();
const message = document.getElementById("message").value.trim();

const nameRegex = /^[A-Za-z\s]+$/;
const phoneRegex = /^[0-9]{10}$/;

/* empty check */

if(name === "" || email === "" || phone === "" || address === "" || message === ""){

errorMsg.innerText = "Please fill all the details.";
return;

}

/* name validation */

if(!nameRegex.test(name)){

errorMsg.innerText = "Name should contain only alphabets.";
return;

}

/* phone validation */

if(!phoneRegex.test(phone)){

errorMsg.innerText = "Phone number must be 10 digits.";
return;

}

errorMsg.innerText = "";

/* redirect */

window.location.href = "404.html";

});

