const express = require('express')
const mysql = require('mysql');
const app = express()
const PORT = 3000;
const path = require('path');


let conn = mysql.createConnection({
  host: 'localhost',
  user: 'brownbus',
  password: 'root',
  database: 'bookstore'
});
app.use('/bookstore',express.static('bookstore'))

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/show_author',(req,res) => {
conn.query('SELECT * FROM author;', function(err, data) {
  if(err){console.log(err)}else{
    console.log('Data received from DataBase:\n');
  }
  res.send(data)
  });
});

conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    console.log(err)
    return;
  }
  console.log('Connection established');
});

app.listen(PORT, () => { console.log('listening to ', PORT) })