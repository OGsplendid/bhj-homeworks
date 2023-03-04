let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');
let voteId;
let answersArr;

// создаю запрос на получение экземпляра голосования
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

// вспомогательная функция для отрисовки вариантов ответа опроса
function setPoll(title, option) {
    pollTitle.textContent = title;
    let div = `<button class="poll__answer">${option}</button>`;
    pollAnswers.insertAdjacentHTML('afterbegin', div);
}

// получаем информацию от сервера и отрисовываем
xhr.onreadystatechange = () => {
    if (xhr.readyState === xhr.DONE) {
        let response = JSON.parse(xhr.response);
        let title = response.data.title;
        voteId = response.id;
        answersArr = response.data.answers;
        for (let option of answersArr) {
            setPoll(title, option);
        }
    }
}

// отрисовка результатов опроса
function getStats(request) {
    request.onreadystatechange = () => {

        if (request.readyState === request.DONE) {

            let response = JSON.parse(request.response);
            for (let item of response.stat) {

                let div = `<div>${item.answer}</div><div>${item.votes}</div>`;
                pollTitle.insertAdjacentHTML('afterend', div);
            }
        }
    }
} 

pollAnswers.onclick = (e) => {

    if (e.target.classList.contains('poll__answer')) {

        alert('Спасибо, ваш голос засчитан!');
        pollAnswers.classList.add('poll__hidden');

        let xhr2 = new XMLHttpRequest();
        xhr2.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
        xhr2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr2.send(`vote=${voteId}&answer=${answersArr.indexOf(e.target.textContent)}`);

        getStats(xhr2);
    }
}
