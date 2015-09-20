var express = require('express');
var router = express.Router();
var request = require("request");
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
    console.log(body);
    var access_token = body.access_token;
    var access_type = body.access_type;
    console.log(access_token, access_token);
    authData = access_type + " " + access_token;
    request.get("http://localhost:8000/profile", function(err, res, body){
      if(err){
        console.log(err);
      }
      console.log("~~~~~~IN LOGIN~~~~~~", body);
    });
    res.send(200);
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
    console.log(body);
    body = JSON.parse(body);
    // curl -X GET --header "Accept: application/x.zalando.myfeed+json;version=2" --header "Authorization: User 83cdd68a-24e9-4efa-928b-99a7b538be64" "https://api.dz.zalan.do/customer-profiles/83001065008/preferences"
    request.get("https://api.dz.zalan.do/customer-profiles/"+ body.profile_id +"/preferences", function(err, res, preferences){
      if(err){
        console.error(err);
      }
      console.log("here are your preferences:", preferences);
    });
  });
});
// curl -X GET --header "Accept: application/x.zalando.myfeed+json;version=2" --header "Authorization: User 846yeerf-d4cq-4903-9hc8-f0f034fed1bb" "https://api.dz.zalan.do/customer-profiles/1226542314"

module.exports = router;
