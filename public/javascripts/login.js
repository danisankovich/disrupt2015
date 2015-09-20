angular.module('clubApp')
.controller('loginCtrl', function($scope, $http, $state){
  $scope.test = "hi";
  $scope.login = function(u, p){
    console.log(u, p);
    var loginInfo = {username: u, password: p};
    $http.post("/login", loginInfo)
    .then(function(data){
      console.log(data);
      $state.go("where-to");
    })
    .catch(function(err){
      console.error(err);
    });
  };
});
