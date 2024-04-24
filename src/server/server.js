require('dotenv').config();
const path = require('path');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/../client/index.html'));
})

app.use('/client', express.static(path.join(__dirname, '/../client')));

const srv_port = process.env.SRV_PORT || 3000;
app.listen(srv_port);
console.log('Server started at http://localhost:' + srv_port);