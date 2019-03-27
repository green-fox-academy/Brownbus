

let building_object = {
  name: 'farm',
  level: 2,
  cost: [100, 100, 100, 100, 100]
};

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
        res.sendStatus(500)
      } else {
        conn.query(`SELECT storage_gold, storage_wheat, storage_wood, storage_stone, storage_iron FROM village WHERE village_name="${this.village}"`, (err, data) => {
          if (err) { console.log(err), res.sendStatus(500) } else {
            let validator = true
            for (let i = 0; i < Object.keys(data[0]).length; i++) {
              if (data[0][Object.keys(data[0])[i]] < building.cost[i] * building.level * 5) {
                validator = false;
              }
              if (validator === true) {
                let decreasal = building.cost[i] * building.level * 5;
                let resUpdateQuery = `UPDATE village SET
                storage_gold = storage_gold - ${decreasal}, 
                storage_wheat = storage_wheat - ${decreasal},
                storage_wood= storage_wood - ${decreasal},
                storage_stone = storage_stone - ${decreasal},
                storage_iron = storage_iron - ${decreasal}`
                conn.query(resUpdateQuery, (err) => { if (err) { console.log(err) }else{
                  setTimeout(() => {
                    conn.query(updateQuery, (err) => {
                      if (err) { console.log(err) }
                    });
                  }, building.level * 0.5 * 60);
                }});
              }else{
                res.send(JSON.stringify({msg:'You don\'t have enough materials try again later'}))
              }
            };
          };
        });
      };
    });
  ;}
};
