document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskInput = event.target.elements['new-task-description'];
    const task = taskInput.value;
    buildToDo(task);
    taskInput.value = '';
  });

  function buildToDo(task) {
    const li = document.createElement('li');
    li.innerHTML = task;
    taskList.appendChild(li);
  }
});
