'use strict';


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
    let archer = {
      name: 'archer',
      type: 'distanceType',
      defAgainstCalvary: 5,
      defAgainstInfantry: 7,
      defAgainstSpy: 0,
      defAgainstMage: 2,
      defAgainstSiegeWeapons: 1,
      attackPower: 2
    }
    
    let lancer = {
      name: 'lancer',
      type: 'Infantry',
      defAgainstCalvary: 4,
      defAgainstInfantry: 5,
      defAgainstSpy: 0,
      defAgainstMage: 1,
      defAgainstSiegeWeapons: 3,
      attackPower: 1
    }
    
    let swordsman = {
      name: 'swordsman',
      type: 'Infantry',
      defAgainstCalvary: 1,
      defAgainstInfantry: 7,
      defAgainstSpy: 0,
      defAgainstMage: 1,
      defAgainstSiegeWeapons: 3,
      attackPower: 2
    }
    
    let spy = {
      name: 'spy',
      type: 'Spy',
      defAgainstCalvary: 0,
      defAgainstInfantry: 1,
      defAgainstSpy: 2,
      defAgainstMage: 0,
      defAgainstSiegeWeapons: 2,
      attackPower: 0
    }
    
    let calvary = {
      name: 'calvary',
      type: 'Calvary',
      defAgainstCalvary: 3,
      defAgainstInfantry: 1,
      defAgainstSpy: 0,
      defAgainstMage: 1,
      defAgainstSiegeWeapons: 1,
      attackPower: 3
    }
    
    let ram = {
      name: 'ram',
      type: 'SiegeWeapon',
      defAgainstCalvary: 1,
      defAgainstInfantry: 0,
      defAgainstSpy: 0,
      defAgainstMage: 0,
      defAgainstSiegeWeapons: 0,
      attackPower: 2
    }
    
    let knight = {
      name: 'knight',
      type: 'Calvary',
      defAgainstCalvary: 3,
      defAgainstInfantry: 4,
      defAgainstSpy: 0,
      defAgainstMage: 4,
      defAgainstSiegeWeapons: 4,
      attackPower: 3
    }
    
    let mercenary = {
      name: 'mercenary',
      type: 'Infantry',
      defAgainstCalvary: 2,
      defAgainstInfantry: 2,
      defAgainstSpy: 1,
      defAgainstMage: 2,
      defAgainstSiegeWeapons: 2,
      attackPower: 2
    }
    
    let mage = {
      name: 'mage',
      type: 'Mage',
      defAgainstCalvary: 3,
      defAgainstInfantry: 3,
      defAgainstSpy: 0,
      defAgainstMage: 1,
      defAgainstSiegeWeapons: 4,
      attackPower: 3
    }
    
    let catapult = {
      name: 'catapult',
      type: 'SiegeWeapon',
      defAgainstCalvary: 4,
      defAgainstInfantry: 4,
      defAgainstSpy: 0,
      defAgainstMage: 2,
      defAgainstSiegeWeapons: 5,
      attackPower: 4
    }
    
    let allTroops = [archer, lancer, swordsman, spy, calvary, ram, knight, mercenary, mage, catapult]
    let fullDef = {
      defAgainstCalvary: 0,
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
  fullPower() {
  }
}

class Village {
  constructor(name, pos, points, troops, def, atk) {
    this.name = name;
    this.defense = pos;
    this.points = points;
    this.defense = def;
    this.power = atk;
    this.troops = troops;
  }
  defend(power) {
    this.defense -= power / 100 * 50
  }
  attack(target) {
    target.defend(this.power)
  }
}

let someTroops = new Troops(1)

console.log(someTroops.fullDefense())
