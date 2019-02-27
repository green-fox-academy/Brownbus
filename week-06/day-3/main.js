//1
let king = document.getElementById('b325');
console.log(king);
console.log(king.innerText)
//2
let businessLamp = [document.getElementsByClassName('asteroid big')];
console.log(businessLamp[0][0]);
console.log(businessLamp[0][1]);
console.log(businessLamp[0][0].innerText);
console.log(businessLamp[0][1].innerText)
//3
let conceitedKing = [king, document.getElementsByClassName("asteroid b326")]
alert(conceitedKing[0].innerText)
alert(conceitedKing[1][0].innerText);
//4
let noBusiness = [conceitedKing[0], conceitedKing[1][0], businessLamp[0][1]]
for(let i = 0; i <noBusiness.length; i++){
  console.log(noBusiness[i].innerText)
}