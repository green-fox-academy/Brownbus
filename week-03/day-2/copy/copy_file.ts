'use strict';
export{ }
// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
let fs = require('fs')

function copy(file,fileToCopy){
  let fileContent = fs.readFileSync(file, 'utf-8');;
  fs.writeFileSync(fileToCopy, fileContent);
  console.log(true)
}
 
try{
  copy('helo.txt','hello2.txt');
}catch(error){
  console.log(error.message)
  console.log(false)
}