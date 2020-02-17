
// body 

var body =  document.querySelector("body")

// titre
var titleEmporium = document.getElementsByClassName("title")[0] 
var nav = document.getElementsByClassName("laNav")[0]

// image section 
var image1Section3 = document.getElementsByClassName("img1")[0]
var image2Section3 = document.getElementsByClassName("img2")[0]
var image3Section3 = document.getElementsByClassName("img3")[0]

var modale = document.getElementsByClassName("modale")[0]
modale.style.display = "none"
var modale2 = document.getElementsByClassName("modale2")[0]
modale2.style.display = "none"



var btnConnexion =  document.getElementsByClassName("btnConnexion")[0]
var btnQuit = document.getElementsByClassName("quit")[0]
var btnEnter = document.getElementsByClassName("btnEnter")[0]

var btnInscription = document.getElementsByClassName("btnInscription")[0]

document.getElementsByClassName("btnWhite")[0].addEventListener("click", () => {
    body.style.backgroundColor = "black"
    nav.setAttribute("class", " navbar navbar-expand-lg navbar-dark bg-dark")
    body.style.color = "white"
    
    titleEmporium.setAttribute("class", "text-white")
    image1Section3.style.border = "black solid 10px"
    image2Section3.style.border = "black solid 10px"
    image3Section3.style.border = "black solid 10px"
    
    
    
    
})

document.getElementsByClassName("btnBlack")[0].addEventListener("click", () => {
    body.style.backgroundColor = "white"
    titleEmporium.setAttribute("class", "text-dark")
    nav.removeAttribute("class", "navbar-light bg-white")
    body.style.color = "black"
   
    nav.setAttribute("class", " navbar navbar-expand-lg navbar-light bg-light")
    image1Section3.style.border = "white solid 10px"
    image2Section3.style.border = "white solid 10px"
    image3Section3.style.border = "white solid 10px"
    
})

btnConnexion.addEventListener("click", () => {
    modale.style.display = "block"


})

btnQuit.addEventListener("click", () => {
    modale.style.display = "none"


})

btnInscription.addEventListener("click", () => {
    modale2.style.display = "block"
    modale.style.display = "none"


})

btnEnter.addEventListener("click", () => {
    modale2.style.display = "none"
    modale.style.display = "block"


})

window.addEventListener("scroll", () => {
    if (window.scrollY >= 70) {
        nav.classList.add("fixed-top")
        
    }else if (window.scrollY < 70) {
        nav.classList.remove("fixed-top")
        
    }
})



