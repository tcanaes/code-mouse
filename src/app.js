//Load necessary libs
require('dotenv').config();
const path = require('path');

//Start server
require(path.join(__dirname, '/server/server.js'))