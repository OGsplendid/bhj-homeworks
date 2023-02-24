let tasksInput = document.getElementById('task__input');
let tasksAdd = document.getElementById('tasks__add');
let tasksList = document.getElementById('tasks__list');

function createNewTask() {
    let taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.insertAdjacentHTML('afterBegin', '<div class="task__title"></div><a href="#" class="task__remove">&times;</a>');
    return taskDiv;
}

function addTask() {
    let newTask = createNewTask();
    let taskText = newTask.querySelector('.task__title');
    taskText.textContent = tasksInput.value;
    tasksList.insertAdjacentElement('beforeEnd', newTask);
    // localStorage.setItem(`${++localStorage.length}`, newTask);
}

tasksAdd.onclick = () => {
    if (tasksInput.value !== '') {
        addTask();
        tasksInput.value = '';
        return false;
    }
}

tasksList.onclick = function(event) {
    let target = event.target;
        
    if (target.tagName !== 'A') {
        return;
    }
    let parentDiv = target.closest('.task');
    parentDiv.remove();
}

// //localStorage
// if (localStorage.length != 0) {
//     for (let i = 0; i < localStorage.length; i++) {
//         let key = localStorage.key(i);
//         let template = `${localStorage.getItem(key)}`
//         tasksList.insertAdjacentHTML('afterbegin', template);
//     }
// }
