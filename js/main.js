// @codekit-prepend "../bower_components/jquery/dist/jquery.min.js";


$( document ).ready(function() {
  var images = ['img/tofu2.jpg', 'img/tofu1.jpg', 'img/tofu3.jpg', 'img/tofu4.jpg', 'img/tofu5.jpg', 'img/tofu6.jpg', 'img/tofu7.jpg', 'img/tofu8.jpg', 'img/tofu9.jpg', 'img/tofu10.jpg', 'img/tofu11.jpg', 'img/tofu12.jpg', 'img/tofu13.jpg', 'img/tofu14.jpg', 'img/tofu15.jpg', 'img/tofu16.jpg', 'img/tofu17.jpg', 'img/tofu18.jpg', 'img/tofu19.jpg', 'img/tofu20.jpg']
  var rand = images[Math.floor(Math.random() * images.length)];
  $(".tofu-background").css("background-image", "url(" + rand + ")");
}) 