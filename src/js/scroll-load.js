module.exports.func = () => {
    window.addEventListener('scroll', function () {
        let triggerClass = document.querySelectorAll('.scroll-trigger');
        let animateClass = 'is-show';

        for (let i = 0; i < triggerClass.length; i++) {
            let scroll = window.pageYOffset;
            let triggerTop = triggerClass[i].getBoundingClientRect().top;
            let windowHeight = window.outerHeight;
            if (scroll > triggerTop - windowHeight / 2) {
                triggerClass[i].classList.add(animateClass);
            }
        }
    })
}