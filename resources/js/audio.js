$(document).on("ready",function(){

  if($('.btn').length){

    var audio = $("#lightsaber1")[0];
    $(".btn").mouseenter(function() {
      audio.play();
    });

  };

});
