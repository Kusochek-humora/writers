'use strict';
// const block = document.querySelector('.swiper').swiper;
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 3,
    Infinity: false,

    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
});