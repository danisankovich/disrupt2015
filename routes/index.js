var express = require('express');
var router = express.Router();
var request = require("request");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

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
    var access_token = body.access_token;
    var access_type = body.access_type;
    res.send(200);
  }

  request.get(options, callback);
});

router.get('/search', function(res, req, next) {
  'https://api.zalando.com/articles';
});


module.exports = router;
