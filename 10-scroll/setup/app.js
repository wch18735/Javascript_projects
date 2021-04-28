// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear()

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function(){ // Dynamic links
    // linksContainer.classList.toggle('show-links'); when simply use static data
    // Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    
    if(containerHeight == 0){
        linksContainer.style.height = `${linksHeight}px`
    } else{
        linksContainer.style.height = 0;
    }
})
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

// ********** fixed navbar ************
window.addEventListener('scroll', function(){
    // pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
    
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    }
    else{
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500){
        topLink.classList.add('show-link');
    } else{
        topLink.classList.remove('show-link');
    }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener("click", function(e){
        // prevent default action
        e.preventDefault();

        // navigate to specific spot
        // slice extracts a section of a string without modifying original string
        const id = e.currentTarget.getAttribute('href').slice(1); // #href -> href
        const element = document.getElementById(id);
        
        //offsetTop - A Number, representing the top position of the element, in pixels
        // calculate height
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav'); // True or False
        
        let position = element.offsetTop - navHeight;

        window.scrollTo({
            left:0, 
            top:position
        });
        linksContainer.style.height = 0;
        
        // fixedNav dosen't exist
        if(!fixedNav){
            position = position - navHeight;
        }
        
        if (navHeight > 82) {
            position = position + containerHeight;
        }
    });
})
