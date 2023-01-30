let sliders = document.getElementsByClassName('slider__item');
let arrOfSliders = Array.from(sliders);

let arrows = document.getElementsByClassName('slider__arrow');
let arrOfArrows = Array.from(arrows);
let previous = arrOfArrows[0];
let next = arrOfArrows[1];

let dots = document.getElementsByClassName('slider__dot');
let arrOfDots = Array.from(dots);


function determineActiveSlide() {
    let activeSlide = arrOfSliders.find(el => el.className === 'slider__item slider__item_active');
    return activeSlide;
}

function activateSlide(slideNumber) {
    arrOfSliders.forEach(el => el.className = 'slider__item');
    arrOfSliders[slideNumber].className = 'slider__item slider__item_active';
}

previous.onclick = function() {
    let slideNumber = arrOfSliders.findIndex(determineActiveSlide);
    slideNumber--;
    if (slideNumber === -1) {
        slideNumber = arrOfSliders.length - 1;
    }
    activateSlide(slideNumber);
}

next.onclick = function() {
    let slideNumber = arrOfSliders.findIndex(determineActiveSlide);
    slideNumber++;
    if (slideNumber > arrOfSliders.length - 1) {
        slideNumber = 0;
    }
    activateSlide(slideNumber);
}

for (let i = 0; i < arrOfDots.length; i++) {
    arrOfDots[i].onclick = function() {
        slideNumber = i;
        activateSlide(slideNumber);
    }
}
