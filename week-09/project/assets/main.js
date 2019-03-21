'use strict';
let score = document.getElementById('score')
let counter = 0;
function questioner(data) {
  let question = document.querySelector('.question');
  question.innerHTML = data[0].question;
  let ans1 = document.getElementsByClassName('answer')[0]
  ans1.innerHTML = data[0].answer_one;
  ans1.onclick = () => {
    if (ans1.innerHTML === data[0].correct_answer) {
      counter+=1
      score.innerHTML= `Score: ${counter}`
      ans1.setAttribute('style', 'background: green')
      setTimeout(() => {
        fetcher()
        ans1.setAttribute('style', 'background: white')
        ans1.addEventListener('mouseenter',()=>{
          ans1.setAttribute('style', 'background: transparent')
        });
        ans1.addEventListener('mouseleave', ()=>{
          ans1.setAttribute('style', 'background: white')
        });
      }, 2000);
    } else {
      ans1.setAttribute('style', 'background: red')
      ans1.addEventListener('mouseleave', ()=>{
        ans1.setAttribute('style', 'background: white')
      });
    }
  }
    let ans2 = document.getElementsByClassName('answer')[1]
    ans2.innerHTML = data[0].answer_two;

    ans2.onclick = () => {
      if (ans2.innerHTML === data[0].correct_answer) {
        counter+=1
        score.innerHTML= `Score: ${counter}`
        ans2.setAttribute('style', 'background: green')
        setTimeout(() => {
          fetcher()
          ans2.setAttribute('style', 'background: white')
          ans2.addEventListener('mouseenter',()=>{
            ans2.setAttribute('style', 'background: transparent')
          });
          ans2.addEventListener('mouseleave', ()=>{
            ans2.setAttribute('style', 'background: white')
          });
        }, 2000);
      } else {
        ans2.setAttribute('style', 'background: red')
        ans2.addEventListener('mouseleave', ()=>{
          ans2.setAttribute('style', 'background: white')
        });
      }
    }

      let ans3 = document.getElementsByClassName('answer')[2]
      ans3.innerHTML = data[0].answer_three;

      ans3.onclick = () => {
        if (ans3.innerHTML === data[0].correct_answer) {
          counter+=1
          score.innerHTML= `Score: ${counter}`
          ans3.setAttribute('style', 'background: green')
          setTimeout(() => {
            ans3.setAttribute('style', 'background: white')
            fetcher()
            ans3.addEventListener('mouseenter',()=>{
              ans3.setAttribute('style', 'background: transparent')
            });
            ans3.addEventListener('mouseleave', ()=>{
              ans3.setAttribute('style', 'background: white')
            });
          }, 2000);
        } else {
          ans3.setAttribute('style', 'background: red')
          ans3.addEventListener('mouseleave', ()=>{
            ans3.setAttribute('style', 'background: white')
          });
        }
      };
    }
function fetcher(){
fetch('/api/game')
    .then(data => data.json())
    .then(questioner)
}
    fetcher()