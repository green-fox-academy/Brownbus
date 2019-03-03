'use strict';


const express = require('express');
const multer = require('multer'); // file storing middleware
const bodyParser = require('body-parser'); //cleans our req.body
const fs = require('fs')
const app = express();
const PORT = 3000;
const path = require('path')
//let numberedThumbs = require('./assets/galery.js')

app.use(bodyParser.urlencoded({ extended: false })); //handle body requests
app.use(bodyParser.json()); // let's make JSON work too!


app.use('/assets', express.static('assets'))
app.use('/assets/pictures', express.static('pictures'))
app.use('/assets/dir', express.static('pictures'))
app.use('/assets/image_desc', express.static('image_desc'))

// FOR IMAGE SAVING

let numberOfPictures = fs.readdirSync('./assets/pictures')
let descDocument = fs.readFileSync('./assets/image_desc/descriptions.txt', 'utf-8')
let counter = numberOfPictures.length - 1;
let firstToShow = 0;
console.log(descDocument)

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
      next(null, `${counter}` + '.' + 'jpg');
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

function descSplitter(file) {
  let insideTag = ''; 
  let array = file.split('===');
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].split('\n---\n');
    insideTag += `\n <h1 class='titleForThePics' id="iden${i}">${array[i][0]}</h1>\n<h3 class='descForThePics' id="descIden${i}">${array[i][1]}<h3>`
  }
  console.log(insideTag)
  return insideTag;
}

//descSplitter(descDocument)

app.get('/', (req, res) => {
  res.render('home', {
    img: `<img src='./assets/pictures/${firstToShow}.jpg' alt="this is an image" id="selected"/>`,
    thumbnail: `<ul></ul>`,
    pictureCount: counter,
    descriptionAndTitle : descSplitter(descDocument),
    /* title: `</h1 id='seleH1'><script> let tit = document.getElementById(iden${firstToShow}).innerHTML; picTitle.innerHTML= tit;  </script> </h1>` , 
    description: `</h3 id='seleH3'><script> let des = document.getElementById(descIden${firstToShow}).innerHTML; picDesc.innerHTML = des;  </script> </h3>` */ 
  })
})

//route2
app.post('/upload', multer(multerConfig).single('photo'), function (req, res) {
  counter += 1;
  console.log('server:', counter)
  if (req.body.title.length > 0 && req.body.desc.length > 0) {
    fs.appendFileSync('./assets/image_desc/descriptions.txt', `${req.body.title}\n---\n${req.body.desc}\n===\n`)
  } else {
    fs.appendFileSync('./assets/image_desc/descriptions.txt', `Lorem Ipsum\n---\n n \n===\n`)
  }
  console.log(req.body.title);
  console.log(req.body.desc);
  descSplitter(descDocument)
  firstToShow = counter - 1;
  descDocument = fs.readFileSync('./assets/image_desc/descriptions.txt', 'utf-8')

  setTimeout(() => {
    res.redirect('/');
  }, 500);
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});