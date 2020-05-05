"use strict";

let approvingOpenBtn = document.querySelector('.approving-js');
let approving = document.querySelector('.approving');
let approvingCloseBtn = approving.querySelector('.approving__form-btn');

approvingOpenBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  approving.classList.remove('visually-hidden');
});

approvingCloseBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  approving.classList.add('visually-hidden');
});