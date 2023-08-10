const fontBtn = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');
const currentFont = document.querySelector('.font-size_active');


fontBtn.forEach((element) => {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        currentFont.classList.remove('.font-size_active');
        element.classList.add('.font-size_active');
        
        let size = element.dataset.size;
        if (size) {
            book.classList.add(`book_fs- ${size}`);
        } else {
            element.classList.add('font-size_active');
        }

    })
})