const loader = document.getElementById('loader');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
        const jsonObj = JSON.parse(xhr.responseText);
        for (let item in jsonObj.response.Valute) {
            items.insertAdjacentHTML('afterBegin', '<div class="item__code">USD</div><div class="item__value">32</div><div class="item__currency">руб.</div>');
            const itemCode = document.querySelector('item__code');
            const itemValue = document.querySelector('item__value');
            itemCode.textContent = jsonObj.response.Valute[item].CharCode;
            itemValue.textContent = jsonObj.response.Valute[item].Value;
        } 
        }
    })
