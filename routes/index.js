var express = require('express');
var router = express.Router();
var request = require("request");
var http = require("http");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var authData;
router.post('/login', function(req, res, next) {
  console.log(req);
  var username = req.body.username;
  var password = req.body.password;
  console.log(username, password);
  var options = {
    'auth': {
      'user': username,
      'pass': password,
      'sendImmediately': true
    },
    url: "https://api.dz.zalan.do/auth/token",
    headers: {"Accept": "application/x.zalando.myfeed+json;version=2"}
  };
  function callback(error, response, body) {
    if(error){
      console.error(error);
      res.send(400);
    }
    console.log(body);
    body = JSON.parse(body);
    console.log(body);
    var access_token = body.access_token;
    var access_type = body.access_type;
    console.log(access_token, access_token);
    authData = access_type + " " + access_token;
    // res.redirect(200, "/profile");
    http.get("http://localhost:8000/profile", function(err, res, body){
      if(err){
        console.log(err);
      }
      console.log(body);
    });
    res.send(200);
  }
  request.get(options, callback);
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
    console.log(body);
  });
});
// curl -X GET --header "Accept: application/x.zalando.myfeed+json;version=2" --header "Authorization: User 846yeerf-d4cq-4903-9hc8-f0f034fed1bb" "https://api.dz.zalan.do/customer-profiles/1226542314"

module.exports = router;
