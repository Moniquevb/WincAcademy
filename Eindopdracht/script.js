const menuIcon = document.querySelector("#menu-link");
const menu = document.querySelector(".menu");
const bgColorYellow = document.querySelector(".bg-color-yellow");
const bgColorRed = document.querySelector(".bg-color-red");
const bgColorGreen = document.querySelector(".bg-color-green");
const bgColorBlue = document.querySelector(".bg-color-blue");
const bgColorPurple = document.querySelector(".bg-color-purple");
const changeBgColor = document.querySelector("#change-bg-color");
const bgColorClass = document.querySelector(".bg-color-white");

bgColorYellow.addEventListener('click', function () {
    bgColorClass.className = "bg-color-yellow";
    menu.classList.toggle("menu2");
})

bgColorGreen.addEventListener('click', function () {
    bgColorClass.className = "bg-color-green";
    menu.classList.toggle("menu2");
})

bgColorRed.addEventListener('click', function () {
    bgColorClass.className = "bg-color-red";
    menu.classList.toggle("menu2");
})

bgColorBlue.addEventListener('click', function () {
    bgColorClass.className = "bg-color-blue";
    menu.classList.toggle("menu2")
})

bgColorPurple.addEventListener('click', function () {
    bgColorClass.className = "bg-color-purple";
    menu.classList.toggle("menu2")
})

menuIcon.addEventListener('click', function () {
    menu.classList.toggle("menu2")
})


