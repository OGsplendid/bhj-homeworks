let form = document.getElementById('signin__form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let success;

    let loginForm = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(loginForm);

    xhr.onreadystatechange = () => {
        let response = JSON.parse(xhr.response);
        success = response.success;
        console.log(response)
    }
    if (!response.success) {
        alert('Login or password value error');
    }
})
