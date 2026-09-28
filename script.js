const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
const errorMessage = document.querySelector('#task-error');

const tasks = [];

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.hidden = false;
  taskInput.setAttribute('aria-invalid', 'true');
}

function clearError() {
  errorMessage.textContent = '';
  errorMessage.hidden = true;
  taskInput.setAttribute('aria-invalid', 'false');
}

function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const item = document.createElement('li');
    item.textContent = task;
    taskList.appendChild(item);
  });
}

function addTask(taskText) {
  const cleanedText = taskText.trim();

  if (!cleanedText) {
    showError('Task description cannot be empty.');
    return;
  }

  tasks.push(cleanedText);
  clearError();
  renderTasks();
  taskInput.value = '';
  taskInput.focus();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask(taskInput.value);
});

renderTasks();
