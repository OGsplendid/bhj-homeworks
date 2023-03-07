const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const logoutBtn = document.getElementById('logout__btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let loginForm = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(loginForm);

    xhr.onload = () => {
        let response = JSON.parse(xhr.response);
        console.log(response);

        if (!response.success) {
            alert('Неверный логин/пароль');
            return;
        }

        loggedIn(response.user_id);

        form.reset();
    }
})

function loggedIn(id) {
    welcome.classList.add('welcome_active');
    signin.classList.remove('signin_active');
    logoutBtn.classList.remove('logout__hidden');

    let userId = document.getElementById('user_id');
    userId.textContent = id;

    localStorage.setItem('storedUserId', id);
}

function loggedOut() {
    welcome.classList.remove('welcome_active');
    signin.classList.add('signin_active');
    logoutBtn.classList.add('logout__hidden');

    localStorage.removeItem('storedUserId');
}

logoutBtn.addEventListener('click', loggedOut);

window.onload = () => {
    if (localStorage.getItem('storedUserId')) {
        loggedIn(localStorage.getItem('storedUserId'));
    }
}
