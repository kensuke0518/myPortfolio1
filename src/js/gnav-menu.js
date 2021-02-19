'use strict';

export const gnavMenuFunc = () => {
    const menuButton = document.getElementById('gnav__menu-button__icon');
    const gnav = document.getElementById('gnav');
    const gnavItem = document.getElementsByClassName('gnav__item');

    //メニューの開閉
    menuButton.addEventListener('click', () => {
        gnav.classList.add('gnav__open');
    });
    for (let i = 0; i < gnavItem.length; i++){
        gnavItem[i].addEventListener('click', () => {
            gnav.classList.remove('gnav__open');
        });
    }
}