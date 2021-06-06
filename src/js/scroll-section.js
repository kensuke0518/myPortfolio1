'use strict';

export const scrollSectionFunc = () => {
    const secHeight = () => {
        const sec = document.querySelectorAll('[data-scrlsec]');
        sec.forEach(data => {
            data.style.minHeight = window.innerHeight + 'px';
        });
    }
    /*const options = {
        root: null,
        rootMargin: '0% 0px',
        threshold: 0.05
    }
    const intersect = (entries,observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                window.scroll({ top: entry.target.offsetTop, behavior: 'smooth' });
            }
        })
    }

    const observer = new IntersectionObserver(intersect, options);
    const boxes = document.querySelectorAll('[data-scrlsec]');
    const observeStart = () => {
        boxes.forEach(box => {
            observer.observe(box); //引数boxと関数intersectのコールバック引数elmsは同じもの
        })
    }
    observeStart();

    const pageLinks = document.querySelectorAll('a[href^="#"');
    const pageLinksOut = () => {
        pageLinks.forEach(pageLink => {
            pageLink.addEventListener('click', e => {
                observer.disconnect();
                setTimeout(observeStart, 2000); //改善したい
            })
        })
    }
    pageLinksOut();*/

    window.addEventListener('load', secHeight);
    window.addEventListener('resize', secHeight);
}