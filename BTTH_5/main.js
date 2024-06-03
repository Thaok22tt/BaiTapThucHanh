const taskInput = document.getElementById('name');
const addButton = document.getElementById('but');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', function() {
  const taskValue = taskInput.value.trim();

  if (taskValue === '') {
    alert('Please enter a task!');
    return;
  }

  const listItem = document.createElement('li');
  listItem.classList.add('task-item');

  function addTaskContent() {
    const taskText = document.createElement('span');
    taskText.textContent = taskValue;
    listItem.appendChild(taskText);

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-btn');
    removeButton.innerHTML = '<i class="bx bx-x"></i>';

    listItem.appendChild(removeButton);

    removeButton.addEventListener('click', function() {
      taskList.removeChild(listItem);
    });
  }

  addTaskContent();

  taskList.appendChild(listItem);

  taskInput.value = '';
});