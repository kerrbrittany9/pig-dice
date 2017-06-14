function Player() {
  this.rollOutcome;
  this.grandTotal;
  this.turnTotal;
  this.initialRoll;
}




  Player.protoype.ranNum = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  this.rollOutcome = Math.floor(Math.random() * (max - min + 1)) + min;

}

$(document).ready(function() {
  $("#player-one").click(function(event) {
    event.preventDefault;

    var roll = ranNum(1, 6);


    $(".outcome1").text(roll);
  });

  $("#player-two").click(function(event) {
    event.preventDefault;

    var roll = getRandomIntInclusive(1, 6);
    var turn = new Rold (roll);

    $(".outcome2").text(roll);
  });

});
