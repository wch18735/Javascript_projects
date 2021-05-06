const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", ()=>{
    // get random number [0, 3] 
    const randomNumber = getRaandomNumber();
    
    console.log(getRandomRGB());

    // document.body.style.backgroundColor = colors[randomNumber];
    // color.textContent = colors[randomNumber];
    const rgbColor = getRandomRGB();
    document.body.style.backgroundColor = rgbColor;
    color.textContent = rgbColor;
});

function getRaandomNumber(){
    // return [0, 1)
    return Math.floor(Math.random() * colors.length);
}

function getRandomRGB(){
    const R = Math.floor(Math.random() * 255);
    const G = Math.floor(Math.random() * 255);
    const B = Math.floor(Math.random() * 255);
    return `rgba(${R}, ${G}, ${B})`
}