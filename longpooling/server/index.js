const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const messages = [];

app.post('/messages', (req, res) => {
    const { body } = req;
    console.log(body.content);
    messages.push(body);
    res.status(204).end();
});

app.get('/messages', (req, res) => {
    res.json(messages);
});

const subscribers = {};

app.post('/subscribe', (req, res) => {
    console.log('new user with id ', req.body.id);
    subscribers[req.body.id] = res;
});

app.post('/sub/msg', (req, res) => {
    const { body } = req;
    Object.keys(subscribers).forEach(sub => {
        subscribers[sub].json(body);
        delete subscribers[sub];
    });
    res.status(204).end();
});

app.listen(3000, () => {
   console.log('Server is listening on port 3000');
});