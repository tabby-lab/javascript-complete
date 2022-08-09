'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(btnOpenModal);


for(let i = 0; i < btnOpenModal.length; i++)
(btnOpenModal[i].addEventListener('click', function(){
console.log('btn clicked')
modal.classList.remove('hidden');
overlay.classList.remove('hidden');
})); 

const closedModal = function(){
modal.classList.add('hidden');
overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closedModal);
overlay.addEventListener('click', closedModal);

// btnCloseModal.addEventListener('click', function(){
//     console.log('btn closed')
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function(){

// })