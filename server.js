const express = require('express');
const app = express();
const { v4 } = require('uuid');
const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server has been started on port: ${port}...`)
);

let TASKS = [
  {
    title: 'Hello task',
    id: v4(),
    body: 'Task for example',
    done: false,
  },
];

app.use(express.json()); // для работы с reqстами

app.get('/api/tasks', (req, res) => {
  res.status(200).json(TASKS);
});

app.post('/api/tasks', (req, res) => {
  const newTask = { ...req.body, status: 'In progress', id: v4() };
  TASKS.unshift(newTask);
  res.status(201).json(newTask);
});

app.delete('/api/tasks/:id', (req, res) => {
  TASKS = TASKS.filter((t) => t.id !== req.params.id);
  res.status(200).json({message: 'Task was succsesfuly deleted'});
});

app.put('/api/tasks/:id', (req, res) => {
  const idx = TASKS.findIndex((t) => t.id === req.params.id);
  TASKS[idx] = req.body;
  res.status(200).json(TASKS[idx]);
});
