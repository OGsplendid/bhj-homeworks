let menuLinks = document.getElementsByClassName('menu__link');
let arrOfMenuLinks = Array.from(menuLinks);

let subMenues = document.getElementsByClassName('menu_sub');
let arrOfSubMenues = Array.from(subMenues);

for (let i = 0; i < arrOfMenuLinks.length; i++) {
  arrOfMenuLinks[i].onclick = function() {
    arrOfSubMenues.map(el => el.className = 'menu menu_sub');
    let neigbour = arrOfMenuLinks[i].closest('li').querySelector('ul');
    if (neigbour.className === 'menu menu_sub') {
        neigbour.className = 'menu menu_sub menu_active';
        return false;
    };
  };
};
