const fontBtn = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');


fontBtn.forEach((element) => {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        const currentFont = document.querySelector('.font-size_active');
        currentFont.classList.remove('font-size_active');
        event.target.classList.add('font-size_active');
        
        let size = event.target.dataset.size;
        if (size) {
            book.className = `book__content book_fs-${size}`;
        } else {
            book.className = 'book__content';
        }

    })
})