require('dotenv').config();
const path = require('path');
const fs = require('fs');

const express = require('express');
const app = express();

app.use(express.json());

app.use('/client', express.static(path.join(__dirname, '/../client')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/../client/index.html'));
})

app.get('/client/maps', (req, res) => {
    const mapFiles = fs.readdirSync(path.join(__dirname, '/../client/assets/maps'));
    const maps = [];
    mapFiles.forEach(file => {
        let filename = path.parse(file).name;
        if (filename.toLowerCase() != 'readme') {
            let filenameParts = filename.split("_");
            maps.push({
                dificulty: filenameParts[0],
                level: filenameParts[1],
                name: filenameParts[2],
                file: file
            });
        }
    });
    console.log(maps);
    res.json(maps);
});

const srv_port = process.env.SRV_PORT || 3000;
app.listen(srv_port);
console.log('Server started at http://localhost:' + srv_port);