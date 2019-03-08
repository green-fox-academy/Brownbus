'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


let conn = mysql.createConnection({
  host: 'localhost',
  user: 'brownbus',
  password: 'root',
  database: 'reddit'
});

app.post('/post', (req, res) => {
  let postedData = req.body.post_text;

  let sqlSYNT = 'INSERT INTO `post` (poster_name, post_text) VALUES ("anonymous", "' + postedData + '")';
  let sqlID = 'INSERT INTO `likes` (number_of_likes) VALUES ("0");'
  conn.query(sqlID, (err) => {
    if (err) {
      console.log(err);
    };
  });


  conn.query(sqlSYNT, (err) => {
    if (err) {
      console.log(err)
    };
  }),

    res.redirect('/')

});


app.get('/api/main', (req, res) => {
  conn.query('SELECT * FROM post INNER JOIN likes ON post.post_id = likes.post_id;', function (err, data) {
    if (err) { console.log(err) } else {
      console.log('Data received from DataBase:\n');
    }
    res.send(data)
  });
});


app.use('/assets', express.static('assets'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});




function vote(parameter, id) {
  let like = `UPDATE likes SET number_of_likes = number_of_likes + ${parameter} WHERE post_id=${id}`
  conn.query(like, (err) => {
    if (err) {
      console.log(err);
    };
  });
}

app.post('/post_id/:id/:action', (req, res) => {
  if (req.params.action == 'downvote_post') {
    vote(-1, req.params.id)
  } else if (req.params.action == 'upvote_post') {
    vote(1, req.params.id)
  }
});

app.post('/:id/delete_post', (req, res) => {
 let deletePost = `DELETE FROM post WHERE post_id=${req.params.id}`
  conn.query(deletePost, (err) => {
    if (err) {
      console.log(err);
    };
  });
});

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});



