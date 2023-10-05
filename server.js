const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server has been startted on: ${port}`));

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR SERVER IS WORKING' });
  });
