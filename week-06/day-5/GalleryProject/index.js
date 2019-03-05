'use strict';


const express = require('express');
const multer = require('multer'); // file storing middleware
const bodyParser = require('body-parser'); //cleans our req.body
const fs = require('fs')
const app = express();
const PORT = 3000;
const path = require('path')

app.use(bodyParser.urlencoded({ extended: false })); //handle body requests
app.use(bodyParser.json());


app.use('/assets', express.static('assets'))
app.use('/assets/pictures', express.static('pictures'))
app.use('/assets/dir', express.static('pictures'))
app.use('/assets/image_desc', express.static('image_desc'))
app.use('/assets/comments', express.static('comments'))

// FOR IMAGE SAVING

let numberOfPictures = fs.readdirSync('./assets/pictures')
let commentTxt = fs.readFileSync('./assets/comments/comments.txt', 'utf-8')
let descDocument = fs.readFileSync('./assets/image_desc/descriptions.txt', 'utf-8')
let counter = numberOfPictures.length - 1;
let firstToShow = 0;
let commentCheck = 0;


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
  return insideTag;
}

function commentEngine(txt) {
  let sepComments = '';
  let arr = txt.split('===')
  arr = arr.reverse()
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined) {
      sepComments += `<div class="commentBox"><p>${arr[i]}</p></div> \n`
    }
  }
  return sepComments;
}

app.get('/', (req, res) => {
  res.render('home', {
    img: `<img src='./assets/pictures/${firstToShow}.jpg' alt="this is an image" id="selected"/>`,
    thumbnail: `<ul></ul>`,
    pictureCount: counter,
    descriptionAndTitle: descSplitter(descDocument),
    comments: commentEngine(commentTxt),
    commentchecker: commentCheck,
  })
  commentCheck = 0;
})


//UPLOAD
app.post('/upload', multer(multerConfig).single('photo'), function (req, res) {
  counter += 1;
  console.log('server:', counter)
  if (req.body.title.length > 0 && req.body.desc.length > 0) {
    fs.appendFileSync('./assets/image_desc/descriptions.txt', `${req.body.title}\n---\n${req.body.desc}\n===\n`)
  } else {
    fs.appendFileSync('./assets/image_desc/descriptions.txt', `Lorem Ipsum\n---\n   \n===\n`)
  }
  descSplitter(descDocument)
  firstToShow = counter - 1;
  descDocument = fs.readFileSync('./assets/image_desc/descriptions.txt', 'utf-8')
  commentTxt = fs.readFileSync('./assets/comments/comments.txt', 'utf-8');
  setTimeout(() => {
    res.redirect('/');
  }, 200);
});

//COMMENTS
app.post('/comment', function (req, res) {
  if (req.body.comment.length > 0) {
    fs.appendFileSync('./assets/comments/comments.txt', `<strong>${Date.now()} commented:</strong> <br><br> ${req.body.comment}\n===\n`);
    commentTxt = fs.readFileSync('./assets/comments/comments.txt', 'utf-8');
    //console.log(req.body.comment)
    commentCheck = 1;
    setTimeout(() => {
      res.redirect('/');
    }, 500);
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});