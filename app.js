//Imports 
const express = require('express');
const data = require('./data/players.json');
const path = require('path');

const app = express();
const port = 3000;

// Let's dive into the world's best sport here => http://localhost:3000/football
app.use('/football', express.static(path.join(__dirname, 'public')));

//Path to get the JSON format displayed on the browser
app.get('/api/players', (req, res) => {
    res.json(data);
});

//With the path after the port /football, you'll get to our website
app.listen(port, () => {
    console.log(`App is listening on port => http://localhost:${port}`)
})