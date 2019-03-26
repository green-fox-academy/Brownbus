'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql')
const PORT = 3000;

let conn = mysql.createConnection({
host: localhost,
user: 'Brownbus',
password: 'root',
database: 'Tribal_wars'
});

app.listen(PORT, () => {
  console.log(`'Listening to ${PORT}'`)
})

app.use('/game_screen_drawer', express.static('game_screen_drawer'))
app.use('/game_screen_drawer/img', express.static('img'))
app.use('/assets', express.static('assets'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/game.html')
});

function getApi(kindOfApi, villageName, callback) {
  let query = `SELECT * FROM ${kindOfApi} WHERE village_name="${villageName}"`
  console.log(query)
  conn.query(query, (err, data) => {
    if (err) {
      console.log(err)
      callback.status(500).send(JSON.stringify({ msg: err.message }))
    } else {
      callback.send(JSON.stringify({
        sentData: data, msg: 'success'
      }))
    }
  });
}

app.get('/api/:kindOfApi/:villageName', (req, res) => {
getApi(req.params.kindOfApi, req.params.villageName, res)
});

 /*  let village = req.params.villageName;
  let query = `SELECT * FROM village WHERE village_name="${village}"`
app.get('/api/buildings/:villageName', (req, res) => {
  let village = req.params.villageName;
  let query = `SELECT * FROM village WHERE village_name="${village}"`
});
app.get('/api/attacks/:villageName', (req, res) => {
  let village = req.params.villageName;
  let query = `SELECT * FROM village WHERE village_name="${village}"`
});
app.get('api/constructions/:villageName', (req, res) => {
  let village = req.params.villageName;
  let query = `SELECT * FROM village WHERE village_name="${village}"`
});
app.get('api/training/:villageName', (req, res) => {
  let village = req.params.villageName;
  let query = `SELECT * FROM village WHERE village_name="${village}"`
});
 */

