let tabs = document.getElementsByClassName('tab');
let arrOfTabs = Array.from(document.getElementsByClassName('tab'));
let tabContents = document.getElementsByClassName('tab__content');
let arrOfTabContents = Array.from(tabContents);

// почему не выходит так:
// let arrOfTabs = Array.from(document.getElementsByClassName('tab'));
// let arrOfTabContents = Array.from(document.getElementsByClassName('tab__content'));

for (let i = 0; i < tabs.length; i++) {
    arrOfTabs[i].onclick = function() {
        if (arrOfTabs[i].className === 'tab') {
            arrOfTabs.forEach(el => el.className = 'tab');
            arrOfTabContents.forEach(el => el.className = 'tab__content');
            arrOfTabs[i].className = 'tab tab_active';
            arrOfTabContents[i].className = 'tab__content tab__content_active';
        } else {
            return;
        }
    }
}
