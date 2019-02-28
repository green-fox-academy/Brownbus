 'use strict';

let express = require('express');
let app = express();
let path = require('path')

app.use('/assets', express.static('assets'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000); 

/*  'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000)  */