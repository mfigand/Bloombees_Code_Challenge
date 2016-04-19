$(document).on("ready",function(){

  if($('#location').length){
    $(".js-view-location").on("click", location);
    $(".js-select-def").on("click", selectDefender);
    $(".js-select-fo").on("click", selectFirstOrder);
    $(".js-select-ot").on("click", selectOt);

    var map;

    function location(){
      var position = {
        lat: parseFloat($('.js-def-lat')[0].innerText),
        lng: parseFloat($('.js-def-lng')[0].innerText)
      };

      createMap(position);
    };

    function createMap(position){
      var mapOptions = {
        center: position,
        zoom: 15
      };
      map = new google.maps.Map($('#locationMap')[0], mapOptions);
      createMarker(position);
    };

    function createMarker(position) {
      var marker = new google.maps.Marker({
       position: position,
       map: map,
         title:$('.js-def-name')[0].innerText
       });
       marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    };

    var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading"></h4>'+
          '<div id="bodyContent">'+
          '<p><b>'+ $('.js-def-name')[0].innerText +'</b>'+
          '<p>Ready to go</p>'+
          '</div>'+
          '</div>';


    var infowindow = new google.maps.InfoWindow({
       content: contentString
     });

    function branchLocationError(err){
      console.log("What are you using, IE 7??", err);
    };

    function selectDefender(){
      $(".info").empty();
      $(".js-select-def").hide();
      $("#message").text("Your Reserve Details:");
      $(".select_message").text("DEFENDER FIGHTER RESERVED!!");
    };
    function selectFirstOrder(){
      $(".info").empty();
      $(".js-select-fo").hide();
      $("#message").text("Your Reserve Details:");
      $(".select_message").text("FIRST ORDER FIGHTER RESERVED!!");
    };
    function selectOt(){
      $(".info").empty();
      $(".js-select-ot").hide();
      $("#message").text("Your Reserve Details:");
      $(".select_message").text("OT FIGHTER RESERVED!!");
    };
  };

})
