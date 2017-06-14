function Rold(roll) {
  this.rollOutcome = roll;
  this.grandTotal = [];
  this.turnTotal = [];
  this.initialRoll = 3;
console.log(roll);
}
Rold.prototype.add = function(initialRoll) {
  this.turnTotal = this.rollOutcome + this.initialRoll
  return this.turnTotal

}
// .prototype.addToGrandTotal = function() {
//   this.grandTotal = this.turnTotal + this.grandTotal
//   return this.grandTotal
// }


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




$(document).ready(function() {
  $("#player-one").click(function(event) {
    event.preventDefault;

    var roll = getRandomIntInclusive(1, 6);

    var turn = new Rold (roll);


    // var newTurnTotal = turn.addToTotal();
    //var newGrandTotal = turn.addToGrandTotal();

    $(".outcome1").text(turn.add());
  });

  $("#player-two").click(function(event) {
    event.preventDefault;

    var roll = getRandomIntInclusive(1, 6);

    $(".outcome2").text();
  });


});
