// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Data
const comments = [
  { id: 1, author: 'Bob', text: 'Awesome!' },
  { id: 2, author: 'Alice', text: 'Cool!' },
];

// Routes
app.get('/comments', (req, res) => {
  res.send(comments);
});

app.post('/comments', (req, res) => {
  const newComment = {
    id: comments.length + 1
  }
});