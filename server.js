const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server has been started on port: ${port}...`));

const savedTasks = [{
  title: 'Test task',
  id: 1,
  body: 'test task for initial state',
  done: false,
}];

app.get('/api/server', (req, res) => {
    res.send(savedTasks);
  });
