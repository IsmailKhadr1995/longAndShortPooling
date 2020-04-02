
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
    res.status(200).send('new message added');
});

app.get('/messages', (req, res) => {
    console.log('eeeee');
    
    res.json(messages);
});

app.listen(3000, () => {
   console.log('Server is listening on port 3000');
});








