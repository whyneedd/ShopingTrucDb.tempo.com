


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



var loadAff;

function showpage() {
    loadAff = setTimeout(showpage2, 12000);

}

function showpage2() {
    document.querySelector(".loader").style.display = "none"
    document.querySelector(".pages").style.display = "block"
}



const slide = document.getElementsByClassName("img1");

let img = 0;

let nbrimg = slide.length;

function enleverActiveImg() {
    for(let i = 0 ; i < nbrimg ; i++) {
    slide[i].classList.remove("active");
    }
}

const suivant = document.querySelector(".suivant");
const precedent = document.querySelector(".precedent");

suivant.addEventListener("click", function() {
    img++;
    if(img >= nbrimg) {
        img = 0
    }
    enleverActiveImg();
    slide[img].classList.add("active")
})
precedent.addEventListener("click", function() {
    img--;
    if(img < 0) {
        img = nbrimg - 1;
    }
    enleverActiveImg();
    slide[img].classList.add("active")
})


setInterval(function() {
    img++;
    if(img >= nbrimg) {
        img = 0
    }
    enleverActiveImg();
    slide[img].classList.add("active");
}, 18000)