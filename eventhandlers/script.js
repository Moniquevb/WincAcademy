const alertbutton = document.querySelector('#mybutton');
alertbutton.addEventListener('click', function() {
alert("hello");
})

const bgbutton = document.querySelector('#bgbutton');
const bgclass = document.querySelector('.blue-background')
// bgbutton.addEventListener('click', function() {
//     bgclass.className = "red-background";
// })


bgbutton.addEventListener('click', function() {
    bgclass.classList.toggle("red-background")})
