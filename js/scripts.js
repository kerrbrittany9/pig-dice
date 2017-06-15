function Player() {
  this.roll;
  this.grandTotal;
  this.subTotal;

}

Player.prototype.ranNum = function() {
  this.roll = Math.floor(Math.random() * (7));
  return this.roll;
}

$(document).ready(function() {
  $(".player-one").click(function(event) {
    event.preventDefault;

    var player1 = new Player();

    $(".outcome1").text(player1.ranNum());
  });

  $(".player-two").click(function(event) {
    event.preventDefault;

    var player2 = new Player(roll, grandTotal, subTotal);

    $(".outcome2").text();
  });
});
