const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", ()=>{
    // get random number [0, 3] 
    const randomNumber = getRaandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRaandomNumber(){
    // return [0, 1)
    return Math.floor(Math.random() * colors.length);
}