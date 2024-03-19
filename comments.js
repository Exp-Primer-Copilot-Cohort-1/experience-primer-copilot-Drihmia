// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a middleware
app.use(express.json());

// Create an array of comments
const comments = [
    { id: 1, author: 'John', body: 'I am a comment' },
    { id: 2, author: 'Alex', body: 'I am a second comment' },
    { id: 3, author: 'Jane', body: 'I am a third comment' },
];

// Create a route to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create a route to get a single comment by id
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('The comment with the given ID was not found');
    res.json(comment);
});

// Create a route to create a new comment
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,