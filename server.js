const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server has been started on: ${port}`));

app.get('/api/server', (req, res) => {
    res.send({ express: 'YOUR SERVER IS WORKING' });
  });
