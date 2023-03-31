const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav-link")
const body = document.querySelector(".body")
btn.addEventListener("click", function () {
    nav.classList.toggle("nav-list-open");
    body.classList.toggle("body-lock")

});
navLink.forEach(el => {
    el.addEventListener("click", function () {
        nav.classList.remove("nav-list-open");
        body.classList.remove("body-lock")
    });
    
})
 
body.addEventListener("click", function (e) {
    if(!e.composedPath().includes(nav)){
        nav.classList.remove("nav-list-open");
    }
});