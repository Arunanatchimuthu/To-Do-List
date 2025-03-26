const taskList = document.getElementById('task-list');
const titleInput = document.getElementById('title');
const completionDateInput = document.getElementById('completion-date'); // New input field

// Fetch and display tasks
function fetchTasks() {
  fetch('http://localhost:5000/tasks')
    .then(res => res.json())
    .then(tasks => {
      taskList.innerHTML = '';
      tasks.forEach(task => addTaskToDOM(task));
    });
}

// Add a new task
function addTask() {
  const title = titleInput.value;
  const completionDate = completionDateInput.value; // Get completion date

  if (!title || !completionDate) return;

  fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, completionDate }) // Send completion date to backend
  }).then(res => res.json())
    .then(task => addTaskToDOM(task));

  titleInput.value = '';
  completionDateInput.value = ''; // Reset the completion date input
}

// Add a task to the DOM
function addTaskToDOM(task) {
  const li = document.createElement('li');
  li.innerHTML = `
    ${task.title} (Due: ${new Date(task.completionDate).toLocaleDateString()}) <!-- Display completion date -->
    <button onclick="deleteTask('${task._id}')">Delete</button>
  `;
  taskList.appendChild(li);
}

// Delete a task
function deleteTask(id) {
  fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
    .then(() => fetchTasks());
}

// Fetch tasks when page loads
fetchTasks();
