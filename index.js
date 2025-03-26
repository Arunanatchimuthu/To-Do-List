const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.log(err);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
const Todo = require('./models/Todo');

// Get all tasks
app.get('/tasks', async (req, res) => {
  const tasks = await Todo.find();
  res.json(tasks);
}); 

// Create a new task
app.post('/tasks', async (req, res) => {
  const { title, completionDate } = req.body;
  const newTask = new Todo({
    title,completionDate});
  await newTask.save();
  res.json(newTask);
});

// Update a task
app.put('/tasks/:id', async (req, res) => {
  const updatedTask = await Todo.findByIdAndUpdate(req.params.id, { status: 'completed' }, { new: true });
  res.json(updatedTask);
});

// Delete a task
app.delete('/tasks/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
});
