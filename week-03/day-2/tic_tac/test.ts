



for(let i: number =0; i<3; i++)



if (arr[0][1] === arr[0][2] && arr[0][2] === arr[0][0]) {
  console.log('O');
} else if (arr[1][1] === arr[1][2] && arr[1][2] === arr[1][0]) {
  console.log('O')
} else if (arr[2][1] === arr[2][2] && arr[2][2] === arr[2][0]) {
  console.log('O')
} else if (arr[0][0] === arr[1][0] && arr[1][0] === arr[2][0]) {
  console.log('O'); 
} else if (arr[0][1] === arr[1][1] && arr[1][1] === arr[2][1]) {
  console.log('O')
} else if (arr[0][2] === arr[1][2] && arr[1][2] === arr[2][2]) {
  console.log('O')
}













else if (arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
  console.log('O')
} else if (arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
  console.log('O')
}