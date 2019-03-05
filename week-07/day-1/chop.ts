
let arr = [1, 2, 3, 4, 5, 6, 7, 8];


function chopTest(int: number, intArray: number[], testInt: number): number {
  if (intArray.indexOf(int) === testInt) {
    console.log('green')
  } else {
    console.log('red')
  }
  return NaN;
}

function chop(int, intArray) {
  return intArray.indexOf(int)
}



//chopTest(2,arr,chop(1, arr))

function chopper(int, intArray) {
  if (intArray.indexOf(int) === -1) {
    console.log('not in the array')
    return 0;
  }
  else {
    let half = intArray.length / 2;
    if (intArray.indexOf(int) < half) {
      intArray = intArray.slice(0, half)
    } else {
      intArray = intArray.slice(half, intArray.length)
    }
    //console.log('end: ', intArray)
    if (half === 1) {
      console.log(intArray);
      return intArray;;
    }
    else {
      console.log(intArray);
      chopper(int, intArray)
      
    }
  }
 
}

console.log(chopper(7, arr));
