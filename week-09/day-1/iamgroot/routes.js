const express = require('express');
const app = express();


app.get('/groot', (req, res) => {
 if(req.query.msg !== undefined ){
   res.send(JSON.stringify({recieved: req.query.msg, translated:'I am Groot'}, null, 2))
 }else{
   res.send(JSON.stringify({error: 'I am groot'}, null, 2))
 }
});

module.exports = app;