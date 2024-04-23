const path = require('path');

const express = require('express');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/www/index.html'));
})

const srv_port = process.env.SRV_PORT || 3000;
app.listen(srv_port);
console.log('Server started at http://localhost:' + srv_port);