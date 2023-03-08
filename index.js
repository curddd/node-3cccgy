const express = require('express');
const app = express();

const messages = [];

const fs = require('fs');

let index = 'loading';
fs.readFile('index.html', 'utf8', (err, data) => {
  index = data;
});

app.get('/', (req, res) => {
  res.send(index);
});

app.get('/chat', (req, res) => {
  console.log(req.query);
  if (req.query.msg) {
    messages.push(req.query.msg);
  }
  res.send(messages.join('<br>'));
});

app.listen(80, () => {
  console.log('Server listening on port 80');
});
