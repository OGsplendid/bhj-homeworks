// повышенный уровень. Не удалось менять значение интервала
(() => {
    let rotators = Array.from(document.getElementsByClassName('rotator__case'));
    let index = 0;
    let speed = +rotators[index].dataset.speed;
    // если не выполнить строчку ниже, то цвет первого сообщения чёрный
    rotators[index].style.color = rotators[index].dataset.color;

    // здесь смотрел в консоли - значение скорости меняется
    // setInterval(() => console.log(speed), 1000);

    // так тоже пробовал:
    // function changeText() {
    //     rotators[index].classList.remove('rotator__case_active');
    //     index++;
    //     if (index === rotators.length) {
    //         index = 0;
    //     };
    //     rotators[index].classList.add('rotator__case_active');
    //     rotators[index].style.color = rotators[index].dataset.color;
    //     speed = +rotators[index].dataset.speed;
    // }
    // setInterval(changeText, speed);


    setInterval(() => {
        rotators[index].classList.remove('rotator__case_active');
        index++;
        if (index === rotators.length) {
            index = 0;
        };
        rotators[index].classList.add('rotator__case_active');
        rotators[index].style.color = rotators[index].dataset.color;
        speed = +rotators[index].dataset.speed;
    }, speed);
})();
