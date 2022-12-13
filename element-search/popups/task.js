let modalMain = document.getElementById('modal_main');
modalMain.className = 'modal modal_active';
let closeBtns = document.getElementsByClassName('modal__close');
let firstElTimes = closeBtns[0];
let secondElTimes = closeBtns[2];

firstElTimes.onclick = () => {
  modalMain.className = 'modal';
};

secondElTimes.onclick = () => {
  modalSuccess.className = 'modal';
  modalMain.className = 'modal';
};

let modalSuccess = document.getElementById('modal_success');
let successEl = document.getElementsByClassName('show-success')[0];

successEl.onclick = () => {
  modalSuccess.className = 'modal modal_active';
  modalMain.className = 'modal';
};
