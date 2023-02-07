let tabs = document.getElementsByClassName('tab');
let arrOfTabs = Array.from(document.getElementsByClassName('tab'));
let tabContents = document.getElementsByClassName('tab__content');
let arrOfTabContents = Array.from(tabContents);

for (let i = 0; i < tabs.length; i++) {
    arrOfTabs[i].onclick = function() {
        arrOfTabs.forEach(el => el.className = 'tab');
        arrOfTabContents.forEach(el => el.className = 'tab__content');
        arrOfTabs[i].classList.toggle('tab_active');
        arrOfTabContents[i].classList.toggle('tab__content_active');
    }
}
