let date = document.querySelector(".date");

let close = document.querySelector(".close");

let open = document.querySelector(".hamburger");

let menu = document.querySelector(".nav-header .me");

let year = new Date().getFullYear();

date.innerHTML = year;

open.addEventListener('click', function (){
    menu.classList.add('show-nav')
});

close.addEventListener('click', function () {
    menu.classList.remove('show-nav');
});