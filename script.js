// Script for navigation bar

let bar = document.getElementById('bar');
let nav = document.getElementById('navbar');
let close = document.getElementById('close');

if (bar){
    bar.addEventListener('click',() => {
        nav.classList.add("active");
    })
}
if (close){
    close.addEventListener('click',() => {
        nav.classList.remove("active");
    })
}


// scripting for singleproduct page

let MainImg = document.getElementById('MainImg');

let SMallImg = document.getElementsByClassName('small-img');

SMallImg[0].onclick = function (){
    MainImg.src = SMallImg[0].src;
}
SMallImg[1].onclick = function (){
    MainImg.src = SMallImg[1].src;
}
SMallImg[2].onclick = function (){
    MainImg.src = SMallImg[2].src;
}
SMallImg[3].onclick = function (){
    MainImg.src = SMallImg[3].src;
        }


// scripting for singleproduct page




