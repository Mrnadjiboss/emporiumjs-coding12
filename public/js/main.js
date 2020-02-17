let btnWhite =  document.getElementsByClassName("btnWhite")[0]
let btnBlack = document.getElementsByClassName("btnBlack")[0]
let body =  document.querySelector("body")
let titleEmporium = document.getElementsByClassName("title")[0] 
let nav = document.getElementsByClassName("laNav")[0]
let image1Section3 = document.getElementsByClassName("img1")[0]
let image2Section3 = document.getElementsByClassName("img2")[0]
let image3Section3 = document.getElementsByClassName("img3")[0]

btnWhite.addEventListener("click", () => {
    body.style.backgroundColor = "black"
    nav.setAttribute("class", " navbar navbar-expand-lg navbar-dark bg-dark")
    body.style.color = "white"
    
    titleEmporium.setAttribute("class", "text-white")
    image1Section3.style.border = "black solid 10px"
    image2Section3.style.border = "black solid 10px"
    image3Section3.style.border = "black solid 10px"
    
    
    
    
})

btnBlack.addEventListener("click", () => {
    body.style.backgroundColor = "white"
    titleEmporium.setAttribute("class", "text-dark")
    nav.removeAttribute("class", "navbar-light bg-white")
    body.style.color = "black"
   
    nav.setAttribute("class", " navbar navbar-expand-lg navbar-light bg-light")
    image1Section3.style.border = "white solid 10px"
    image2Section3.style.border = "white solid 10px"
    image3Section3.style.border = "white solid 10px"
    
})

