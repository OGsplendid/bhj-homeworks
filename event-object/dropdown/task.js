let dropdownList = document.querySelector('.dropdown__list');
let dropdownValue = document.querySelector('.dropdown__value');

let dropdownLinks = document.getElementsByClassName('dropdown__link');
let arrOfLinks = Array.from(dropdownLinks);

dropdownValue.onclick = function() {
    if (dropdownList.className === 'dropdown__list') {
        dropdownList.className = 'dropdown__list dropdown__list_active';
    } else {
        dropdownList.className = 'dropdown__list';
    }
};

for (let i = 0; i < arrOfLinks.length; i++) {
    arrOfLinks[i].onclick = function() {
        dropdownList.className = 'dropdown__list';
        dropdownValue.textContent = arrOfLinks[i].textContent;
        return false;
    };
};
