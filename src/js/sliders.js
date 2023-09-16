'use strict';
// const block = document.querySelector('.swiper').swiper;
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 1.5,

    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
});