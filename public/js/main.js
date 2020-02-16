let btnWhite =  document.getElementsByClassName("btnWhite")[0]
let btnBlack = document.getElementsByClassName("btnBlack")[0]
let body =  document.querySelector("body")
let titleEmporium = document.getElementsByClassName("title")[0] 
let nav = document.getElementsByClassName("laNav")[0]

btnWhite.addEventListener("click", () => {
    body.style.backgroundColor = "black"
    titleEmporium.setAttribute("class", "text-white")
    
    
    
    
})

btnBlack.addEventListener("click", () => {
    body.style.backgroundColor = "white"
    titleEmporium.setAttribute("class", "text-dark")
    h1.style.color = "white"
    nav.setAttribute("class", "navbar-dark bg-secondary")
    
    
    
})

