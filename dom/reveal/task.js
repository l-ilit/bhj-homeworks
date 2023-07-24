const reveal = document.querySelectorAll('.reveal');
document.addEventListener('scroll', () => {
    reveal.forEach(element => {
        const {top, bottom} = element.getBoundingClientRect();
        if (bottom < 0 || top > window.innerHeight) {
            return false;
        } 
        element.classList.add('reveal_active');
    })
})