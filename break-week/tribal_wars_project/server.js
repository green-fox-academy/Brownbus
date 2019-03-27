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
        let spentHours = diff / 3600
        let matUpdateQuery = `UPDATE village SET
        storage_gold = "${data[0].storage_gold + (Math.floor(spentHours * data[0].village_gold))}",
        storage_wheat = "${data[0].storage_wheat + (Math.floor(spentHours * data[0].village_wheat))}",
        storage_wood = "${data[0].storage_wood + (Math.floor(spentHours * data[0].village_wood))}",
        storage_stone = "${data[0].storage_stone + (Math.floor(spentHours * data[0].village_stone))}",
        storage_iron = "${data[0].storage_iron + (Math.floor(spentHours * data[0].village_iron))}" ,
        materials_last_updated = ${currentTime}        `
        conn.query(matUpdateQuery, (err) => {
          if (err) {
            console.log(err)
            res.sendStatus(500)
          } else
            res.sendFile(__dirname + '/game.html')
        });
      } else { res.sendFile(__dirname + '/game.html') }
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
      let gold = Math.floor(data[0].village_gold / 60)
      let wheat = Math.floor(data[0].village_wheat / 60)
      let wood = Math.floor(data[0].village_wood / 60)
      let stone = Math.floor(data[0].village_stone / 60)
      let iron = Math.floor(data[0].village_iron / 60)
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
          res.status(500).send(JSON.stringify({ msg: err.message }))
        }
      })
    };
  });
});


app.post('/build/:villageName/:building', (req, res) => {
  console.log('hi')
  let villageName = req.params.villageName
  let myBuilding = req.params.building;

  class Buildings {
    constructor(
      village,
      castle,
      trainingArea,
      goldMine,
      stoneQuarry,
      lumberMill,
      ironMine,
      farm,
      storage) {
      this.village = village
      this.castle = castle;
      this.trainingArea = trainingArea;
      this.goldMine = goldMine;
      this.stoneQuarry = stoneQuarry;
      this.lumberMill = lumberMill;
      this.ironMine = ironMine;
      this.farm = farm;
      this.storage = storage
    }
    build(building) {
      let selectQuery = `SELECT ${building.name} FROM buildings WHERE village_name="${this.village}"`
      let updateQuery = `UPDATE buildings SET ${building.name}=${building.name}+1 WHERE village_name="${this.village}"`
      conn.query(selectQuery, (err, buildingData) => {
        if (err) {
          console.log(err);
          res.sendStatus(503)
        } else {
          conn.query(`SELECT storage_gold, storage_wheat, storage_wood, storage_stone, storage_iron FROM village WHERE village_name="${this.village}"`, (err, data) => {
            if (err) { console.log(err); res.sendStatus(503) } else {
              let validator = true
              for (let i = 0; i < Object.keys(data[0]).length; i++) {
                if (data[0][Object.keys(data[0])[i]] < building.cost[i] * building.level * 5) {
                  validator = false;
                }
              };
              if (validator === true) {
                let decreasal = building.cost[1] * building.level * 5;
                let resUpdateQuery = `UPDATE village SET
                storage_gold = storage_gold - ${decreasal}, 
                storage_wheat = storage_wheat - ${decreasal},
                storage_wood= storage_wood - ${decreasal},
                storage_stone = storage_stone - ${decreasal},
                storage_iron = storage_iron - ${decreasal}`
                conn.query(resUpdateQuery, (err) => {
                  if (err) { console.log(err) } else {
                    setTimeout(() => {
                      conn.query(updateQuery, (err) => {
                        if (err) { console.log(err) }
                      });
                    }, building.level * 0.5 * 60*1000);
                  }
                });
              } else {
                res.send(JSON.stringify({ msg: 'You don\'t have enough materials try again later' }))
              }
            };
          });
        };
      });
      ;
    }
  };
  let myQuery = `SELECT * FROM buildings WHERE village_name="${villageName}"`
  conn.query(myQuery, (err, data) => {
    if (err) { console.log(err) }
    let thisVillage = new Buildings(villageName, { name: "castle", level: data[0].castle, cost: [100, 100, 100, 100, 100] },
      { name: "training_area", level: data[0].training_area, cost: [100, 100, 100, 100, 100] },
      { name: "gold_mine", level: data[0].gold_mine, cost: [100, 100, 100, 100, 100] },
      { name: "stone_quarry", level: data[0].stone_quarry, cost: [100, 100, 100, 100, 100] },
      { name: "lumber_mill", level: data[0].lumber_mill, cost: [100, 100, 100, 100, 100] },
      { name: "iron_mine", level: data[0].iron_mine, cost: [100, 100, 100, 100, 100] },
      { name: "farm", level: data[0].farm, cost: [100, 100, 100, 100, 100] },
      { name: "storage", level: data[0].storage, cost: [100, 100, 100, 100, 100] },
    );
    thisVillage.build({ name: myBuilding, level: data[0][myBuilding], cost: [100, 100, 100, 100, 100] })
  });
});