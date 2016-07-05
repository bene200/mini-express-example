var express = require('express');
//The body parser is important if we want to receive JSON data from the front end
var bodyParser = require('body-parser');
//The fs module is a default node library and contains functions for file system I/O
var fs = require('fs');

module.exports = function(){
  //initalize an express.js web application by calling express() method
  var app = express();

  //the front end are static files. we serve them to make them accessible
  app.use(express.static('public'));

  //initialize a JSON parser so we can receive JSON objects from the client
  var jsonParser = bodyParser.json()

  //now we define the method that accepts the uploaded data from the front end
  //it is received upon sending a post request to the URL as we define it
  //as we receive a user upload we will just name the this URL /uploads
  app.post('/uploads', jsonParser, function(req, res){
    if(!req.body){
      res.send('fail');
    }
    //the data sent via HTTP post can be found in req.body
    var uploadData = req.body.content;
    fs.writeFile('uploads/user_upload.txt', uploadData, function(err){
      if(err){
        console.log('There was an error writing the user upload to file.');
      }
      res.send('Thank you');
    });
  });
  
  //start the application on port 3000
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
}
