"use strict";

const gamburger = document.querySelector('.gamburger'),
      header = document.querySelector('.header__links');

gamburger.addEventListener('click', (e) => {
    console.log('hello')
    header.classList.toggle('header__links_active');

    header.addEventListener('click', (e) => {
        console.log(1)
        if (e.target != header) {
            console.log(2)
            header.classList.toggle('header__links_active');
        }
    })
})