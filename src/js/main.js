'use strict';
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('#menu'),
        openMenuBtn = document.querySelector('#open-menu'),
        closeMenuBtn = document.querySelector('#close-menu'),
        overylay = document.querySelector('.overlay'),
        accordeonBtn = document.querySelector('#accordeon-btn'),
        accordeonDropdown = document.querySelector('#accordeon-dropdown');

    accordeonBtn.addEventListener('click', function (e) {
        console.log(accordeonDropdown.hasAttribute('style'))
        if (accordeonDropdown.hasAttribute('style')) {
            accordeonDropdown.removeAttribute('style');
            e.target.classList.remove('active');
        } else {
            accordeonDropdown.style.maxHeight = accordeonDropdown.scrollHeight + 40 + "px";
            accordeonDropdown.style.paddingTop = 30 + "px";
            e.target.classList.add('active');
        }

    })
    accordeonDropdown.addEventListener('click', linksHandler);

    function linksHandler(e) {
        console.log(e.target, document.querySelectorAll('.menu__list-link'))
        document.querySelectorAll('.menu__dropdown-link').forEach(element => {
            if (e.target === element) {
                closeMenu();
                accordeonDropdown.removeAttribute('style');
                accordeonBtn.classList.remove('active');
            }
        });

    }

    function openMenu(e) {
        overylay.classList.add('active');
        menu.classList.add('active');
        document.body.style.overflow = "hidden";
    };

    function closeMenu(e) {
        overylay.classList.remove('active');
        menu.classList.remove('active');
        document.body.style.overflow = "auto";
    };

    openMenuBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
    overylay.addEventListener('click', closeMenu);
})