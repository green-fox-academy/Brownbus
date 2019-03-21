'use strict';

const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql')
const PORT = 4000;
const bodyParser = require('body-parser')

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'brownbus',
  password: 'root',
  database: 'quizDB'
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static('assets'));

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});

app.get('/', (req, res) => {
res.redirect('/game')
});


app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'))
});


app.get('/questions', (req, res) => {
  //Manage questions
  res.sendFile(path.join(__dirname, '/views/questions.html'))
});


app.get('/api/game', (req, res) => {
  let selectQuery = 'SELECT question FROM QUESTIONS'
  conn.query(selectQuery, (err, data) => {
    if (err) {
      console.log(err);
      res.status(403).send(err.message);
    } else {
      let randomQuery = `SELECT * FROM QUESTIONS WHERE question_id="${randomInt(1, data.length+1)}"`
      conn.query(randomQuery, (err, question) => {
        if (err) {
          console.log(err);
          res.status(403).send(err.message);
        } else {
          res.send(question)
        }
      });
    }
  });
});


app.post('/api/questions', (req, res) => {
  //adding a new question
  let question = req.body.question;
  let answerOne = req.body.answer_one;
  let answerTwo = req.body.answer_two;
  let answerThree = req.body.answer_three
  let correctAnswer = req.body.correct_answer
  let questionObj = Object.keys(req.body)
  let validator = true;
  for (let i = 0; i < questionObj.length; i++) {
    if (req.body[questionObj[i]].length < 1) {
      validator = false;
      res.status(403).send(JSON.stringify({ msg: 'Please fill out every field' }))
    }
  }
  if (validator === true) {
    let insertQuery = `
    INSERT INTO 
    questions
    (question, answer_one, answer_two, answer_three, correct_answer) 
    VALUES(
    "${question}", 
    "${answerOne}",
    "${answerTwo}", 
    "${answerThree}", 
    "${correctAnswer}")`
    conn.query(insertQuery, (err) => {
      if (err) {
        console.log(err)
        res.status(500).send(err.message)
      } else {
        res.send(JSON.stringify({ msg: 'Question added' }))
      }
    });
  }
});

app.get('/api/questions', (req, res) => {
  let selectQuery = 'SELECT question_id, question FROM QUESTIONS'
  conn.query(selectQuery, (err, data) => {
    if (err) {
      console.log(err);
      res.status(403).send(err.message);
    } else {
      res.send(JSON.stringify({ questions: data }));
    };
  });
});

app.delete('/api/game/:id', (req, res) => {
  console.log(req.params)
  let id = req.params.id
  let deleteQuery = `DELETE FROM questions WHERE question_id="${id}"`
  conn.query(deleteQuery, (err) => {
    if(err){
      console.log(err);
      res.status(403).send(JSON.stringify({msg: 'The question in question is undeletable, maybe it is already deleted...'}))
    }else{
      res.send(JSON.stringify({msg: 'The question is deleted'}))
    }
  });
});

function randomInt(min, max) {
  let num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}