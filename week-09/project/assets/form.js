'use strict';

let form = document.querySelector('form');
let button = form.querySelector('button');
let inputFields = form.getElementsByTagName('input')
console.log('hi')

form.addEventListener('click', (e)=>{
  e.preventDefault()
})

button.addEventListener('click', () => {
  let formData = JSON.stringify({
    "question": `"${inputFields[0].value}"`,
    "answer_one": `"${inputFields[1].value}"`,
    "answer_two": `"${inputFields[2].value}"`,
    "answer_three": `"${inputFields[3].value}"`,
    "correct_answer": `"${inputFields[4].value}"`
  });
  let validator = false;
  for(let i = 1; i < inputFields.length-1; i++){
    console.log('in the for',inputFields[i].value, inputFields[4].value)
    if(inputFields[i].value === inputFields[4].value){
      validator = true;
    }
  }
  if (validator === true) {
    fetch('/api/questions',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: formData
    })
    .then(msg => msg.json())
    .then(feedback => alert(feedback.msg))
  }else{
    console.log('something went wrong')
  }
});

