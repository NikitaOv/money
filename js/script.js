"use strict";

const gamburger = document.querySelector('.gamburger'),
      gamburgerSticks = document.querySelectorAll('.gamburger__stick'),
      header = document.querySelector('.header__links');

gamburger.addEventListener('click', (e) => {
    header.classList.toggle('header__links_active');
    
    gamburgerSticks.forEach((elem) => {
        elem.classList.toggle('gamburger__stick_close');
    });
})