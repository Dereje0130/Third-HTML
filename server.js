const express = require('express');
const path = require('path');

const server = express();
const port = process.env.PORT || 8080;

// sendFile will go here
server.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/Calculator.html'));
});

server.use(express.static('public'));

server.listen(port);
console.log('Server started at http://localhost:' + port);