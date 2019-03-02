'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
let path = require('path')

app.use('/assets', express.static('assets'))
app.use('/assets/pictures', express.static('pictures'))




app.set('view engine', 'ejs');


  app.get('/', (req, res) => {
    res.render('home', {
      img: `<img src='./assets/pictures/0.jpg' alt="this is an image" id="selected"/>`,
      thumbnail: `<ul></ul>`
      })
    })
  

  
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});