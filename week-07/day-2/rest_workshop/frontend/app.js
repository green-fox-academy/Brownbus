'use strict';

const express = require('express');
const app = express();
const path = require('path');
const port = 8080; 

app.use('/assets', express.static('assets'));
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname,  '/index.html'));
});

app.get('/doubling', (request, response) => {
console.log(request.body)
});

app.listen(port);  