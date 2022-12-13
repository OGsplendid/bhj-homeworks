let menuLinks = document.getElementsByClassName('menu__link');
let arrOfMenuLinks = Array.from(menuLinks);

for (let i = 0; i < arrOfMenuLinks.length; i++) {
  arrOfMenuLinks[i].onclick = function() {
    if (arrOfMenuLinks[i].closest('ul').className === 'menu menu_sub') {
      arrOfMenuLinks[i].closest('ul').className = 'menu menu_sub menu_active';
      return false;
    };
  };
};
