// Selectors
const taskInput = document.querySelector('#task-input');
const addTaskBtn = document.querySelector('#add-task-btn');
const taskList = document.querySelector('#task-list');

// Event Listeners
addTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);
taskList.addEventListener('click', completeTask);

// Functions
function addTask() {
  const taskText = taskInput.value;
  if (taskText === '') return;
   // Create list item
   const listItem = document.createElement('li');
   listItem.classList.add('task-item');
 
   // Add checkbox to list item
   const checkbox = document.createElement('input');
   checkbox.setAttribute('type', 'checkbox');
   checkbox.classList.add('task-checkbox');
   listItem.appendChild(checkbox);
 
   // Add task label to list item
   const label = document.createElement('label');
   label.textContent = taskText;
   listItem.appendChild(label);
 
   // Add delete button to list item
   const deleteBtn = document.createElement('button');
   deleteBtn.textContent = 'Delete';
   deleteBtn.classList.add('delete');
   listItem.appendChild(deleteBtn);
 
   // Add list item to task list
   taskList.appendChild(listItem);
 
   // Clear input field
   taskInput.value = '';
 }
 
 function deleteTask(e) {
   if (e.target.classList.contains('delete')) {
     e.target.parentElement.remove();
   }
 }
 
 function completeTask(e) {
   if (e.target.classList.contains('task-checkbox')) {
     const listItem = e.target.parentElement;
     if (e.target.checked) {
       listItem.classList.add('completed');
     } else {
       listItem.classList.remove('completed');
     }
   }
 }
 
