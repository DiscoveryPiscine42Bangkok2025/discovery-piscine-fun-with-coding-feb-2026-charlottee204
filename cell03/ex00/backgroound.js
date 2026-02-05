
const button = document.getElementById("button");

button.addEventListener("click" ,()=>{
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    document.body.style.background = `rgb(${red},${green},${blue})`;
})