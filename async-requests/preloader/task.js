let items = document.getElementById('items');
let loader = document.getElementById('loader');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

function setValute(code, value) {
    let div = `<div class="item"><div class="item__code">${code}</div><div class="item__value">${value}</div><div class="item__currency">руб.</div></div>`;
    items.insertAdjacentHTML('beforeend', div);
}

xhr.onreadystatechange = () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
        let response = JSON.parse(xhr.response);
        let valutes = response.response.Valute;
        for (let valute in valutes) {
            setValute(valutes[valute].CharCode, valutes[valute].Value);
        }
    }
}
