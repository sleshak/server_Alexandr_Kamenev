class ToDoApp {
    constructor() {
        this.taskInput = document.getElementById('input');
        this.tasksContainer = document.getElementById('tasklist');
        this.buttonContainer = document.getElementById('button');
        this.init();
    }

    init() {
        this.createAddButton();
        this.loadTasks();
    }

    createAddButton() {
        const addButton = document.createElement('button');
        addButton.textContent = 'Добавить';
        addButton.addEventListener('click', () => this.handleAddTask());
        this.buttonContainer.appendChild(addButton);
    }

    handleAddTask() {
        const taskText = this.taskInput.value.trim();
        if (taskText) {
            this.addTask(taskText);
            this.taskInput.value = '';
        }
    }

    addTask(taskText) {
        this.renderTask(taskText);
        this.saveTask(taskText);
    }

    renderTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        
        const textSpan = document.createElement('span');
        textSpan.textContent = taskText;
        
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', () => {
            taskItem.remove();
            this.removeTask(taskText);
        });
        
        taskItem.append(textSpan, deleteButton);
        this.tasksContainer.appendChild(taskItem);
    }

    removeTask(taskText) {
        const tasks = this.getTasks().filter(task => task !== taskText);
        this.updateStorage(tasks);
    }

    getTasks() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }

    saveTask(taskText) {
        const tasks = this.getTasks();
        tasks.push(taskText);
        this.updateStorage(tasks);
    }

    updateStorage(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    loadTasks() {
        const savedTasks = this.getTasks();
        savedTasks.forEach(task => this.renderTask(task));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ToDoApp();
});