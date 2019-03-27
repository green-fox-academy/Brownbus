'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql')
const PORT = 3000;
const { dateStamp } = require('./datetest')
const bodyParser = require('body-parser')

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'brownbus',
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
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let userName = 'Brownbus'

app.get('/', (req, res) => {
  let refreshQuery = `SELECT * FROM village WHERE village_owner="${userName}"`
  conn.query(refreshQuery, (err, data) => {
    if (err) {
      console.log(err)
      res.sendStatus(500)
    } else {
      let currentTime = dateStamp
      if (parseInt(data[0].materials_last_updated) < currentTime) {
        let diff = currentTime - data[0].materials_last_updated
        let spentHours = Math.round(diff / 3600)
        let matUpdateQuery = `UPDATE village SET
        storage_gold = "${data[0].storage_gold + (spentHours * data[0].village_gold)}",
        storage_wheat = "${data[0].storage_wheat + (spentHours * data[0].village_wheat)}",
        storage_wood = "${data[0].storage_wood + (spentHours * data[0].village_wood)}",
        storage_stone = "${data[0].storage_stone + (spentHours * data[0].village_stone)}",
        storage_iron = "${data[0].storage_iron + (spentHours * data[0].village_iron)}" ,
        materials_last_updated = ${currentTime}        `
        conn.query(matUpdateQuery, (err) => {
          if (err) {
            console.log(err)
            //res.sendStatus(204)
          }
          res.sendFile(__dirname + '/game.html')
        })
      }
    }
  });
});

function getApi(kindOfApi, villageName, callback) {
  let query = `SELECT * FROM ${kindOfApi} WHERE village_name="${villageName}"`
  conn.query(query, (err, data) => {
    if (err) {
      console.log(err)
      callback.status(500).send(JSON.stringify({ msg: err.message }))
    } else {
      callback.send(JSON.stringify({
        sentData: data, msg: 'success'
      }));
    };
  });
};

app.get('/api/:kindOfApi/:villageName', (req, res) => {
  getApi(req.params.kindOfApi, req.params.villageName, res)
});

app.post('/updateResources', (req, res) => {
  let villageName = req.body.village_name
  let resourceSpeed = `SELECT village_gold, village_wheat, village_wood, village_stone, village_iron from village WHERE village_name="${villageName}"`
  conn.query(resourceSpeed, (err, data) => {
    if (err) {
      console.log(err)
      res.sendStatus(500);
    } else {
      let gold = Math.floor(data[0].village_gold / 60 )     
      let wheat = Math.floor(data[0].village_wheat / 60)  
      let wood = Math.floor(data[0].village_wood / 60 )       
      let stone = Math.floor(data[0].village_stone / 60)      
      let iron = Math.floor(data[0].village_iron / 60 )    
      let updateQuery = `UPDATE village SET 
      storage_gold = storage_gold + ${gold},
      storage_wheat = storage_wheat + ${wheat},
      storage_wood = storage_wood + ${wood},
      storage_stone = storage_stone + ${stone},
      storage_iron = storage_iron + ${iron},
      materials_last_updated=${dateStamp}
      `
      conn.query(updateQuery, (err) => {
        if (err) {
          console.log(err)
          res.status(500).send(JSON.stringify({msg: err.message}))
        }
      })
    };
  });
});
