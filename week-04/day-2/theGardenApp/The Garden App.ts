class Garden {
  gardenContents: Flowers[] = []
  needsWat: string;
  type: string;
  waterAmount: number = 0;
  minAmount: number;
  colour: string;
  chooser: boolean;
  constructor() {
  }
  addTree(tree: Trees) {
    this.gardenContents.push(tree)
  }
  addFlower(flower: Trees) {
    this.gardenContents.push(flower)
  }
  needsWater() {
    console.log(`The  ${this.colour} ${this.type} ${this.waterAmount < this.minAmount ? ' needs water' : 'doesn\'t need water'} `)
  }
  water(n) {
    console.log(`Watering with ${n}`)
    for (let i: number = 0; i < this.gardenContents.length; i++) {
      if (this.gardenContents[i].chooser === false) {
        this.waterAmount += (n / this.gardenContents.length) * 0.40;
      } else {
        this.waterAmount += (n / this.gardenContents.length) * 0.75;
      }
    console.log(`The  ${this.gardenContents[i].colour} ${this.gardenContents[i].type} ${this.gardenContents[i].waterAmount < this.gardenContents[i].minAmount ? ' needs water' : 'doesn\'t need water'} `)
    }
  }
}



class Flowers extends Garden {
  type: string = 'flower'
  needsWat: string
  waterAmount: number;
  colour: string;
  chooser: boolean = true;
  minAmount: number = 5;
  constructor(c, ch = false) {
    super()
    this.colour = c;
    this.chooser = ch
   // this.waterAmount = waterAm;
  }
}

class Trees extends Flowers {
  type: string = 'tree'
  minAmount: number = 10
  needsWat: string;
  waterAmount: number;
  colour: string
  chooser: boolean;
  constructor(c, ch = false) {
    super(c)
    this.colour = c
    this.chooser = ch;
    //this.waterAmount = waterAm;
  }

}
let garde = new Garden
let t1 = new Trees('purple')
let t2 = new Trees('orange')
let f1 = new Flowers('yellow')
let f2 = new Flowers('blue')

garde.addFlower(f1)
garde.addFlower(f2)
garde.addTree(t1)
garde.addTree(t2)

garde.water(0)
garde.water(40)
garde.water(70)
 

console.log(garde.gardenContents[1].waterAmount)