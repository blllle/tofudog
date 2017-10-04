// @codekit-prepend "../bower_components/jquery/dist/jquery.min.js";


$( document ).ready(function() {

  var images = ['img/tofu2.jpg', 'img/tofu1.jpg', 'img/tofu3.jpg', 'img/tofu4.jpg', 'img/tofu5.jpg', 'img/tofu6.jpg', 'img/tofu7.jpg', 'img/tofu8.jpg', 'img/tofu9.jpg', 'img/tofu10.jpg', 'img/tofu11.jpg', 'img/tofu12.jpg', 'img/tofu13.jpg', 'img/tofu14.jpg', 'img/tofu15.jpg', 'img/tofu16.jpg', 'img/tofu17.jpg', 'img/tofu18.jpg', 'img/tofu19.jpg', 'img/tofu20.jpg', 'img/tofu21.jpg', 'img/tofu22.jpg', 'img/tofu23.jpg', 'img/tofu24.jpg', 'img/tofu25.jpg', 'img/tofu26.jpg', 'img/tofu27.jpg','img/tofu28.jpg', 'img/tofu29.jpg', 'img/tofu30.jpg', 'img/tofu31.jpg',]
  var rand = images[Math.floor(Math.random() * images.length)];
  $(".tofu-background").css("background-image", "url(" + rand + ")");

  var myQuotes = ['Woof! Woof!','I am a good boy', 'Who is a good boy though? is it me?', 'What if I never find out who the good boy is??', 'Hello, Yes this is dog', 'I wont tell anyone what you are doing, but I would tweet about it if I had thumbs.', 'Hello, Yes this is dog', 'Asking if I chewed on the couch is a stupid question. Who else would it be? Thomas?', 'Why must you talk to me like Im an infant? Im 102 years old in dog years', 'OMG OMG OMG, FOOOOOD!', 'What is this delicious smell?!, I must coat myself in it immediately', 'Oooo, Shiny thing, I must chase it', 'Where are you going? Can I come?', 'Are we there yet?! Are we there yet?', 'Park time, park time! Go Go Go', 'Ohhhh... you wanted to eat that? Sorry..', 'Stop taking pictures of me and posting them on Instagram. I look fat today', ];
  var myRandom = Math.floor(Math.random() * myQuotes.length);


  $('#myQuote h2').html(myQuotes[myRandom]);

}) 