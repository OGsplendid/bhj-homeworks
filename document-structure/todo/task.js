let tasksInput = document.getElementById('task__input');
let tasksAdd = document.getElementById('tasks__add');
let tasksList = document.getElementById('tasks__list');
let storage = [];

function createNewTask() {
    let taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.insertAdjacentHTML('afterBegin', '<div class="task__title"></div><a href="#" class="task__remove">&times;</a>');
    return taskDiv;
}

function addTask(text) {
    let newTask = createNewTask();
    let taskText = newTask.querySelector('.task__title');
    taskText.textContent = text;
    tasksList.insertAdjacentElement('beforeEnd', newTask);
    
    localStorage.setItem('taskArray', JSON.stringify(storage));
}

tasksAdd.onclick = () => {
    if (tasksInput.value.trim() !== '') {
        storage.push(tasksInput.value);
        addTask(tasksInput.value);
        tasksInput.value = '';
    }
    return false;
}

tasksList.onclick = function(event) {
    let target = event.target;
        
    if (!target.classList.contains('task__remove')) {
        return;
    }
    let parentDiv = target.closest('.task');
    
    storage.splice(storage.indexOf(target.closest('div').querySelector('.task__title').textContent), 1);
    localStorage.setItem('taskArray', JSON.stringify(storage));

    parentDiv.remove();
}


window.onload = () => {
    if (localStorage.length !== 0) {
        storage = JSON.parse(localStorage.getItem('taskArray'));

        storage.forEach(el => {
            addTask(el);
        })
    }
}
