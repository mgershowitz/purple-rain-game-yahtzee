$(document).ready(function(){


console.log('connected!')

var dice = [
  "./assets/ace.png",
  "./assets/two.png",
  "./assets/three.png",
  "./assets/four.png",
  "./assets/five.png",
  "./assets/six.png",
  ]

var diceSelected = {
  "./assets/ace.png": "./assets/aceSelected.png",
  "./assets/two.png": "./assets/twoSelected.png",
  "./assets/threee.png": "./assets/threeSelected.png",
  "./assets/four.png": "./assets/fourSelected.png",
  "./assets/five.png": "./assets/fiveSelected.png",
  "./assets/six.png": "./assets/sixSelected.png",
  }


var turn = 0

$('#start').on('click', function (e){
  console.log("Begin!!")
  var turn = 0
  $('#roll').on('click', roll);
  $('#choose').on('click', choose);

  //let's set a variable so that when it gets to a certain value the roll button is disabled. Choose allows you to pick a category and also resets the variable dictating the number of rolls
function roll(e) {
  if(turn < 3){
    for (var i = 0 ; i < $('.inPlay').length ; i++){
      var diceRoll = dice[Math.floor(Math.random()*5)];
      $('.inPlay').eq(i).attr('src', diceRoll);
    }
  }
  turn++
}

// function holdDice(e) {
  $('.inPlay').on('click', function(e) {
    $(this).attr('src', diceSelected[$(this).src])

  //I need to be able to figure out the index of the current die and switch its array while keeping the index. I also need it to toggle back and forth.
})

// $('img').eq(0).on('click', function(e) {
//     if ($(this).src = diceSelected[0]) {
//     $(this).attr('src', dice[0]);
//   }
//   //I need to be able to figure out the index of the current die and switch its array while keeping the index. I also need it to toggle back and forth.
// })




















function choose(e) {
  turn = 0
};

})




})














// })
