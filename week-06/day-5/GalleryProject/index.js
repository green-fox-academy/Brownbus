'use strict';


const express = require('express');
const multer = require('multer'); // file storing middleware
const bodyParser = require('body-parser'); //cleans our req.body
const app = express();
const PORT = 3000;
const path = require('path')
//let numberedThumbs = require('./assets/galery.js')
let counter = 10;

app.use(bodyParser.urlencoded({ extended: false })); //handle body requests
app.use(bodyParser.json()); // let's make JSON work too!

//app.use('/', express.static(__dirname + '/assets')); 
app.use('/assets', express.static('assets'))
app.use('/assets/pictures', express.static('pictures'))

// FOR IMAGE SAVING

const multerConfig = {

  storage: multer.diskStorage({
    //Setup where the user's file will go
    destination: function (req, file, next) {
      next(null, './assets/pictures');
    },

    //Then give the file a unique name
    filename: function (req, file, next) {
      console.log(file);
      const ext = file.mimetype.split('/')[1];
      next(null,`${counter}` + '.' + 'jpg');
    }
  }),

  //A means of ensuring only images are uploaded. 
  fileFilter: function (req, file, next) {
    if (!file) {
      next();
    }
    const image = file.mimetype.startsWith('image/');
    if (image) {
      console.log('photo uploaded');
      next(null, true);
    } else {
      console.log("file not supported");

      //TODO:  A better message response to user on failure.
      return next();
    }
  }
};
/////////////////////////////////////////////////

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('home', {
    img: `<img src='./assets/pictures/0.jpg' alt="this is an image" id="selected"/>`,
    thumbnail: `<ul></ul>`
  })
})

//route2
 app.post('/upload',  multer(multerConfig).single('photo'),  function (req, res) {
  /* res.send('Complete!'); */
  counter += 1;
  console.log('server:', counter)
}); 



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});