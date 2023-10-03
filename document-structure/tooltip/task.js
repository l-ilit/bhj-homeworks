const links = Array.from(document.querySelectorAll('.has-tooltip'));

links.forEach((link,index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        links[index].insertAdjacentHTML('beforeEnd', '<div class=tooltip> Текст подсказки </div>');
        const tooltip = document.querySelector('.tooltip');
        tooltip.textContent = link.title;
        tooltip.classList.toggle('tooltip_active');
        tooltip.style.top = links[index].getBoundingClientRect().bottom + 'px';
        tooltip.style.left = links[index].getBoundingClientRect().left + 'px';
    })
})