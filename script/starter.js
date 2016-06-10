$(document).ready(function(){


console.log('connected!');

/////////////////Arrays////////////////////////

var ace = "./assets/ace.png";
var two = "./assets/two.png";
var three = "./assets/three.png";
var four = "./assets/four.png";
var five = "./assets/five.png";
var six = "./assets/six.png";
var sAce ="./assets/aceSelected.png";
var sTwo ="./assets/twoSelected.png";
var sThree = "./assets/threeSelected.png";
var sFour = "./assets/fourSelected.png";
var sFive = "./assets/fiveSelected.png";
var sSix = "./assets/sixSelected.png";

var dice = {
  ace: { play: ace,
         hold: sAce,
         points: 1
       },
  two: { play: two,
         hold: sTwo,
         points: 2
       },
  three: { play: three,
         hold: sThree,
         points: 3
       },
  four: { play: four,
         hold: sFour,
         points: 4
       },
  five: { play: five,
         hold: sFive,
         points: 5
       },
  six: { play: six,
         hold: sSix,
         points: 6
      }
  }

/////////////Global Variables//////////////////

var round = 0;
var turn = 0;
$('#start').css('backgroundColor', 'red').css('color', 'white' );

/////////////////Functions/////////////////////

//This variable sets random dice from the dice array for each of the five playing dice. This function only affects dice in the inPlay class. This function becomes disabled after three turns. This function increases turn by one.
function roll(e) {
  if(turn < 3) {
    for (var i = 0 ; i < $('.inPlay').length ; i++){
      var diceRoll = dice[Object.keys(dice)[Math.floor(Math.random()*Object.keys(dice).length)]].play;
      $('.inPlay').eq(i).attr('src', diceRoll);
    }
  } else {
  }
  if(turn < 2) {
    $('#roll').css('backgroundColor', 'red').css('color', 'white' );
  } else {
    $('#choose').css('backgroundColor', 'red').css('color', 'white' );
    $('#roll').css('backgroundColor', 'white').css('color', 'black' );
  }
  turn++
  $('#rollTurn').text("Roll: " + turn);
}

//This searches the src of the dice and returns the hold version of it
function hold(src) {
  for(var die in dice) {
    if(dice[die].play === src) {
      return dice[die].hold;
    } else if (dice[die].hold === src) {
      return dice[die].play;
    }
  }
};

//Gets the score based on the image in the deice
function getScore(src) {
  for(var die in dice) {
    if(dice[die].play === src || dice[die].hold === src) {
      console.log(dice[die].points)
      return dice[die].points;
    }
  }
};


//This function allows you to hold the dice after the first or second round. This function nulls the effects of the roll function for that particular die. This function changes the class to .selected and replaces the dice array with the diceSelected array while keeping the index static. This function is reversable. This function doesn't work before the first turn has ended.
function holdDice(e) {
  if(turn >= 1) {
    if($(this).attr('data-click-state') == 1) {
    $(this)
    .attr('data-click-state', 0)
    .attr('src', hold($(this).attr('src')))
    .attr('class', 'inPlay');
    } else {
    $(this)
    .attr('data-click-state', 1)
    .attr('src', hold($(this).attr('src')))
    .attr('class', 'selected');
    }

}
}
//This has to be reset if the game is reset

//This is a placeholder for the choose function. It won't actually even change turn = 0. This will occur once you decide what category you want to select. Currently function resets the board without resetting the game
function resetRound(e) {
  turn = 0
  round++;
  $('#rollTurn').text("Roll: " + 0);
  $('#round').text("Round: " + round)
  $('#choose').css('backgroundColor', 'white').css('color', 'black' );
  $('#roll').css('backgroundColor', 'red').css('color', 'white' );
  for (var i = 0 ; i < $('img').length ; i++) {
    if ($('img').eq(i).className = ('selected')) {
      $('img').eq(i)
      .attr('src', hold($('.selected').attr('src')))
      .attr('class', 'inPlay')
      .attr('data-click-state', 0);
    }
  }
};

/*choose function()
  highlights any categories not used yet when choose button is clicked. the categories are buttons that add points to thier left and add that to the total score. engages the reset the round function which was the choose function. When a category is used it changes class so that it cannot become clickable again. This will also prevent the highlighting
Full House example logic
  $('full house').on('click', function {
    if(a=b=c && d=e ||
       a=b=d && c=e ||
       a=b=e && c=d ||
       a=b=d && b=e ||
       a=b=e && b=d ||
       a=b=e && b=c ||
       etc ....)
  })
Let's start with Upper scoring
I can set a conditional that if score equals a number then add to total score of category and total score.
  */
var aceArray = [];
var count = 0;
function choose(e) {
  $('.scoreCategory').css('backgroundColor', 'red').css('color', 'white')
  $('#aces').on('click', function(e) {
    for(var i = 0 ; i < $('img').length ; i++) {
    if (getScore($('img').eq(i).attr('src') === 1)) {
      aceArray.push(1);
    }
    for(var i = 0; i < aceArray.length; i++) {
    count = count + array[i];
    console.log(count = count + array[i]);
}
}
})
}

///////////////Game Play///////////////////

$('#start').on('click', function (e){
  console.log("Begin!!")
  turn = 0
  round = 0
  $('#start').css('backgroundColor', 'white').css('color', 'black' );
  $(this).text("Reset Game")
  resetRound(e);//this only lives here for now
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
