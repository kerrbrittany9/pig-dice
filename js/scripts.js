function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}





















$(document).ready(function() {
  $("#player-one").click(function(event) {
    event.preventDefault;

    var p1Roll = getRandomIntInclusive(1, 6);

    $(".outcome1").text(p1Roll);
  });

  $("#player-two").click(function(event) {
    event.preventDefault;

    var p2Roll = getRandomIntInclusive(1, 6);

    $(".outcome2").text(p2Roll);
  });


});
