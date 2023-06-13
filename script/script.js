// Using javascript file as strict file for exposing all the loss errors or eliminating the silent errors into throwable errors
'use strict';

//inputs
const btnOne = document.getElementById('btn-one');
const btnTwo = document.getElementById('btn-two');
const btnThree = document.getElementById('btn-three');
const btnClose = document.getElementById('btn-close');

const btns = document.querySelectorAll('.btn')
//outputs
const modelContainer = document.getElementById('model-container');
const overlay = document.getElementById('overlay')
//functions
const init = function () {
    modelContainer.classList.add('close')
}

const open = function () {
    modelContainer.classList.remove('close')
    modelContainer.classList.add('open')
    overlay.classList.add('overlay')
}

const close = function () {
    modelContainer.classList.remove('open')
    modelContainer.classList.add('close')
    overlay.classList.remove('overlay')
}

//events
// btnOne.addEventListener('click', open);
// btnTwo.addEventListener('click', open);
// btnThree.addEventListener('click', open);

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', open)
}

btnClose.addEventListener('click', close)

document.addEventListener('keydown', function (event) {
    // console.log(event.key)
    if (event.key === 'Escape') {
        close()
    }
})

overlay.addEventListener('click', function (event) {
    console.log(event.target.classList.contains('overlay'))
    if (event.target.classList.contains('overlay') === true) {
        close()
    }else {
        // do nothing
    }
})

//initial settings
init();
