'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');



app.get('/', (req, res) => {
  // render `home.ejs`
  let name = req.query.name;
  if (name == undefined) {
    name = 'Guest'
  } else {
    name = req.query.name
  }
  res.render('home', {
    title: ` Hello ${name}!`,
  });
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});