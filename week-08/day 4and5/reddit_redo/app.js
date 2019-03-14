'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
const session = require('express-session');
const PORT = 8080;
const bodyParser = require('body-parser')
const path = require('path');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'brownbus',
  password: 'root',
  multipleStatements: true,
  database: 'greendit'
});

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/assets', express.static('assets'))

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`)
});


app.post('/auth', function (request, response) {
  const username = request.body.username;
  const password = request.body.password;
  if (username && password) {
    conn.query('SELECT * FROM users WHERE u_name = ? AND u_password = ?', [username, password], function (error, results, fields) {
      if (results.length > 0) {
        request.session.loggedin = true;
        request.session.username = username;
        response.redirect('/');
      } else {
        response.send('Incorrect Username and/or Password!');
      }
      response.end();
    });
  } else {
    response.send('Please enter Username and Password!');
    response.end();
  }
});

app.get('/home', function (request, response) {
  if (request.session.loggedin) {
    response.send('Welcome back, ' + request.session.username + '!');
  } else {
    response.send('Please login to view this page!');
  }
  response.end();
});

app.get('/', function (req, res) {
  if (req.session.loggedin) {
    res.render('home', {
      user: req.session.username
    });
  } else {
    res.redirect('/log_in')
  }
});


app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname + '/register.html'));
});



app.get('/log_in', (req, res) => {
  res.sendFile(path.join(__dirname + '/login.html'));
});


app.post('/sign_up', (req, res) => {
  let name = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  let pwAgain = req.body.password_again;
  console.log(password, pwAgain);

  let reg = 'INSERT INTO users (u_name, u_password, u_email) VALUES ("' + `${name}", "` + `${password}", "` + `${email}")`;
  console.log(reg)
  if (password === pwAgain) {
    conn.query(reg, (err) => {
      if (err) {
        console.log(err);
      };
    });
  };
  res.redirect('/log_in')
});


app.post('/log_out', (req, res) => {
  req.session.loggedin = false;
  res.redirect('/')
});
///////POST HANDLING
app.post('/post', (req, res) => {
  console.log(req.body)

  let postedData = req.body.post_text;
  let threadName = req.body.thread_name;
  conn.query(`SELECT u_id FROM users WHERE u_name="${req.body.username}"`, (err, data) => {
    let userID = data[0].u_id
    console.log(userID)


    if (postedData.length > 2 && threadName.length > 2) {
      let sqlSYNT = 'INSERT INTO `post` (u_id, poster_name, post_text, thread_name) VALUES ("' + userID + '", "' + req.body.username + '", "' + postedData + '", "' + threadName + '")';
      console.log(sqlSYNT)
      conn.query(sqlSYNT, (err) => {
        if (err) {
          console.log(err)
        };
      }),
        res.redirect('/')
    } else {
      res.redirect('/')
    }
  });
});


function vote(parameter, id) {
  let like = `UPDATE post SET number_of_likes = number_of_likes + ${parameter} WHERE post_id=${id}`
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



app.post('/:id/delete_post', (req, res) => {
  console.log(req.params.id)
  let deletePost = `DELETE FROM post WHERE post_id=${req.params.id}`
  let posterName = `SELECT poster_name FROM post WHERE post_id=${req.params.id}`
 conn.query(posterName, (err,data) => {
   let postName = data[0].poster_name;   
   if(req.session.username === postName || req.session.username === 'admin'){
     conn.query(deletePost, (err) => {
       if (err) {
         console.log(err);
        };
      });
    }else{
      console.log('you are not authorized to delete this post')
    }
  });
});


app.post('/comment/:post_id', (req, res) => {
  let query = 'INSERT INTO comments (poster_name, post_id, comment_text) VALUES ("' + `${req.session.username}", "` + `${req.params.post_id}", "` + `${req.body.comment_text}")`;
  conn.query(query, (err) => {
    if (err) {
      console.log(err);
    };
  });
  res.status(204).send();
});


app.get('/popular', function (req, res) {
  res.render('popular', {
    user: req.session.username
  });
});
app.get('/trending', function (req, res) {
  res.render('trending', {
    user: req.session.username
  });
});

/////////////APIS

function api(endpoint, callback) {
  let query;
  if (endpoint === 'main') {
    query = 'SELECT post.u_id, post_date, post_id, post_text, thread_name, number_of_likes, poster_name FROM post INNER JOIN users ON post.u_id = users.u_id ORDER BY post_date DESC';

  } else if (endpoint === 'popular') {
    query = 'SELECT post.u_id, post_date, post_id, post_text, thread_name, number_of_likes, poster_name FROM post INNER JOIN users ON post.u_id = users.u_id ORDER BY number_of_likes DESC';
  } else if(endpoint === 'trending') {
    query = 'SELECT post.u_id, post_date, post_id, post_text, thread_name, number_of_likes, poster_name FROM post INNER JOIN users ON post.u_id = users.u_id ORDER BY number_of_likes, post_date ASC LIMIT 10,10;';
  } else if(endpoint === 'comments'){
    query = 'SELECT comment_date, post_id, comment_text, poster_name FROM comments ORDER BY comment_date DESC';
  }else{
    query = ''
  }
  conn.query(query, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      callback.send(data)
    }
  });
}


app.get(`/api/:action`, (req, res) => {
  api(req.params.action, res)
})



