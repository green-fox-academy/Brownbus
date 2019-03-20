
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

promise.then(string => string.json(), errorMsg => console.log(errorMsg.message))