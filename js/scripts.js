function Player() {
  this.roll = 0;
  this.grandTotal = 0;
  this.subTotal = 0;

}

Player.prototype.ranNum = function() {
  this.roll = Math.ceil(Math.random() * (6));
  return this.roll;
}

Player.prototype.addToSub = function() {
  this.subTotal += this.roll;
  return this.subTotal;
}

Player.prototype.addToGrand = function() {
  this.grandTotal += this.subTotal;
  return this.grandTotal;
}

$(document).ready(function() {

  var player1 = new Player();
  var player2 = new Player();


  $(".player-one").click(function(event) {
    event.preventDefault;

    var roll = player1.ranNum();
    var subtotal = player1.addToSub();

    $(".outcome1").text(roll);
    $(".subtotal1").text(subtotal);
  });

  $("#player-one").click(function(event) {
    event.preventDefault;

    var grandtotal = player1.addToGrand();

    $(".outcome1").empty();
    $(".subtotal1").empty();
    player1.subTotal = 0;
    $(".grandtotal1").text(grandtotal);
  });

  $(".player-two").click(function(event) {
    event.preventDefault;

    var roll = player2.ranNum();
    var subtotal = player2.addToSub();

    $(".outcome2").text(roll);
    $(".subtotal2").text(subtotal);
  });

  $("#player-two").click(function(event) {
    event.preventDefault;

    var grandtotal = player2.addToGrand();

    $(".outcome2").empty();
    $(".subtotal2").empty();
    player2.subTotal = 0;
    $(".grandtotal2").text(grandtotal);
  });

});
