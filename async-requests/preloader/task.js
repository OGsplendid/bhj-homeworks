let items = document.getElementById('items');
let loader = document.getElementById('loader');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === xhr.DONE) {
        console.log(xhr.responseText);
    }
}
