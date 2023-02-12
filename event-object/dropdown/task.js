let dropdownList = document.querySelector('.dropdown__list');
let dropdownValue = document.querySelector('.dropdown__value');

let dropdownLinks = Array.from(document.getElementsByClassName('dropdown__link'));

// новая версия:

dropdownValue.onclick = function() {
    dropdownList.classList.toggle('dropdown__list_active');
};

for (let link of dropdownLinks) {
    link.onclick = function() {
        dropdownList.classList.toggle('dropdown__list_active');
        dropdownValue.textContent = link.textContent;
        return false;
    };
}

// dropdownValue.onclick = function() {
//     if (dropdownList.className === 'dropdown__list') {
//         dropdownList.className = 'dropdown__list dropdown__list_active';
//     } else {
//         dropdownList.className = 'dropdown__list';
//     }
// };

// for (let i = 0; i < dropdownLinks.length; i++) {
//     dropdownLinks[i].onclick = function() {
//         dropdownList.className = 'dropdown__list';
//         dropdownValue.textContent = dropdownLinks[i].textContent;
//         return false;
//     };
// };
