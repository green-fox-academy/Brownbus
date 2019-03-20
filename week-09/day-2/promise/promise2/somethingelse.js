/* 
'use strict';

let promise = new Promise(function (fulfill, reject) {
  let MyError = new Error('REJECTED!');
  setTimeout(() => {
    if(1===2){
      fulfill(console.log('anyád'))
    }
    reject(onReject(MyError))
  }, 300);
});

function onReject(myRrror) {
  return myRrror
}
promise.then(string => string.json(), errorMsg => console.log(errorMsg.message)) */


/*
    * This code is bad, but nonetheless common and has the nasty result of
    * calling the supplied callback more than once (possibly destroying the
    * earth?). It is conventional to return the first invocation of callback
    * but it’s easy to overlook!
    */


/*    'use strict';

   let promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED')
    reject(new Error('I DID NOT FIRE'))
   });
   
   function onRejected(error){
     console.log(error.message)
   }
   promise.then(console.log, onRejected) */

/*     'use strict';

    let promise = new Promise(function (fulfill, reject) {
     fulfill('PROMISE VALUE')
    }).then(console.log, null)
    console.log('MAIN PROGRAM') */

/* 'use strict';

let promise = new Promise(function (fulfill, reject) {
})
promise = Promise.resolve('I DID NOT FIRE')
promise = Promise.reject(new Error('This is an error'))
.then(null).catch(rejected)

function rejected(error) {
  console.log(error.message)
} */

  'use strict';

function first(msq){
  let promise = new Promise(function (fulfill, reject) {
    fulfill(msq)
   }).then(second).then(onFullfilled).then(console.log)
}

function second(msq){
  return new Promise(function (fulfill, reject) {
    fulfill(msq)
   })
}

function onFullfilled(promise){
  return promise
}

first('ésdiuofs') 

