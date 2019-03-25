'use strict';

function random(min, max){
return Math.floor((Math.random() * (max-min)) + min)
}

let archer = {
  name: 'archer',
  type: 'distanceType',
  defAgainstCalvary: 5,
  defAgainstDistance: 1,
  defAgainstInfantry: 7,
  defAgainstSpy: 0,
  defAgainstMage: 2,
  defAgainstSiegeWeapons: 1,
  attackPower: 2,
  level: 1,
  trainingTime: 4
}

let lancer = {
  name: 'lancer',
  type: 'Infantry',
  defAgainstCalvary: 4,
  defAgainstDistance: 1,
  defAgainstInfantry: 5,
  defAgainstSpy: 0,
  defAgainstMage: 1,
  defAgainstSiegeWeapons: 3,
  attackPower: 1,
  level: 1,
  trainingTime: 3
}

let swordsman = {
  name: 'swordsman',
  type: 'Infantry',
  defAgainstCalvary: 1,
  defAgainstDistance: 1,
  defAgainstInfantry: 7,
  defAgainstSpy: 0,
  defAgainstMage: 1,
  defAgainstSiegeWeapons: 3,
  attackPower: 2,
  level: 1,
  trainingTime: 2
}

let spy = {
  name: 'spy',
  type: 'Spy',
  defAgainstCalvary: 0,
  defAgainstDistance: 1,
  defAgainstInfantry: 1,
  defAgainstSpy: 2,
  defAgainstMage: 0,
  defAgainstSiegeWeapons: 2,
  attackPower: 0,
  level: 1,
  trainingTime: 6
}

let calvary = {
  name: 'calvary',
  type: 'Calvary',
  defAgainstCalvary: 3,
  defAgainstDistance: 1,
  defAgainstInfantry: 1,
  defAgainstSpy: 0,
  defAgainstMage: 1,
  defAgainstSiegeWeapons: 1,
  attackPower: 3,
  level: 1,
  trainingTime: 8
}

let ram = {
  name: 'ram',
  type: 'SiegeWeapon',
  defAgainstCalvary: 1,
  defAgainstDistance: 1,
  defAgainstInfantry: 0,
  defAgainstSpy: 0,
  defAgainstMage: 0,
  defAgainstSiegeWeapons: 0,
  attackPower: 2,
  level: 1,
  trainingTime: 22
}

let knight = {
  name: 'knight',
  type: 'Calvary',
  defAgainstCalvary: 3,
  defAgainstDistance: 5,
  defAgainstInfantry: 4,
  defAgainstSpy: 0,
  defAgainstMage: 4,
  defAgainstSiegeWeapons: 4,
  attackPower: 3,
  level: 1,
  trainingTime: 11
}

let mercenary = {
  name: 'mercenary',
  type: 'Infantry',
  defAgainstCalvary: 2,
  defAgainstDistance: 1,
  defAgainstInfantry: 2,
  defAgainstSpy: 1,
  defAgainstMage: 2,
  defAgainstSiegeWeapons: 2,
  attackPower: 2,
  level: 1,
  trainingTime: 2
}

let mage = {
  name: 'mage',
  type: 'Mage',
  defAgainstCalvary: 3,
  defAgainstDistance: 1,
  defAgainstInfantry: 3,
  defAgainstSpy: 0,
  defAgainstMage: 1,
  defAgainstSiegeWeapons: 4,
  attackPower: 3,
  level: 1,
  trainingTime: 7
}

let catapult = {
  name: 'catapult',
  type: 'SiegeWeapon',
  defAgainstCalvary: 4,
  defAgainstDistance: 1,
  defAgainstInfantry: 4,
  defAgainstSpy: 0,
  defAgainstMage: 2,
  defAgainstSiegeWeapons: 5,
  attackPower: 4,
  level: 1,
  trainingTime: 30
}


class Troops {
  constructor(
    archerNum = 0,
    lancerNum = 0,
    swordsmanNum = 0,
    spyNum = 0,
    calvaryNum = 0,
    ramNum = 0,
    knightNum = 0,
    mercenaryNum = 0,
    mageNum = 0,
    catapultNum = 0,
  ) {
    this.archerNum = archerNum;
    this.lancerNum = lancerNum;
    this.swordsmanNum = swordsmanNum;
    this.spyNum = spyNum;
    this.calvaryNum = calvaryNum;
    this.ramNum = ramNum;
    this.knightNum = knightNum;
    this.mercenaryNum = mercenaryNum;
    this.mageNum = mageNum;
    this.catapultNum = catapultNum;
  }
  fullDefense() {

    let allTroops = [archer, lancer, swordsman, spy, calvary, ram, knight, mercenary, mage, catapult]
    let fullDef = {
      defAgainstCalvary: 0,
      defAgainstDistance: 0,
      defAgainstInfantry: 0,
      defAgainstSpy: 0,
      defAgainstMage: 0,
      defAgainstSiegeWeapons: 0,
    }
    for (let j = 0; j < Object.keys(fullDef).length; j++) {
      for (let i = 0; i < 10; i++) {
        //console.log(`${fullDef[Object.keys(fullDef)[j]]} += ${allTroops[i]}[${Object.keys(fullDef)[j]}] * ${this[Object.keys(this)[i]]}`)
        fullDef[Object.keys(fullDef)[j]] += allTroops[i][Object.keys(fullDef)[j]] * this[Object.keys(this)[i]]
      };
    };
    return fullDef
  };


  fullAttackPower() {
    let fullPower = {
      calvaryAtk: 0,
      distanceAtk: 0,
      infantryAtk: 0,
      spyAtk: 0,
      mageAtk: 0,
      siegeWeaponAtk: 0
    }
    let allTroops = [archer, lancer, swordsman, spy, calvary, ram, knight, mercenary, mage, catapult]
    for (let j = 0; j < allTroops.length; j++) {

      let typeOfSoldier = allTroops[j][Object.keys(allTroops[j])[1]];
      let attackValueOfSoldier = allTroops[j][Object.keys(allTroops[j])[8]];

      if (typeOfSoldier == 'Calvary') {
        fullPower.calvaryAtk += attackValueOfSoldier * this[Object.keys(this)[j]]
      } else if (typeOfSoldier == 'distanceType') {
        fullPower.distanceAtk += attackValueOfSoldier * this[Object.keys(this)[j]]
      } else if (typeOfSoldier == 'Infantry') {
        fullPower.infantryAtk += attackValueOfSoldier * this[Object.keys(this)[j]]
      } else if (typeOfSoldier == 'Spy') {
        fullPower.spyAtk += attackValueOfSoldier * this[Object.keys(this)[j]]
      } else if (typeOfSoldier == 'SiegeWeapon') {
        fullPower.siegeWeaponAtk += attackValueOfSoldier * this[Object.keys(this)[j]]
      } else if (typeOfSoldier == 'Mage') {
        fullPower.mageAtk += attackValueOfSoldier * this[Object.keys(this)[j]]
      };
    };
    return fullPower;
  };
};



class Village {
  constructor(name, pos, points, troops, bonuses = 1) {
    this.name = name;
    this.position = pos;
    this.points = points;
    this.troops = troops;
    this.bonuses = bonuses;
  }
  defend(enemyTroops) {
    let allTroops = [archer, lancer, swordsman, spy, calvary, ram, knight, mercenary, mage, catapult]
    let types = [['Calvary', ['calvaryNum', 'knightNum']],
    ['distanceType', ['archerNum']],
    ['Infantry', ['swordsmanNum', 'lancerNum']],
    ['Spy', ['spyNum']],
    ['Mage', ['mageNum']],
    ['siegeWeapon', ['catapultNum', 'ramNum']]]

    let myForce = this.troops.fullDefense()
    for (let i = 0; i < Object.keys(myForce).length; i++) {
      if (this.troops.fullDefense()[Object.keys(this.troops.fullDefense())[i]] - enemyTroops.fullAttackPower()[Object.keys(enemyTroops.fullAttackPower())[i]] > 0) {
        let initialDefPower = this.troops.fullDefense()[Object.keys(this.troops.fullDefense())[i]];
        let powerDiff = this.troops.fullDefense()[Object.keys(this.troops.fullDefense())[i]] - enemyTroops.fullAttackPower()[Object.keys(enemyTroops.fullAttackPower())[i]];
        let defDeathRatio = (initialDefPower-powerDiff)/initialDefPower;
        
        for (let troop = 0; troop < types[i][1].length; troop++) {
          let survivalChance = random(1,100)
          enemyTroops[types[i][1][troop]] = 0;
          if(survivalChance >= 50){
            this.troops[types[i][1][troop]] -= Math.ceil(this.troops[types[i][1][troop]] * defDeathRatio)
          }else{
            this.troops[types[i][1][troop]] -= Math.floor(this.troops[types[i][1][troop]] * defDeathRatio)
          }
        }
      };
    };
  };

  attack(target) {
    target.defend(this.troops)
  }

  stats() {
    return {
      name: this.name,
      points: this.points,
      position: this.position,
      bonuses: this.bonuses,
      attack_power: this.troops.fullAttackPower(),
      defense: this.troops.fullDefense(),
    }
  };

  train(villageArmyName, troop, quantity) {
    let trainingInterval = Math.floor(troop[trainingTime] - (troop[level] * 0.13)) * 60
    for (let i = 0; i < quantity; i++) {
      setTimeout(() => {
        villageArmyName[troop] += 1
      }, trainingInterval * i);
    }
  }
}

let budapestArmy = new Troops(1, 7, 7, 4, 4, 6, 5, 2, 3, 1)
let budapest = new Village('Budapest', [303, 320], 2156, budapestArmy)


let otherArmy = new Troops(1, 7, 7, 4, 4, 6, 5, 2, 3, 1)
let other = new Village('Other', [303, 320], 2156, otherArmy)


other.attack(budapest)


