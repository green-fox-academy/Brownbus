import { Thing } from "./things";
import { Fleet } from "./fleet";
//'[x]'
//'[ ]'
let fleet = new Fleet();

let undone = new Fleet();

let milk = new Thing('milk')
let rTO = new Thing('Remove the Obstacles')
let stand = new Thing('Stand Up')
let Eat = new Thing('Eat Lunch')

let arr: Thing[] =[milk, rTO, stand, Eat]

for(let i: number = 0; i < arr.length; i++){
  fleet.add(arr[i])
  }


fleet.print()
arr[2].complete()






/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */
