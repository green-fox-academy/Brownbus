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
  console.log(req.body)

  let postedData = req.body.post_text;
  let threadName = req.body.thread_name;



  if (postedData.length > 2 && threadName.length > 2) {

    let sqlSYNT = 'INSERT INTO `post` (poster_name, post_text, thread_name) VALUES ("anonymous", "' + postedData + '", "' + threadName + '")';
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
  } else { res.redirect('/') }
});


app.get('/api/main', (req, res) => {
  conn.query('SELECT * FROM post INNER JOIN likes ON post.post_id = likes.post_id ORDER BY post_date DESC;', function (err, data) {
    if (err) { console.log(err) } else {
      console.log('Data received from DataBase:\n');
    }
    res.send(data)
  });
});

app.get('/api/popular', (req, res) => {
  conn.query('SELECT * FROM post INNER JOIN likes ON post.post_id = likes.post_id ORDER BY number_of_likes DESC;', function (err, data) {
    if (err) { console.log(err) } else {
      console.log('Data received from DataBase:\n');
    }
    res.send(data)
  });
});

app.get('/api/trending', (req, res) => {
  conn.query('SELECT * FROM post INNER JOIN likes ON post.post_id = likes.post_id ORDER BY  post_date ,number_of_likes ASC LIMIT 10,10;', function (err, data) {
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
app.get('/popular', function (req, res) {
  res.sendFile(path.join(__dirname + '/popular.html'));
});
app.get('/trending', function (req, res) {
  res.sendFile(path.join(__dirname + '/trending.html'));
});

app.post('/log_in', function (req, res) {
  res.sendFile(path.join(__dirname + '/login.html'));
});
app.post('/sign_up', function (req, res) {
  res.sendFile(path.join(__dirname + '/register.html'));
});

app.get('/log_in', function (req, res) {
  res.sendFile(path.join(__dirname + '/login.html'));
});
app.get('/sign_up', function (req, res) {
  res.sendFile(path.join(__dirname + '/register.html'));
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
    vote(-1, req.params.id);
  } else if (req.params.action == 'upvote_post') {
    vote(1, req.params.id);
  }
});

app.post('/api/search', (req, res) => {
  console.log(req.body.search)
  conn.query(`SELECT * FROM post WHERE thread_name LIKE '%${req.body.search}%'`, (err, data) => {
    if (err) {
      console.log(err)
      console.error
    };
    res.send(data)
  });
  //res.redirect('/')

})

app.post('/:id/delete_post', (req, res) => {
  let deletePost = `DELETE FROM post WHERE post_id=${req.params.id}`
  let deleteLikes = `DELETE FROM likes WHERE post_id=${req.params.id}`
  conn.query(deletePost, (err) => {
    if (err) {
      console.log(err);
    };
  });

  conn.query(deleteLikes, (err) => {
    if (err) {
      console.log(err);
    };
  });

});


app.post('/auth', (req, res) => {
  let loginCheck = `SELECT u_name, u_password FROM user WHERE u_name="${req.body.username}"`
  conn.query(loginCheck, (err, data) => {
    if (err) { console.log(err) };
    if (data.length == 1 && req.body.password == data[0].u_password) {
      res.redirect('/')
    } else { res.redirect('/log_in') }
  });
});


app.post('/register', (req, res) => {
  let valid = 0;
  let userCheck = `SELECT u_name FROM user WHERE u_name="${req.body.username}"`
  let profile = 'INSERT INTO `user` (u_name, u_password) VALUES ("' +req.body.username +'" , "'+ req.body.password + '");'
  console.log(req.body.username)
  console.log(req.body.email)
  console.log(req.body.password)
  console.log(req.body.password_again)
  conn.query(userCheck, (err, data) => {
    if (err) { console.log(err) };
    if (data.length == 1) {
      console.log('username is taken')
      valid = 0;
      res.redirect('/sign_up')
    }else{valid = 1}
if(req.body.password !== req.body.password_again){
  console.log('the passwords doesnt match')
  valid = 0;
  res.redirect('/sign_up')
} 
if(valid === 1){
  conn.query(profile, (err) => {
if(err){console.log(err)};
console.log('You have succesfully registered')
res.redirect('/log_in')
  });
}
  });
});


app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});



