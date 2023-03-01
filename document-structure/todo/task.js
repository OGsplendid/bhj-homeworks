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

function addTask() {
    let newTask = createNewTask();
    let taskText = newTask.querySelector('.task__title');
    taskText.textContent = tasksInput.value;
    tasksList.insertAdjacentElement('beforeEnd', newTask);

    storage.push(newTask.outerHTML);
    console.log(storage)
    localStorage.clear();
    localStorage.setItem('taskArray', JSON.stringify(storage));
}

tasksAdd.onclick = () => {
    if (tasksInput.value.trim() !== '') {
        addTask();
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
    
    storage.splice(storage.indexOf(parentDiv), 1);
    localStorage.clear();
    localStorage.setItem('taskArray', storage);

    // почему на получалось так? Есть догадка, но хотелось бы знать точно
    // let keys = Object.keys(localStorage);

    // for (let i = 0; i < keys.length; i++) {
    //     if (localStorage[i] === `${parentDiv}`) {
    //         console.log(localStorage[i])
    //     }
    // }

    parentDiv.remove();
}


window.onload = () => {
    if (localStorage.length !== 0) {
        let storedString = JSON.parse(localStorage.getItem('taskArray'));
        storage.push(storedString)

        console.log(storage);

        // for (let i = 0; i < storage.length; i++) {
        //     tasksList.insertAdjacentElement('beforeEnd', storage[i]);
        // }
    }
}
