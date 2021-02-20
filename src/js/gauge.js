'use strict';

export const gaugeFunc = () => {
    const datas = document.querySelectorAll('.c-gauge');
    for (const data of datas) {
        //valueの表示
        const val = data.querySelector('[data-gauge-val]');
        const valNum = Number(val.getAttribute('data-gauge-val'));
        if (valNum) {
            let i = 0;
            const aaa = setInterval(() => {
                val.innerHTML = `${i}%`;
                i < valNum ? i++ : clearInterval(aaa);
            }, 20);
        }

        //gaugeの表示
        const bar = data.querySelector('[data-gauge-inc]');
        const barNum = Number(bar.getAttribute('data-gauge-inc'));
        if (barNum) {
            const sheets = document.styleSheets,
                sheet = sheets[sheets.length - 1];
            let i = 0;
            const aaa = setInterval(() => {
                bar.style.width = `${i}%`;
                i < barNum ? i++ : clearInterval(aaa);
            }, 20);
        }
    }
}

export const delayGaugeFunc = () => {
    const options = {
        root: null,
        rootMargin: '0% 0px',
        threshold: 1
    }
    const intersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gaugeFunc();
                observer.disconnect();
            }
        })
    }

    const observer = new IntersectionObserver(intersect, options);
    const boxes = document.querySelectorAll('.c-gauge');
    const observeStart = () => {
        boxes.forEach(box => {
            observer.observe(box); //引数boxと関数intersectのコールバック引数elmsは同じもの
        })
    }
    observeStart();
}