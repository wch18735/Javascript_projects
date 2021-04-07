// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class -> same operation

const navToggle = document.querySelector(".nav-toggle");
const Links = document.querySelector(".links");

navToggle.addEventListener('click', function(){
    // if(!Links.classList.contains('show-links'))
    // {
    //     Links.classList.add('show-links');
    // } else{
    //     Links.classList.remove('show-links');
    // }

    Links.classList.toggle("show-links");
});