'use strict';
export{}


/* Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!" */

class PostIt  {
backgroundColour: string;
text: string;
textColour: string;
  constructor(BC, Txt, TxtC){
    this.backgroundColour = BC;
    this.text = Txt;
    this.textColour = TxtC;
  }
}
const postIt1 = new PostIt('orange','Idea1','blue');
const postIt2 = new PostIt('pink','Awesome','black');
const postIt3 = new PostIt('yellow','Superb!','green');