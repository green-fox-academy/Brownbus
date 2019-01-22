
'use strict';
export{}
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!
let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';



function reverse(str: string){
let a: any
 
let newArray = [];
for(let i: number = 0; i<str.length; i++){
newArray.push(str[i])
}
a = newArray.reverse()
a = newArray.toString()
a = a.replace(/[,]/g , '')
console.log(a)
return a

}


reverse(reversed)


/* console.log(reverse(reversed));*/
export = reverse