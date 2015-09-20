angular.module('clubApp')
.controller("clubCtrl", function($scope, $http){
  $scope.test = "club going UP!!";

  // $http.get("")

  $scope.clubs = [
    {
      name: "Bootie SF",
      overview: "VOTED 'BEST DANCE CLUB'/'BEST CLUB THEME NIGHT'/'BEST EVENT PRODUCERS' FOR EIGHT YEARS IN A ROW!",
      phoneNumber: "###-###-####",
      address: 'DNA Lounge 375 11th St San Francisco, CA 94103',
      url: 'http://bootiemashup.com/sf/',
      image: 'http://cdn.partyearth.com/photos/3ff0954873efa81a4cbc8c07edb9c432/bootie-sf-nye-concert_s345x230.jpg?1412105106'
    },
    {
      name: "Splash",
      overview: "With 2 levels of dancing, rooftop smoking patio, over 20 video screens, Splash is San Jose’s new destination for Gay Nightlife.",
      phoneNumber: "408-292-2222",
      address: '65 Post St San Jose, CA 95113',
      url: 'http://splashsj.com',
      image: 'http://www.splashsj.com/assets/SplashSlide2.jpg'
    },
    {
      name: "Mighty",
      overview: "Mighty is a virtual warehouse of party action. In its short life, it’s already become one of the hottest places in the city to hear top-notch international DJs.",
      phoneNumber: "415-626-7001",
      address: '119 Utah St San Francisco, CA 94103',
      url: 'http://mighty119.com',
      image: 'http://cdn.partyearth.com/photos/de514c9834e05a92cbdf0d6e787442aa/mighty-nightclub_s345x230.jpg?1375046361'
    },
    {
      name: "Mezzanine",
      overview: "Mezzanine is San Francisco’s premiere live music venue, nightclub, and event space, showcasing DJs and live performances.",
      phoneNumber: "415-625-8880",
      address: '444 Jessie St San Francisco, CA 94103',
      url: 'mezzaninesf.com',
      image: 'https://s.evbuc.com/https_proxy?url=http%3A%2F%2Fbootiemashup.com%2Femailpix%2Fbootie_mezzanine.jpg&sig=ADR2i784BwdOSeWjVgW6fkIalmK3tPRZwg'
    },
    {
      name: "Temple",
      overview: "A venue for artists, by artists, #TheNewTemple offers awe-inspiring, fully immersive state of the art lighting and visuals, a thumping custom sound system, multiple rooms of music, and with world-class talent.",
      phoneNumber: "415-312-3668",
      address: '540 Howard St San Francisco, CA 94105',
      url: 'templesf.com',
      image: 'http://i40.photobucket.com/albums/e239/OurNightLifeDotCom/revolvr-temple-youredm_zpsd1068284.jpg'
    },
    {
      name: "Ruby Skye",
      overview: "This impeccably appointed space is perfect setting for launch parties, wedding and receptions, benefits and fashion shows. The possibilities are endless for entertaining in this unique, and upscale entertainment venue.",
      phoneNumber: "628-400-4688",
      address: '420 Mason St San Francisco, CA 94102',
      url: 'rubyskye.com',
      image: 'http://www.rubyskye.com/_media/ruby_skye_photo1.jpg'
    },
  ];

  $scope.addToFavoriteClubs = function(club){
    console.log(club);
    $http.post("/addToFavoriteClubs", {club: club})
    .then(function(data){
      console.log(data);
    })
    .catch(function(err){
      console.error(err);
    });
  };
});
