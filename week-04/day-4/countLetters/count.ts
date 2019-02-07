'use strict';

export function countLetters(string: string) {
  let dictionary = [];
  let final = []
  let oobject = {}
  let fileContent = string.split('');
  let ofTimes = 0;
  let counter: number;
  let character: string = '';
  for (let i: number = 0; i < fileContent.length; i++) {
    for (let j: number = i; j < fileContent.length; j++) {
      if (fileContent[i] == fileContent[j])
        counter++;
      if (ofTimes < counter || ofTimes >= counter) {
        ofTimes = counter;
        character = fileContent[i];
      }
    }
    counter = 0;
    if(dictionary.indexOf(character) == -1){
      dictionary.push(character)
      final.push(`The ${character}, character appears ${ofTimes} times`)
      oobject[character] = ofTimes
    }else{continue;}
  }
  return oobject
}

