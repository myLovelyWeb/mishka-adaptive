"use strict";

let orderBtn = document.querySelector('.production__btn');
let approving = document.querySelector('.approving');
let approvingCloseBtn = approving.querySelector('.approving__form-btn');

orderBtn.addEventListener('click', function() {
  approving.classList.remove('visually-hidden');
});

approvingCloseBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  approving.classList.add('visually-hidden');
});