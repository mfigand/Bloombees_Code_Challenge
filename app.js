(function(){

  var app = angular.module("MyApp", []);

  app.controller('AppCtrl',function(){
    this.products = fighters;
    this.selectShip = function(){
      debugger
    };
  });

  var fighters = [
    {
      name:        'Defender',
      color:       'Black',
      hp:          3500,
      fuel:        30,
      date:        "",
      lat:         "33.3936955",
      lng:         "-104.5230833",
      description: 'The best fighter',
      img:         "resources/img/defender.jpg",
      img1:         "../img/defender.jpg",
      details:     "resources/partials/defender.html",
      tunning:     "defender1.html",
      comment:      ""
    },
    {
      name:        'First Order',
      color:       'grey',
      hp:          2500,
      fuel:        30,
      date:        "",
      lat:         "40.4169149",
      lng:         "-3.7035676",
      description: 'The modern fighter',
      img:         "resources/img/first_order.jpg",
      img1:         "../img/first_order.jpg",
      details:     "resources/partials/first_order.html",
      tunning:     "first_order1.html",
      comment:      ""
    },
    {
      name:        'OT',
      color:       "white",
      hp:          3000,
      fuel:        30,
      date:        "",
      lat:         "35.6808126",
      lng:         "139.7666296",
      description: 'The classic fighter',
      img:         "resources/img/ot.jpg",
      img1:         "../img/first_order.jpg",
      details:     "resources/partials/ot.html",
      tunning:     "ot1.html",
      comment:      ""
    }
  ];

})();
