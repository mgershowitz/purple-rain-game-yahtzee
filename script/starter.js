$(document).ready(function(){


console.log('connected!');

/////////////////Arrays////////////////////////

var dice = [
  "./assets/ace.png",
  "./assets/two.png",
  "./assets/three.png",
  "./assets/four.png",
  "./assets/five.png",
  "./assets/six.png",
  ];

var diceSelected = [
  "./assets/aceSelected.png",
  "./assets/twoSelected.png",
  "./assets/threeSelected.png",
  "./assets/fourSelected.png",
  "./assets/fiveSelected.png",
  "./assets/sixSelected.png",
  ];

/////////////Global Variables//////////////////

var round = 0;
var turn = 0;
$('#start').css('backgroundColor', 'red')
.css('color', 'white' );

/////////////////Functions/////////////////////

//This variable sets random dice from the dice array for each of the five playing dice. This function only affects dice in the inPlay class. This function becomes disabled after three turns. This function increases turn by one.
function roll(e) {
  if(turn < 3) {
    for (var i = 0 ; i < $('.inPlay').length ; i++){
      var diceRoll = dice[Math.floor(Math.random()*5)];
      $('.inPlay').eq(i)
      .attr('src', diceRoll);
    }
  } else {
  }
  if(turn<2) {
    $('#roll').css('backgroundColor', 'red')
    .css('color', 'white' );
  } else {
    $('#choose').css('backgroundColor', 'red')
    .css('color', 'white' );
    $('#roll').css('backgroundColor', 'white')
    .css('color', 'black' );
  }
  turn++
  $('#rollTurn').text("Roll: " + turn);
}

//This function allows you to hold the dice after the first or second round. This function nulls the effects of the roll function for that particular die. This function changes the class to .selected and replaces the dice array with the diceSelected array while keeping the index static. This function is reversable. This function doesn't work before the first turn has ended.
function holdDice(e) {
  if(turn >= 1) {
    if($(this).attr('data-click-state') == 1) {
    var selectedDiceIndex = diceSelected.indexOf($(this).attr('src'));
    $(this)
    .attr('data-click-state', 0)
    .attr('src', dice[selectedDiceIndex])
    .attr('class', 'inPlay');
    } else {
    var diceIndex = dice.indexOf($(this).attr('src'));
    $(this)
    .attr('data-click-state', 1)
    .attr('src', diceSelected[diceIndex])
    .attr('class', 'selected');
    }
  }
}
//This has to be reset if the game is reset

//This is a placeholder for the choose function. It won't actually even change turn = 0. This will occur once you decide what category you want to select. Currently function resets the board without resetting the game
function choose(e) {
  turn = 0
  round++;
  $('#rollTurn').text("Roll: " + 0);
  $('#round').text("Round: " + round)
  $('#choose').css('backgroundColor', 'white').css('color', 'black' );
  $('#roll').css('backgroundColor', 'red').css('color', 'white' );
  for (var i = 0 ; i < $('img').length ; i++) {
    if ($('img').eq(i).className = ('selected')) {
      var selectedDiceIndex = diceSelected.indexOf($('img').eq(i).attr('src'))
      $('img').eq(i)
      .attr('class', 'inPlay')
      .attr('src', dice[selectedDiceIndex])
      .attr('data-click-state', 0);
    }
  }
};

///////////////Game Play///////////////////

$('#start').on('click', function (e){
  console.log("Begin!!")
  turn = 0
  round = 0
  $('#start').css('backgroundColor', 'white').css('color', 'black' );
  $(this).text("Reset Game")
  choose(e);//this only lives here for now
  $('#round').text("Round: " + 1)
  $('#choose').off('click', choose);
  $('#choose').on('click', choose);
  $('img').off('click', holdDice)
  $('img').on('click', holdDice)
  $('#roll').off('click', roll);
  $('#roll').on('click', roll);
})
//These closing tags are for the #start and the $(document).
})
