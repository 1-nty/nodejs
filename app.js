'use strict'
var express = require('express')
var app = express()
app.get('/',(req,res)=>{
  res.status(200).sendFile(__dirname+'/index.html');
});
var server = app.listen(process.env.PORT || '8080',function(){
  console.log('App listening on port %s',server.address().port);
  console.log('Press Ctrl+C to quit');
})
