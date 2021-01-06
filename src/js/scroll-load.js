module.exports.func = () => {
    window.addEventListener('scroll', function () {
        const triggerClass = document.querySelectorAll('.scroll-trigger');
        const animateClass = 'is-show';

        for (let i = 0; i < triggerClass.length; i++) {
            const scroll = window.pageYOffset || document.documentElement.scrollTop;
            const triggerTop = triggerClass[i].getBoundingClientRect().top;
            const offset = triggerTop + scroll;
            const windowHeight = window.innerHeight;
            if (scroll > offset - windowHeight + 150) {
                triggerClass[i].classList.add(animateClass);
            }
        }
    })
}