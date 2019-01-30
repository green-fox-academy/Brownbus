let arr = ['a','b','c','d','e','f','g','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u',',v','x','y','z']
let newWord: string = '';

let words:string = 'cfbvujgvm jt cfuufs uibo vhmz'

for(let i: number = 0; i< words.length; i++){
    newWord += arr[arr.indexOf(words[i])+23]

}
console.log(newWord)