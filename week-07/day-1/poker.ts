const cards: any[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const type: string[] = ['C', 'D', 'H', 'S'];



function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let hand1: object = {
  key1: [cards[random(0, 12)], type[random(0, 3)]],
  key2: [cards[random(0, 12)], type[random(0, 3)]],
  key3: [cards[random(0, 12)], type[random(0, 3)]],
  key4: [cards[random(0, 12)], type[random(0, 3)]],
  key5: [cards[random(0, 12)], type[random(0, 3)]],
};

let hand2: object = {
  1: [cards[random(0, 12)], type[random(0, 3)]],
  2: [cards[random(0, 12)], type[random(0, 3)]],
  3: [cards[random(0, 12)], type[random(0, 3)]],
  4: [cards[random(0, 12)], type[random(0, 3)]],
  5: [cards[random(0, 12)], type[random(0, 3)]],
};

//console.log(hand1[0])

/* console.log(hand1)
console.log('=====================')
console.log(hand2) */



function atHand(HAND) {
  let comparison = [];
  console.log(HAND)
  for (let j: number = 0; j < 5; j++) {
    comparison.push(HAND[j + 1][0])
  }
 /////////////////

let characters = [];
  let counter: number = 0;
  let ofTimes: number = 0;
  let character: string = '';
  let ranking = [];
  let pair = 0;
  
  for (let i: number = 0; i < comparison.length; i++) {
    for (let j: number = i; j < comparison.length; j++) {
      if (comparison[i] == comparison[j])
        counter++;
     /*  if(counter == 2){
        ranking.push([comparison[i],`${ofTimes} Times`])
      } */
      if(counter > )
      if (ofTimes < counter) {
        ofTimes = counter;
        if(ofTimes > 1){
          ranking.push([comparison[i],`${ofTimes} Times`])
        }
        
        character = comparison[i];
      }
    }
    ranking.sort()
    counter = 0;
  }
  console.log(ranking)
  console.log(character, ofTimes, 'times');

  ;
}
 //////////////////////


 
 
 
 
 
 
 
 
 
 
 
  /* for (let i: number = 0; i < 5; i++) {
    if (HAND[1][0] == comparison[i] && i != 0) {
      console.log(HAND[1][0], ' AND ', comparison[i])
      delete comparison[i]
      console.log(comparison)
      
    } else if (HAND[2][0] == comparison[i] && i != 1) {
      console.log(HAND[2][0], ' AND ', comparison[i])
      delete comparison[i]
      console.log(comparison)
    } else if (HAND[3][0] == comparison[i] && i != 2) {
      console.log(HAND[3][0], ' AND ', comparison[i])
      delete comparison[i]
      console.log(comparison)
    } else if (HAND[4][0] == comparison[i] && i != 3) {
      console.log(HAND[4][0], ' AND ', comparison[i])
      delete comparison[i]
      console.log(comparison)
    } else if (HAND[5][0] == comparison[i] && i != 4) {
      console.log(HAND[5][0], ' AND ', comparison[i])
      delete comparison[i]
      console.log(comparison)
    }
  }
} */

atHand(hand2)