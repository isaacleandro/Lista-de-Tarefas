

document.getElementById('task-form').addEventListener('submit', addTask);

function addTask(e) {
    e.preventDefault();

    const taskinput = document.getElementById('task-input');
    const taskText = taskinput.value.trim();

    const allListItems = document.querySelectorAll('li');
    const allListItemsData = []

    allListItems.forEach((item) => {
        allListItemsData.push(item.textContent.toLowerCase());
    })

    if (taskText === '') {
        alert('insira uma tarefa.');
        return;
    } else if (allListItemsData.includes(`${taskText}x`.toLowerCase())) {
        alert('tarefa ja adicionada');
        taskinput.value = '';
        return;
    }
    else {
        addTasktoDOM(taskText);
        taskinput.value = '';
    }
}

function addTasktoDOM(taskText, completed = false) {
    const li = document.createElement('li');
    li.textContent = taskText;

    if (completed) {
        li.classList.add('completed');
    }

    li.addEventListener('click', toggleTaskCompletion);

    const deleteBtn = document.createElement('button');
    
    deleteBtn.textContent = 'x';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', deleteTask);

    li.appendChild(deleteBtn);

    document.getElementById('task-list').appendChild(li);
}

function toggleTaskCompletion(e) {
    e.target.classList.toggle('completed');
}

function deleteTask(e) {
    const li = e.target.parentElement;
    li.remove();
}

