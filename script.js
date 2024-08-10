const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const tasksContainer = document.getElementById('tasks');

const addTask = () => {
    const taskText = newTaskInput.value.trim();
    if (taskText === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <label class="task-label">${taskText}</label>
        <button class="remove-btn">Remover</button>
    `;

    const checkbox = taskElement.querySelector('.task-checkbox');
    const label = taskElement.querySelector('.task-label');
    
    checkbox.addEventListener('change', () => {
        taskElement.classList.toggle('completed', checkbox.checked);
    });

    const removeBtn = taskElement.querySelector('.remove-btn');
    removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        tasksContainer.removeChild(taskElement);
    });

    tasksContainer.appendChild(taskElement);
    newTaskInput.value = '';
};

addTaskBtn.addEventListener('click', addTask);
newTaskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});
