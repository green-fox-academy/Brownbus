import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();
let arr = [];
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 6], [6, 7][7, 1][1, 5][5,2][] ... */
let dominoSnake = [];
 for(let i: number = 0; i< dominoes.length; i++){
dominoSnake.push(dominoes[i].values) 
dominoSnake.sort()
} 
for(let k: number = 0;  k < dominoes.length; k++){
  if(arr.indexOf(dominoSnake[k]) === -1){
  arr.push(dominoSnake[k])
  }else{ continue}
  for(let i: number = 0; i< dominoes.length; i++){
  if(dominoSnake[k][1]===dominoSnake[i][0]){
    
    arr.push(dominoSnake[i])
}
}
}

 console.log(arr)
