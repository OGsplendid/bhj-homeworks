let arrows = document.getElementsByClassName('slider__arrow');
let arrOfArrows = Array.from(arrows);
let previous = arrOfArrows[0];
let next = arrOfArrows[1];

let sliders = document.getElementsByClassName('slider__item');
let arrOfSliders = Array.from(sliders);

let dots = document.getElementsByClassName('slider__dot');
let arrOfDots = Array.from(dots);

let number = 0;
let oldNumber;

function activateSlide(number) {
    arrOfSliders[oldNumber].className = 'slider__item';
    arrOfSliders[number].className = 'slider__item slider__item_active';
}

previous.onclick = function() {
    oldNumber = number;
    number--;
    if (number === -1) {
        number = arrOfSliders.length - 1;
    }
    activateSlide(number);
}

next.onclick = function() {
    oldNumber = number;
    number++;
    if (number > arrOfSliders.length - 1) {
        number = 0;
    }
    activateSlide(number);
}

for (let i = 0; i < arrOfDots.length; i++) {
    arrOfDots[i].onclick = function() {
        arrOfSliders.map(el => el.className = 'slider__item');
        activateSlide(i);
    }
}
