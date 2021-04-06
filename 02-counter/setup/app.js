let count = 0;
let result = document.getElementById("value");

let decrease_btn = document.querySelector(".decrease");
let reset_btn = document.querySelector(".reset");
let increase_btn = document.querySelector(".increase");

decrease_btn.addEventListener("click", ()=>{
    count -= 1;
    result.textContent = count;
});

increase_btn.addEventListener("click", ()=>{
    count += 1;
    result.textContent = count;
});

reset_btn.addEventListener("click", ()=>{
    count = 0;
    result.textContent = count;
});

