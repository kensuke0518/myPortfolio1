'use strict';

export const darkFunc = () => {
    const darkCheck = document.querySelector('[data-dark="dark"]');
    const localTheme = localStorage.getItem('colormode');
    const darkOn = () => {
        document.documentElement.setAttribute('data-colormode', 'dark');
        localStorage.setItem('colormode', 'dark');
        darkCheck.checked = true;
    };
    const darkOff = () => {
        document.documentElement.removeAttribute('data-colormode', 'dark');
        localStorage.setItem('colormode', 'light');
        darkCheck.checked = false;
    };

    //ダークモード自動切り替え
    switch (localTheme) {
        case 'dark':
            darkOn();
            break;
        case 'light':
            darkOff();
            break;
        default:
            const darkMode = matchMedia('(prefers-color-scheme:dark)').matches;
            darkMode ? darkOn() : darkOff();
            break;
    }

    //ダークモード手動切り替え
    darkCheck.addEventListener('change', () => darkCheck.checked ? darkOn() : darkOff());
}