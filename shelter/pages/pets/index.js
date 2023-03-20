const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const body = document.querySelectorAll(".body")
btn.addEventListener("click", function () {
    nav.classList.toggle("nav-list-open");
   
});