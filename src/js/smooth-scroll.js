module.exports.func = () => {
    const a = document.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        a[i].addEventListener('click', e => {
            let href = a[i].getAttribute('href');
            let pagename = window.location.href;
            pagename = pagename.replace(/#.*/, '');
            href = href.replace(pagename, '');
            if (href.search(/^#/) >= 0){
                e.preventDefault();
                const target = e.target;
                const targetId = target.hash
                document.querySelector(targetId).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
                return false;
            }
        })
    }
}
/*module.exports.func = () => {
    const a = document.querySelectorAll('a[href^="#"]');
    for (let i = 0; i < a.length; i++) {
        a[i].addEventListener('click', e => {
            e.preventDefault();
            const target = e.target;
            const targetId = target.hash
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
        return false;
    }
}*/