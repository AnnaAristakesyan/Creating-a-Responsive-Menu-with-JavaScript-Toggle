let hamburger = document.querySelector(".hamburger");
let navBar = document.querySelector(".navig-bar");
let links 

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
});

document.querySelectorAll(".navig-bar").forEach((elem) =>{
elem.addEventListener('click', () =>{
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
})
})