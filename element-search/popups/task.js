let modalMain = document.getElementById('modal_main');
modalMain.className = 'modal modal_active';

let modalSuccess = document.getElementById('modal_success');

let closeBtns = document.getElementsByClassName('modal__close_times');
let arrOfCloseBtns = Array.from(closeBtns);

let successEl = document.querySelector('.show-success');

for (let i = 0; i < arrOfCloseBtns.length; i++) {
  arrOfCloseBtns[i].onclick = () => {
    arrOfCloseBtns[i].closest('.modal').className = 'modal';
  }
}

successEl.onclick = () => {
  modalSuccess.className = 'modal modal_active';
}
