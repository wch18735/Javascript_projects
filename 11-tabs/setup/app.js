const btns = document.querySelectorAll('.tab-btn');
const about= document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener("click", function(e){
    // data-id -> access by e.target.dataset.id
    id = e.target.dataset.id;

    if(id){ // if 'id' exists
        // remove active from all buttons
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        });

        // hide all articles and get and clicked article with id from dataset.id
        articles.forEach(function(article){
            article.classList.remove('active');
            const element = document.getElementById(id);
            element.classList.add('active');
        });
    }
});

/* What I learned:
1. addEventListener("click", function(e){}) and e means event
this event has a target and if we ever once marked a data-id, it is able to be accessed by e.target.dataset.id
2. document.getElementById()
*/