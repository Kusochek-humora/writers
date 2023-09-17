'use strict';
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.read__list-btn'),
        tabsWrapper = document.querySelector('.read__authors'),
        contents = document.querySelectorAll('.read__content-tab'),
        tabAuthor = document.querySelector('.read__content-author');
    tabsWrapper.addEventListener('click', function (e) {

        tabs.forEach((item, index) => {
            tabs[index].classList.remove('active');
            contents[index].classList.remove('active');
            if (e.target === item) {
                item.classList.add('active');
                contents[index].classList.add('active');
                tabAuthor.textContent = item.textContent;
                tabAuthor.dataset.firstSpell = `${item.getAttribute('data-first-spell')}`;
                // console.dir(tabAuthor)
            }
        })
    })

})