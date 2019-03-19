
    'use strict';

    let promise = new Promise(function (fulfill, reject) {
      // Your solution here
      setTimeout(()=>{
        fulfill('FULFILLED!');
      }, 300);
    });
    
    promise.then(function(value) {
      console.log(value);
    });
    

