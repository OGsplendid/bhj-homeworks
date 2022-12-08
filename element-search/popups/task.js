let modalMain = document.getElementById('modal_main');
modalMain.className = 'modal modal_active';
let closeBtns = document.getElementsByClassName('modal__close');
let arrOfBtns = Array.from(closeBtns);
let firstEl = arrOfBtns.item(0);
let secondEl = arrOfBtns.item(1);

let modalSuccess = document.getElementById('modal_success');
let successEl = document.getElementById('show-success');
let successArr = Array.from(successEl);
let success = successArr[0];

firstEl.onclick = () => {
  modalMain.className = 'modal';
};

secondEl.onclick = () => {
  modalSuccess.className = 'modal';
};

success.onclick = () => {
  modalSuccess.className = 'modal modal_active';
};
