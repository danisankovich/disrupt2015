var express = require('express');
var router = express.Router();
var request = require("request");
var mongoose = require("mongoose");
// var User = require("./models/userSchema.js");
/* GET home page. */
var User = require("../models/userSchema");
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var authData, username;
router.post('/login', function(req, result, next) {
  console.log(req);
  username = req.body.username;
  var password = req.body.password;
  console.log(username, password);
  request.get({
    'auth': {
      'user': username,
      'pass': password,
      'sendImmediately': true
    },
    url: "https://api.dz.zalan.do/auth/token",
    headers: {"Accept": "application/x.zalando.myfeed+json;version=2"}
  }, function(error, response, body) {
    if(error){
      console.error(error);
      res.send(400);
    }
    console.log(body);
    body = JSON.parse(body);
    // console.log(body);
    var access_token = body.access_token;
    var access_type = body.access_type;
    console.log(access_token, access_token);
    authData = access_type + " " + access_token;
    var user = new User({access_token: access_token, username: username}, function(err, doc){
      if(err){
        console.error();
      }
      console.log(doc);
    });
    request.get("http://localhost:8000/profile", function(err, res, prefs){
      if(err){
        console.log(err);
      }
      console.log("~~~~~~IN LOGIN~~~~~~", prefs);
      result.send(prefs);
    });
  });
});

router.get('/profile', function(req, res, next) {
  console.log("~~~~~~~ in profile ~~~~~~~~");
  request.get({
    url: "https://api.dz.zalan.do/auth/me",
    headers: {"Accept": "application/x.zalando.myfeed+json;version=2", "Authorization": authData}
  }, function(error, response, body){
    if(error){
      console.error(error);
    }
    // console.log(body);
    body = JSON.parse(body);
    console.log("profile_id: ", body.profile_id);
    request.get({
        url: "https://api.dz.zalan.do/feeds/"+ body.profile_id +"/items?limit=1",
        headers: {"Accept": "application/x.zalando.myfeed+json;version=2", "Authorization": authData}
      }, function(err, result, preferences){
      if(err){
        console.error(err);
      }
      res.send(preferences);
    });
  });
});

router.put("/updatePrefence", function(req, res, next){
  console.log(req.body);
});

// "type":"brand" || "article", key: "some string";

module.exports = router;
