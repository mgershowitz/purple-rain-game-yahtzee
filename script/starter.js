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

var diceSelected = [
  "./assets/aceSelected.png",
  "./assets/twoSelected.png",
  "./assets/threeSelected.png",
  "./assets/fourSelected.png",
  "./assets/fiveSelected.png",
  "./assets/sixSelected.png",
  ]

$('#start').on('click', function (e){
  console.log("Begin!!")
  var turn = 0
  $('#roll').on('click', roll);
  $('#choose').on('click', choose);
  $('img').on('click', holdDice, false)
  $('img').on('click', holdDice)
  // $('.selected').off('click', holdDice)

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


//First let's focus on toggling class so it won't be affected by roll
//'.inPlay' class means they're in play, ".selected" means they are no

//Next figure out how to switch arrays while keeping index
//dice.indexOf($('#a').attr('src')) --> this gets the index number of the src in the first array, I can use it to switch to the second array
  function holdDice(e) {
    if(turn >= 1) {
      if($(this).attr('data-click-state') == 1) {
      $(this).attr('data-click-state', 0)
      var selectedDiceIndex = diceSelected.indexOf($(this).attr('src'))
      $(this).attr('src', dice[selectedDiceIndex]);
      $(this).attr('class', 'inPlay')
      } else {
      $(this).attr('data-click-state', 1)
      var diceIndex = dice.indexOf($(this).attr('src'))
      $(this).attr('src', diceSelected[diceIndex]);
      $(this).attr('class', 'selected')
      }
    }
  }









  //This is a placeholder for the choose function. It won't actually even change turn = 0. This will occur once you decide what category you want to select. Currently functions to reset roll without resetting the game
  function choose(e) {
    turn = 0
  };

//These closing tags are for the #start and the $(document).
})
})
