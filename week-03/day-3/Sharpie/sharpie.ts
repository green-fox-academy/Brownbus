'use strict';
export { }

/* Create Sharpie class
We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects
which decreases inkAmount */

class Sharpie {
  colour: string;
  width: number;
  inkamount: number;
    constructor(c, w, ink = 100) {
      this.colour = c;
      this.width = w;
      this.inkamount = ink;
    }
  use(){
    this.inkamount -= 1;
  }
}