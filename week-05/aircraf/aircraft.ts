'use strict';
export { }

class Aircraft {
  type: string = ''
  ammo: number;
  damage: number;
  constructor(type: string, ammo = 0) {
    this.type = type;
    this.ammo = ammo;
  }
  fight(): number {
    this.ammo -= this.ammo;
    return this.ammo * this.damage;
  }

  refill(number: number) {
    if (this.type === 'F16') {
      if (number + this.ammo < 8) {
        this.ammo += number;
        number -= number;
      } else {
        number -= 8 - this.ammo;
        this.ammo = 8;
      }
    } else if (this.type === 'F32') {
      if (number + this.ammo < 12) {
        this.ammo += number;
        number -= number;
      } else {
        number -= 12 - this.ammo;
        this.ammo = 12;
      }
    } else { console.log('Unknown Aircraft') }
    return number;
  }
  getType() {
    return this.type;
  }

  getStatus() {
    console.log(`Type  ${this.type},   Ammo: ${this.ammo},  Base Damage: ${this.damage},  All Damage: ${this.damage * this.ammo}`)
  }
  isPriority() {
    if (this.type === 'F32') {
      return true;
    } else if (this.type === 'F16') {
      return false;
    } else {console.log('Unknown Aircraft' )}
  }
}

class F16 extends Aircraft {
  type: string = 'F16'
  ammo: number; //max 8
  damage: number = 30;
  constructor(type = 'F16', ammo = 0) {
    super(type, ammo)
  }

}

class F32 extends Aircraft {
  type: string = 'F32'
  ammo: number; //max 12;
  damage: number = 50;
  constructor(type = 'F32', ammo = 0) {
    super(type, ammo)
  }

}

class Carrier {
  storage: Aircraft[] = []
  ammoStroage: number;
  health: number;

  constructor(ammoStorage, health) {
    this.ammoStroage = ammoStorage;
    this.health = health;
  }

  add(aircraft: Aircraft) {
    this.storage.push(aircraft)
  }

  fill() {
    if (this.ammoStroage === 0) {
      console.log('There is no ammmo left. This Carrier should surrender')
    } else {
      this.storage.forEach((aircraft) => {
        if (aircraft.isPriority() === true) {
          if (this.ammoStroage > 12) {
            aircraft.refill(12)
            this.ammoStroage -= 12
          } else {
            aircraft.refill(this.ammoStroage)
            this.ammoStroage -= this.ammoStroage;
          }
        }
        if (aircraft.isPriority() === false) {
          if (this.ammoStroage > 8) {
            aircraft.refill(8)
            this.ammoStroage -= 8
          } else {
            aircraft.refill(this.ammoStroage)
            this.ammoStroage -= this.ammoStroage;
          }
        }
      })
    }
  }

  fight(otherCarrier: Carrier) {
    let totalDamage: number = 0;

    for (let i: number = 0; i < this.storage.length; i++) {
      totalDamage += this.storage[i].ammo * this.storage[i].damage
      this.storage[i].fight()
    }
    otherCarrier.health -= totalDamage;
    if (otherCarrier.health <= 0) { otherCarrier.health = 0 };
  }

  getStatus() {
    let totalDamage: number = 0;
    for (let i: number = 0; i < this.storage.length; i++) {
      totalDamage += this.storage[i].ammo * this.storage[i].damage
    }


    if(this.health > 0){
    console.log(`HP: ${this.health}, Aircraft count: ${this.storage.length}, Ammo Storage: ${this.ammoStroage}, Total Damage: ${totalDamage}.`)
    console.log(`Aircrafts:`)
    this.storage.forEach((aircraft) => { aircraft.getStatus() })
    }else{console.log('It\'s dead Jim')}
  }
}


const carrier1 = new Carrier(200, 200)
const carrier2 = new Carrier(200, 200)
const craftF16 = new F16
const craftF32 = new F32
carrier1.add(craftF16)
carrier1.add(craftF32)



carrier1.fill()
carrier1.fight(carrier2)
carrier1.fill()
carrier1.getStatus()