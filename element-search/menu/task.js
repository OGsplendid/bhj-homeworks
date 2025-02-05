let menuLinks = document.getElementsByClassName('menu__link');
let arrOfMenuLinks = Array.from(menuLinks);

let subMenues = document.getElementsByClassName('menu_sub');
let arrOfSubMenues = Array.from(subMenues);

for (let i = 0; i < arrOfMenuLinks.length; i++) {
  let subMenuLink = arrOfMenuLinks[i].closest('.menu__item').querySelector('.menu_sub');

  arrOfMenuLinks[i].onclick = function() {

    if (subMenuLink && subMenuLink.className === 'menu menu_sub') {
      arrOfSubMenues.map(el => {
        if (el.className === 'menu menu_sub menu_active') {
          el.className = 'menu menu_sub';
        }
      });
      subMenuLink.className = 'menu menu_sub menu_active';
      return false;
    } else if (subMenuLink && subMenuLink.className === 'menu menu_sub menu_active') {
      subMenuLink.className = 'menu menu_sub';
      return false;
    }
  }
};
