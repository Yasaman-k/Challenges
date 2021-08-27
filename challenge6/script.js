// document.querySelectorAll('.accordion__btn').forEach(button => {
//     button.addEventListener('click', () => {
//         const accordionContent = document.querySelector('.accordion__content')
//         button.classList.toString('.accordion__btn--active');

//         if (button.classList.contains('.accordion__button--active')){
//             accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
//         }
//         else {
//             accordionContent.style.maxHeight = 0;
//         }
//     })
// })


// const btn = document.querySelector('.accordion__btn');

// const after = document.querySelector('.after');
// btn.addEventListener('click', () => {
//     const accordionContent = document.querySelector('.accordion__content');
//     after.classList.toggle('accordion__btn--active');
//     accordionContent.classList.toggle('maxH')
// })


//  after.classList.toggle('accordion__btn--active');



var acc = document.getElementsByClassName("accordion__btn");
var i;

const after = document.querySelector('.after');
const accordionContent = document.querySelector('.accordion__content');
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {


    
    var activebtn=this.querySelector('span')
    var panel = this.nextElementSibling;
    panel.classList.toggle('maxH')
    activebtn.classList.toggle('accordion__btn--active')
    
    this.classList.toggle('fontWeight')



  });
}