const form = document.getElementById('signin__form');
let idArray = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let loginForm = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(loginForm);

    xhr.onload = () => {
        let response = JSON.parse(xhr.response);
        let welcome = document.getElementById('welcome');
        welcome.classList.add('welcome_active');
        console.log(response);

        if (!response.success) {
            welcome.textContent = 'Неверный логин/пароль';
            return;
        }

        let userId = document.getElementById('user_id');
        userId.textContent = response.user_id;

        if (idArray.find(el => el === response.user_id)) {
            userId.textContent = idArray.find(el => el === response.user_id);
        } else {
            idArray.push(response.user_id);
            localStorage.setItem('id', JSON.stringify(idArray));
        }

        form.reset();
    }
})

window.onload = () => {
    if (localStorage.getItem('id')) {
        idArray = JSON.parse(localStorage.getItem('id'));
    }
}
