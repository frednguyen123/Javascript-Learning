'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// Can use QuerySelectorAll to create node list (similar to array) and affect all classes
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const closeModal = function () {
    // .add the classList so that pop up window is closed/hidden
   modal.classList.add('hidden');
   overlay.classList.add('hidden');
}

const openModal = function () {
    // not .hidden, only for selector, this is just the name of the html class
    // .remove the classList so that pop up window is no longer hidden
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Key-down (when pressed), 
// keypress (countinuously fired as we keep on key), 
// keyup (lift Up only)
document.addEventListener('keydown', function(event) {
    // console.log(event.key);
    if (event.key === 'Escape' && !modal.classList.contains('hidden')){
            closeModal();
    }
})

