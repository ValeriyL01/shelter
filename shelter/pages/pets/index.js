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


const pets = [
    
      {
        "name": "Katrine",
        "img": "../../assets/images/katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
        {
          "name": "Jennifer",
          "img": "../../assets/images/jennifer.png",
          "type": "Dog",
          "breed": "Labrador",
          "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
          "age": "2 months",
          "inoculations": ["none"],
          "diseases": ["none"],
          "parasites": ["none"]
        },
        {
          "name": "Woody",
          "img": "../../assets/images/pets-woody.png",
          "type": "Dog",
          "breed": "Golden Retriever",
          "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
          "age": "3 years 6 months",
          "inoculations": ["adenovirus", "distemper"],
          "diseases": ["right back leg mobility reduced"],
          "parasites": ["none"]
        },
        {
          "name": "Sophia",
          "img": "../../assets/images/sophia.png",
          "type": "Dog",
          "breed": "Shih tzu",
          "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
          "age": "1 month",
          "inoculations": ["parvovirus"],
          "diseases": ["none"],
          "parasites": ["none"]
        },
        {
          "name": "Timmy",
          "img": "../../assets/images/timmy.png",
          "type": "Cat",
          "breed": "British Shorthair",
          "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
          "age": "2 years 3 months",
          "inoculations": ["calicivirus", "viral rhinotracheitis"],
          "diseases": ["kidney stones"],
          "parasites": ["none"]
        },
        {
          "name": "Charly",
          "img": "../../assets/images/charly.png",
          "type": "Dog",
          "breed": "Jack Russell Terrier",
          "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
          "age": "8 years",
          "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
          "diseases": ["deafness", "blindness"],
          "parasites": ["lice", "fleas"]
        },
        {
          "name": "Scarlett",
          "img": "../../assets/images/scarlett.png",
          "type": "Dog",
          "breed": "Jack Russell Terrier",
          "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
          "age": "3 months",
          "inoculations": ["parainfluenza"],
          "diseases": ["none"],
          "parasites": ["none"]
        },
        {
          "name": "Freddie",
          "img": "../../assets/images/freddie.png",
          "type": "Cat",
          "breed": "British Shorthair",
          "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
          "age": "2 months",
          "inoculations": ["rabies"],
          "diseases": ["none"],
          "parasites": ["none"]
        }
      
    ] 


console.log(pets)

const btnFirst = document.querySelector(".btn-first_pag")
const btnPrev = document.querySelector(".btn-prev_pag")
const numberPag = document.querySelector(".number-pag")
const btnNext = document.querySelector(".btn-next_pag")
const btnLast = document.querySelector(".btn-last_pag")
const pagination = document.querySelector(".pagination")
const width = document.documentElement.clientWidth

btnNext.addEventListener("click", ()=>{
 let number = String(+numberPag.innerHTML + 1)
 console.log(number)
 numberPag.innerHTML = number
  btnFirst.disabled = false
  btnPrev.disabled = false
  
  if(width >=769 && number === '6'){
    btnNext.setAttribute('disabled','disabled')
    btnLast.setAttribute('disabled','disabled')
  } else if(width>= 321 && width <=768 && number === '8' ){
    btnNext.setAttribute('disabled','disabled')
    btnLast.setAttribute('disabled','disabled')
  }else if(width <=320 && number === '16' ){
    btnNext.setAttribute('disabled','disabled')
    btnLast.setAttribute('disabled','disabled')
  }
})
btnPrev.addEventListener("click", ()=>{
  let number = String(+numberPag.innerHTML - 1)
  console.log(number.innerHTML)
  numberPag.innerHTML = number
  btnNext.disabled = false
  btnLast.disabled = false
 if(number === '1'){
  btnFirst.disabled = true
  btnPrev.disabled = true
 }
 })
 btnFirst.addEventListener("click", ()=>{
 
  numberPag.innerHTML = 1
  
  btnNext.disabled = false
  btnLast.disabled = false

  btnFirst.disabled = true
  btnPrev.disabled = true
 
 })

 btnLast.addEventListener("click", ()=>{
  let number;
 
  numberPag.innerHTML = number
   btnFirst.disabled = false
   btnPrev.disabled = false
   btnNext.disabled = true
  btnLast.disabled = true
   if(width >=769 ){
    numberPag.innerHTML = 6
   } else if(width>= 321 && width <=768 ){
    numberPag.innerHTML = 8
   }else if(width <=320  ){
    numberPag.innerHTML = 16
   }
 })
 
 function createElement() {
    let randomNum = Math.floor(Math.random()*8)
    const card = document.createElement("div")
  card.id=randomNum
    card.classList.add("card-pets")
let img = document.createElement("img")
img.classList.add("images-pets")
img.src = pets[randomNum].img
card.appendChild(img)
let namePets = document.createElement("span")
namePets.classList.add("name-pets")
namePets.innerHTML = pets[randomNum].name
card.appendChild(namePets)
let btnPets = document.createElement("button")
btnPets.classList.add("btn-pets")
btnPets.innerHTML="Learn more";
card.appendChild(btnPets)
    return card
    
}

pagination.innerHTML = "";
    const card1 = createElement()
    const card2 = createElement()
    const card3 = createElement()
    const card4 = createElement()
    const card5 = createElement()
    const card6 = createElement()
    const card7 = createElement()
    const card8 = createElement()

    pagination.appendChild(card1)
    pagination.appendChild(card2)
    pagination.appendChild(card3)
    pagination.appendChild(card4)
    pagination.appendChild(card5)
    pagination.appendChild(card6)
    pagination.appendChild(card7)
    pagination.appendChild(card8)
btnLast.addEventListener("click", ()=>{
  pagination.classList.add("pagination-none")
  pagination.innerHTML = "";
    const card1 = createElement()
    const card2 = createElement()
    const card3 = createElement()
    const card4 = createElement()
    const card5 = createElement()
    const card6 = createElement()
    const card7 = createElement()
    const card8 = createElement()

    pagination.appendChild(card1)
    pagination.appendChild(card2)
    pagination.appendChild(card3)
    pagination.appendChild(card4)
    pagination.appendChild(card5)
    pagination.appendChild(card6)
    pagination.appendChild(card7)
    pagination.appendChild(card8)
   
})
btnNext.addEventListener("click", ()=>{
  pagination.classList.add("pagination-none")
  pagination.innerHTML = "";
    const card1 = createElement()
    const card2 = createElement()
    const card3 = createElement()
    const card4 = createElement()
    const card5 = createElement()
    const card6 = createElement()
    const card7 = createElement()
    const card8 = createElement()

    pagination.appendChild(card1)
    pagination.appendChild(card2)
    pagination.appendChild(card3)
    pagination.appendChild(card4)
    pagination.appendChild(card5)
    pagination.appendChild(card6)
    pagination.appendChild(card7)
    pagination.appendChild(card8)
})
btnFirst.addEventListener("click", ()=>{
  pagination.classList.add("pagination-none")
  pagination.innerHTML = "";
    const card1 = createElement()
    const card2 = createElement()
    const card3 = createElement()
    const card4 = createElement()
    const card5 = createElement()
    const card6 = createElement()
    const card7 = createElement()
    const card8 = createElement()

    pagination.appendChild(card1)
    pagination.appendChild(card2)
    pagination.appendChild(card3)
    pagination.appendChild(card4)
    pagination.appendChild(card5)
    pagination.appendChild(card6)
    pagination.appendChild(card7)
    pagination.appendChild(card8)
})
btnPrev.addEventListener("click", ()=>{
  pagination.classList.add("pagination-none")
  pagination.innerHTML = "";
    const card1 = createElement()
    const card2 = createElement()
    const card3 = createElement()
    const card4 = createElement()
    const card5 = createElement()
    const card6 = createElement()
    const card7 = createElement()
    const card8 = createElement()

    pagination.appendChild(card1)
    pagination.appendChild(card2)
    pagination.appendChild(card3)
    pagination.appendChild(card4)
    pagination.appendChild(card5)
    pagination.appendChild(card6)
    pagination.appendChild(card7)
    pagination.appendChild(card8)
})
pagination.addEventListener("animationend",()=>{
  pagination.classList.remove("pagination-none")





//попап

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
        console.log(target)
        popup.classList.add('popup_open')
        imagesPets.src = pets[target].img
        name.innerHTML = pets[target].name
        type.innerHTML = pets[target].type
        breed.innerHTML = pets[target].breed
        agePets.innerHTML = pets[target].age
        inoculationsPets.innerHTML = pets[target].inoculations
        diseasesPets.innerHTML = pets[target].diseases
        parasitesPets.innerHTML = pets[target].parasites
        description.innerHTML = pets[target].description
        
        
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
        console.log(target)
        popup.classList.add('popup_open')
        imagesPets.src = pets[target].img
        name.innerHTML = pets[target].name
        type.innerHTML = pets[target].type
        breed.innerHTML = pets[target].breed
        agePets.innerHTML = pets[target].age
        inoculationsPets.innerHTML = pets[target].inoculations
        diseasesPets.innerHTML = pets[target].diseases
        parasitesPets.innerHTML = pets[target].parasites
        description.innerHTML = pets[target].description
        
        
    })
    btnPopup.addEventListener("click",()=>{
        popup.classList.remove('popup_open')
        body.classList.remove("body-lock")
    })
    
  })









