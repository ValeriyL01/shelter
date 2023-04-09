

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



//slider
async function getPets() {
    
    const pets = 'pets.json';
    const res = await fetch(pets);
   const data = await res.json(); 
const btnLeft = document.querySelector(".btn-left")
const btnRight = document.querySelector(".btn-right")
const slider = document.querySelector(".slider-pets")
const itemLeft = document.querySelector("#item-left")
const itemRight = document.querySelector("#item-right")
const width = document.documentElement.clientWidth



function createElement() {
    let randomNum = Math.floor(Math.random()*8)
    const card = document.createElement("div")
  card.id=randomNum
    card.classList.add("card-pets")
let img = document.createElement("img")
img.classList.add("img-carusel")
img.src = data[randomNum].img
card.appendChild(img)
let namePets = document.createElement("span")
namePets.classList.add("name-pets")
namePets.innerHTML = data[randomNum].name
card.appendChild(namePets)
let btnPets = document.createElement("button")
btnPets.classList.add("btn-pets")
btnPets.innerHTML="Learn more";
card.appendChild(btnPets)
    return card
}
btnRight.addEventListener("click", ()=>{
    slider.classList.add("transition-right")
    
})
btnLeft.addEventListener("click", ()=>{
    slider.classList.add("transition-left")
    
})


const moveLeft = () => {
    slider.classList.add("transition-left")
   
    btnLeft.removeEventListener("click", moveLeft)
    btnRight.removeEventListener("click", moveRight)
 
}
const moveRight = () => {
    slider.classList.add("transition-right")
    
    btnLeft.removeEventListener("click",moveLeft )
    btnRight.removeEventListener("click",moveRight )
    
   
}
btnLeft.addEventListener("click",moveLeft )
btnRight.addEventListener("click", moveRight)


slider.addEventListener("animationend",(event)=>{
    let itemChanges;
    if(event.animationName === "move-left"){
        slider.classList.remove("transition-left") 
        itemChanges = itemLeft
        document.querySelector("#item-center").innerHTML =  itemLeft.innerHTML;
        
    } else {
        slider.classList.remove("transition-right") 
        itemChanges = itemRight;
         document.querySelector("#item-center").innerHTML = itemRight.innerHTML;
         
        
    }
    itemChanges.innerHTML = "";
   
    if(width >=1181){
        for(let i = 0; i<3; i++){
            const card = createElement()
            itemChanges.appendChild(card)
        }
    }else if(width>= 570 && width <=1180){
        for(let i = 0; i<2; i++){
            const card = createElement()
            itemChanges.appendChild(card)
        }
    }else if(width >=320 && width<= 569){
        for(let i = 0; i<1; i++){
            const card = createElement()
            itemChanges.appendChild(card)
        }
    }
 
 /*
    const card1 = createElement()
    const card2 = createElement()
    const card3 = createElement()
     itemChanges.appendChild(card1)
     itemChanges.appendChild(card2)
     itemChanges.appendChild(card3)
*/
        btnLeft.removeEventListener("click", moveLeft)
    btnRight.removeEventListener("click", moveRight)



// popup
let name = document.querySelector(".name")
let type = document.querySelector(".type")
let breed = document.querySelector(".breed")
let description = document.querySelector(".description")
let agePets = document.querySelector(".age-pets")
let inoculationsPets = document.querySelector(".inoculations-pets")
let diseasesPets = document.querySelector(".diseases-pets")
let parasitesPets = document.querySelector(".parasites-pets")
let imagesPets = document.querySelector(".images-pets_popup")
let btnPopup = document.querySelector(".btn-popup")

const popup = document.querySelector(".popup")
let elements = document.querySelectorAll(".card-pets");

   
   elements.forEach(el =>{
   
    el.addEventListener("click", event =>{
        let target = event.target.closest('div').id
        body.classList.add("body-lock")
        
        popup.classList.add('popup_open')
        imagesPets.src = data[target].img
        name.innerHTML = data[target].name
        type.innerHTML = data[target].type
        breed.innerHTML = data[target].breed
        agePets.innerHTML = data[target].age
        inoculationsPets.innerHTML = data[target].inoculations
        diseasesPets.innerHTML = data[target].diseases
        parasitesPets.innerHTML = data[target].parasites
        description.innerHTML = data[target].description
        console.log(target)
        
        
    })
    btnPopup.addEventListener("click",()=>{
        popup.classList.remove('popup_open')
        body.classList.remove("body-lock")
    })

  
  
    
})

    
})


let name = document.querySelector(".name")
let type = document.querySelector(".type")
let breed = document.querySelector(".breed")
let description = document.querySelector(".description")
let agePets = document.querySelector(".age-pets")
let inoculationsPets = document.querySelector(".inoculations-pets")
let diseasesPets = document.querySelector(".diseases-pets")
let parasitesPets = document.querySelector(".parasites-pets")
let imagesPets = document.querySelector(".images-pets_popup")
let btnPopup = document.querySelector(".btn-popup")

const popup = document.querySelector(".popup")
let elements = document.querySelectorAll(".card-pets");

   
   elements.forEach(el =>{
   
    el.addEventListener("click", event =>{
        let target = event.target.closest('div').id
        body.classList.add("body-lock")
        
        popup.classList.add('popup_open')
        imagesPets.src = data[target].img
        name.innerHTML = data[target].name
        type.innerHTML = data[target].type
        breed.innerHTML = data[target].breed
        agePets.innerHTML = data[target].age
        inoculationsPets.innerHTML = data[target].inoculations
        diseasesPets.innerHTML = data[target].diseases
        parasitesPets.innerHTML = data[target].parasites
        description.innerHTML = data[target].description
        console.log(target)
        
        
    })
    btnPopup.addEventListener("click",()=>{
        popup.classList.remove('popup_open')
        body.classList.remove("body-lock")
    })

  
  
    
})


  }
getPets()

 