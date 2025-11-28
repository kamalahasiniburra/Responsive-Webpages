// --- Task 1: Change Text ---
const para = document.querySelector('#message'); 
const textButton = document.getElementById('textButton'); 

textButton.addEventListener('click', () => { 
 // Fix: Used 'textContent' instead of 'contentText'
 para.textContent = 'New Message'; 
});

// --- Task 2: Change Background ---
const box = document.getElementById('box');
const colorButton = document.getElementById('colorButton');

colorButton.addEventListener('click', () => {
 // Fix: Used 'style' instead of 'styl'
 box.style.backgroundColor = 'blue'; 
});