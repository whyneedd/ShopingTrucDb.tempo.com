// Button Du Menu De Recherche 

document.querySelector(".fa-magnifying-glass").onclick = function (){ 
    document.querySelector(".searchShow").classList.toggle("active");
}
// Fin Du Button Du Menu De Recherche 


// Button Menu De Nagivation Mobile

document.querySelector(".humbger").onclick = function (){ 
    document.querySelector(".humbger").classList.toggle("active");
    document.querySelector(".humbgerMenu").classList.toggle("active");
}

document.querySelector(".humbgerMenu").onclick = function(){
    document.querySelector(".humbger").classList.remove("active");
    document.querySelector(".humbgerMenu").classList.remove("active");
}
// Fin Du Button Menu De Nagivation Mobile
