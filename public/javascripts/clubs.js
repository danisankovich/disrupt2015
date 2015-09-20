angular.module('clubApp')
.controller("clubCtrl", function($scope){
  $scope.test = "club going UP!!";

  $scope.clubs = [
    {
      name: "Booty SF",
      phoneNumber: "###-###-####",
      address: 'DNA Lounge 375 11th St San Francisco, CA 94103',
      url: 'http://bootiemashup.com/sf/',
    },
    {
      name: "Splash",
      phoneNumber: "408-292-2222",
      address: '65 Post St San Jose, CA 95113',
      url: 'splashsj.com',
    },
    {
      name: "Mighty",
      phoneNumber: "415-626-7001",
      address: '119 Utah St San Francisco, CA 94103',
      url: 'mighty119.com',
    },
    {
      name: "Mezzanine",
      phoneNumber: "415-625-8880",
      address: '444 Jessie St San Francisco, CA 94103',
      url: 'mezzaninesf.com',
    },
    {
      name: "A",
      phoneNumber: "###-###-####",
      address: 'DNA Lounge 375 11th St San Francisco, CA 94103',
      url: 'http://bootiemashup.com/sf/',
    },
    {
      name: "A",
      phoneNumber: "###-###-####",
      address: 'DNA Lounge 375 11th St San Francisco, CA 94103',
      url: 'http://bootiemashup.com/sf/',
    },
  ];
});
