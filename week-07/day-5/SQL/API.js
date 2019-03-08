const express = require('express');
const app = express();
const sql = require('mysql');
const path = require('path');


let conn = mysql.createConnection({
  host: 'localhost',
  user: 'brownbus',
  password: 'root',
  database: 'reddit'
});


app.get('/main',(req,res) => {
conn.query('SELECT * FROM posts;', function(err, data) {
  if(err){console.log(err)}else{
    console.log('Data received from DataBase:\n');
  }
  res.send(data)
  });
});


app.listen(PORT, ()=>{
  console.log(`Listening to ${PORT}`)