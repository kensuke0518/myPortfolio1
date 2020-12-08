module.exports.func = () => {
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
}