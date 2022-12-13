let arrows = document.getElementsByClassName('slider__arrow');
let arrOfArrows = Array.from('arrows');
let previous = arrOfArrows[0];
let next = arrOfArrows[1];

let sliders = document.getElementsByClassName('slider__item');
let arrOfSliders = Array.from('sliders');
let number = 0;

previous.onclick = function() {
    arrOfSliders[number].className = 'slider__item';
    number--;
    arrOfSliders[number].className = 'slider__item slider__item_active';
    if (number < 0) {
        arrOfSliders[0].className = 'slider__item';
        number = arrOfSliders.length;
        arrOfSliders[number].className = 'slider__item slider__item_active';
    }
}

next.onclick = function() {
    arrOfSliders[number].className = 'slider__item';
    number++;
    arrOfSliders[number].className = 'slider__item slider__item_active';
    if (number > arrOfSliders.length) {
        arrOfSliders[arrOfSliders.length].className = 'slider__item';
        number = 0;
        arrOfSliders[number].className = 'slider__item slider__item_active';
    }
}


let dots = document.getElementsByClassName('slider__dot');
let arrOfDots = Array.from('dots');

for (let i = 0; i < arrOfDots.length; i++) {
    arrOfDots[i].onclick = function() {
        arrOfDots.map(el => el.className = 'slider__dot');
        arrOfDots[i].className = 'slider__dot slider__dot_active';
    }
}
