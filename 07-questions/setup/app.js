//using selectors inside the element
const questions = document.querySelectorAll(".question");
questions.forEach(function(question){
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function(){
        // check to duplicate
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove('show-text');
            }
        });

        // toggle
        question.classList.toggle('show-text');
    });
});


// traversing the dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e)
//     {
//         const parentQeustion = e.currentTarget.parentElement.parentElement;
//         parentQeustion.classList.toggle("show-text");
//     });
// });