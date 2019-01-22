'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
let a = (url.replace(url.slice(-4), 'mods'));
let b = a.slice( 0 , 5 )
 a = a.slice( 5 )
url = b.concat( ':', a); 
console.log(url);
