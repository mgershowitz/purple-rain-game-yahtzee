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
var upperArray = [];
var totalScore = [];
var count = 0;
var total = 0;
var categoryPoints;
var addSscore;
var first;
var second;
var third;
var fourth;
var fifth;
var six;
var highScore = 0;

/////////////////Functions/////////////////////


function getDice() {
  first = getScore($('img').eq(0).attr('src'));
  second = getScore($('img').eq(1).attr('src'));
  third = getScore($('img').eq(2).attr('src'));
  fourth = getScore($('img').eq(3).attr('src'));
  fifth = getScore($('img').eq(4).attr('src'));
  six = getScore($('img').eq(5).attr('src'));
}

function resetIds() {
  $('#usedAces').attr('id', 'aces');
  $('#usedTwos').attr('id', 'twos');
  $('#usedThrees').attr('id', 'threes');
  $('#usedFours').attr('id', 'fours');
  $('#usedFives').attr('id', 'fives');
  $('#usedSixes').attr('id', 'sixes');
  $('#used3Kind').attr('id', '3Kind');
  $('#used4Kind').attr('id', '4Kind');
  $('#usedSmStraight').attr('id', 'smStraight');
  $('#usedLgStraight').attr('id', 'lgStraight');
  $('#usedFullHouse').attr('id', 'fullHouse');
  $('#usedYahtzee').attr('id', 'yahtzee');
  $('#usedChance').attr('id', 'chance');
}
//This variable sets random dice from the dice array for each of the five playing dice. This function only affects dice in the inPlay class. This function becomes disabled after three turns. This function increases turn by one.

function roll(e) {
  if(turn < 3) {
    for (var i = 0 ; i < $('.inPlay').length ; i++){
      var diceRoll = dice[Object.keys(dice)[Math.floor(Math.random()*Object.keys(dice).length)]].play;
      $('.inPlay').eq(i).attr('src', diceRoll);
    }
    turn++
  }
  if(turn < 3) {
    $('#roll').css('backgroundColor', 'red').css('color', 'white' );
  } else {
    $('#choose').css('backgroundColor', 'red').css('color', 'white' );
    $('#roll').css('backgroundColor', 'white').css('color', 'black' );
  }
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

function emptyArray (array) {
  while(array.length > 0) {
    array.pop()
  }
}

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
  round = round + 1;
  $('.scoreCategory').off('click');
  $('#rollTurn').text("Roll: " + 0);
  $('#round').text("Round: " + round)
  $('#choose').css('backgroundColor', 'white').css('color', 'black' );
  $('#roll').css('backgroundColor', 'red').css('color', 'white' );
  $('.scoreCategory').css('backgroundColor', 'white').css('color', 'black')
  emptyArray(upperArray);
  count = 0
  for (var i = 0 ; i < $('img').length ; i++) {
    if ($('img').eq(i).className = ('selected')) {
      $('img').eq(i)
      .attr('src', hold($(this).attr('src')))
      .attr('class', 'inPlay')
      .attr('data-click-state', 0);
    }
  }
  if (round > 13) {
    alert("You finished! Here's your score: " + $('#total').text());
    var newScore = $('#total').text();
    if (newScore > highScore) {
      highScore = newScore
      $('highScore').text('High Score: ' + newScore);
    }
  }
};

//////////////TotalScore////////////////////////
function addToTotal(points) {
  total += points;
  $('#total').text(total)
}


//////////////UpperScores///////////////////////
function getPoints(e) {
  for (var i = 0 ; i < $('img').length ; i++) {
    if(getScore($('img').eq(i).attr('src')) === categoryPoints) {
      upperArray.push(getScore($('img').eq(i).attr('src')))
    }
  }
  for(var i = 0; i < upperArray.length; i++) {
    count = count + upperArray[i];
    addScore.text(count)
  }
  //$(this).attr('class', 'usedScoreCategory').attr('id', 'usedAces').css('backgroundColor', 'white').css('color', 'black').off('click');

  addToTotal(count);
  resetRound();
  }

//////////////LowerScores////////////////////
function threeOfAKind(e) {
  getDice();
  if((first === second && first === third) ||
    /*2*/(first === second && first === fourth) ||
    /*3*/(first === second && first === fifth) ||
    /*4*/(first === third && first === fourth) ||
    /*5*/(first === third && first === fifth) ||
    /*6*/(first === fourth && first === fifth) ||
    /*7*/(second === third && second === fourth) ||
    /*8*/(second === third && second === fifth) ||
    /*9*/(second === fourth && second === fifth) ||
    /*10*/(third === fourth && third === fifth)) {
    for (var i = 0 ; i < $('img').length ; i++) {
          upperArray.push(getScore($('img').eq(i).attr('src')))
        }
      for(var i = 0; i < upperArray.length; i++) {
        count = count + upperArray[i];
      }
      addScore.text(count)
      addToTotal(count);
    }
  resetRound();
}

function fourOfAKind(e) {
  getDice();
  if((first === second && first === third && first === fourth) ||
    (first === second && first === fourth && first === fifth) ||
    (second === third && second === fourth && second === fifth)) {
      for (var i = 0 ; i < $('img').length ; i++) {
          upperArray.push(getScore($('img').eq(i).attr('src')))
        }
      for(var i = 0; i < upperArray.length; i++) {
        count = count + upperArray[i];
      }
      addScore.text(count)
      addToTotal(count);
    }
  resetRound();
}

function fullHouse(e) {
  getDice();
  if((first === second && first === third && fourth === fifth) ||
    /*2*/(first === second && first === fourth && third === fifth) ||
    /*3*/(first === second && first === fifth && third === fourth) ||
    /*4*/(first === third && first === fourth && second === fifth) ||
    /*5*/(first === third && first === fifth && second === fourth) ||
    /*6*/(first === fourth && first === fifth && second === third) ||
    /*7*/(second === third && second === fourth && first === fifth) ||
    /*8*/(second === third && second === fifth && first === fourth) ||
    /*9*/(second === fourth && second === fifth && first === third) ||
    /*10*/(third === fourth && third === fifth && first === second)) {
  $('#fullHousePoints').text(25);
  addToTotal(25);
  }
  resetRound();
}
//something is wrong
function smStraight(e) {
  getDice();
  if (((first < 5 && second < 5 && third < 5 && fourth < 5 && fifth < 5) &&
      (((first !== (second || third || fourth)) && (second !== (third || fourth)) && (third !== fourth)) ||
      ((first !== (third || fourth || fifth)) && (second !== (third || fourth)) && (third !== fourth)) ||
      ((first !== (second || fourth || fifth)) && (second !== (third || fourth)) && (third !== fourth)) ||
      ((first !== (second || third || fifth)) && (second !== (third || fourth)) && (third !== fourth)) ||
      ((second !== (third || fourth || fifth)) && (second !== (third || fourth)) && (third !== fourth)))) ||
    (((first < 6 && first > 1) && (second < 6 && second > 1) && (third < 6 && third > 1) && (fourth < 6 && fourth > 1) && (fifth < 6 && fifth > 1)) &&
      (((first !== (second || third || fourth)) && (second !== (third || fourth)) && (third !== fourth)) ||
      ((first !== (third || fourth || fifth)) && (second !== (third || fourth)) && (third !== fourth)) ||
      ((first !== (second || fourth || fifth)) && (second !== (third || fourth)) && (third !== fourth)) ||
      ((first !== (second || third || fifth)) && (second !== (third || fourth)) && (third !== fourth)) ||
      ((second !== (third || fourth || fifth)) && (second !== (third || fourth)) && (third !== fourth)))) ||
    ((first > 2 && second > 2 && third > 2 && fourth > 2 && fifth > 2) &&
      (((first !== (second || third || fourth)) && (second !== (third || fourth)) && (third !== fourth)) ||
      ((first !== (third || fourth || fifth)) && (second !== (third || fourth)) && (third !== fourth)) ||
      ((first !== (second || fourth || fifth)) && (second !== (third || fourth)) && (third !== fourth)) ||
      ((first !== (second || third || fifth)) && (second !== (third || fourth)) && (third !== fourth)) ||
      ((second !== (third || fourth || fifth)) && (second !== (third || fourth)) && (third !== fourth))))) {
    $('#smStraightPoints').text(30);
    addToTotal(30);
  }
  resetRound();
}
//something is wrong
function lgStraight(e) {
  getDice();
  if(((first !== 1 && second !== 1 && third !== 1 && fourth !== 1 && fifth !== 1) ||
    (first !== 6 && second !== 6 && third !== 6 && fourth !== 6 && fifth !== 6)) &&
    ((first !== (second || third || fourth || fifth) &&
      second !== (third || fourth || fifth) &&
      third !== (fourth || fifth) &&
      fourth !== fifth))) {
        $('#lgStraightPoints').text(40);
        addToTotal(40);
    }

  resetRound();
}


function yahtzee(e) {
  getDice();
  if(first === second && first === third && first === fourth && first === fifth) {
    $('#yahtzeePoints').text(50);
    addToTotal(50);
  }
  resetRound();
}

function bonus(e) {
  if($('#yahtzeePoints').text() === 50) {
    $('#bonusPoints').text(100);
  }
}

function chance(e) {
  getDice();
  upperArray.push(first, second, third, fourth, fifth);
  for(var i = 0; i < upperArray.length; i++) {
    count = count + upperArray[i];
  }
    $('#chancePoints').text(count);
    addToTotal(count);
  //$(this).attr('class', 'usedScoreCategory').attr('id', 'usedAces').css('backgroundColor', 'white').css('color', 'black').off('click');
  resetRound();
  }

/*choose function()
  highlights any categories not used yet when choose button is clicked. the categories are buttons that add points to thier left and add that to the total score. engages the reset the round function which was the choose function. When a category is used it changes class so that it cannot become clickable again. This will also prevent the highlighting*/

function choose(e) {
  $('.scoreCategory').css('backgroundColor', 'red').css('color', 'white')
  $('#aces').on('click', function(e) {
    categoryPoints = 1;
    addScore = $('#acePoints');
    getPoints();
    bonus();
    $(this).attr('class', 'usedScoreCategory').attr('id', 'usedAces').css('backgroundColor', 'white').css('color', 'black').off('click');
  })
  $('#twos').on('click', function(e) {
    categoryPoints = 2;
    addScore = $('#twoPoints');
    getPoints();
    bonus();
    $(this).attr('class', 'usedScoreCategory').attr('id', 'usedTwos').css('backgroundColor', 'white').css('color', 'black').off('click');
  })
  $('#threes').on('click', function(e) {
    addScore = $('#threePoints');
    categoryPoints = 3;
    getPoints();
    bonus();
    $(this).attr('class', 'usedScoreCategory').attr('id', 'usedThrees').css('backgroundColor', 'white').css('color', 'black').off('click');
  })
  $('#fours').on('click', function(e) {
    addScore = $('#fourPoints');
    categoryPoints = 4;
    getPoints();
    bonus();
    $(this).attr('class', 'usedScoreCategory').attr('id', 'usedFours').css('backgroundColor', 'white').css('color', 'black').off('click');
  })
  $('#fives').on('click', function(e) {
    addScore = $('#fivePoints');
    categoryPoints = 5;
    getPoints();
    bonus();
    $(this).attr('class', 'usedScoreCategory').attr('id', 'usedFives').css('backgroundColor', 'white').css('color', 'black').off('click');
  })
  $('#sixes').on('click', function(e) {
    addScore = $('#sixPoints');
    categoryPoints = 6;
    getPoints();
    bonus();
    $(this).attr('class', 'usedScoreCategory').attr('id', 'usedSixes').css('backgroundColor', 'white').css('color', 'black').off('click');
  })
  $('#3Kind').on('click', function(e) {
    addScore = $('#3KindPoints');
    threeOfAKind();
    bonus();
    $(this).attr('class', 'usedScoreCategory').attr('id', 'used3Kind').css('backgroundColor', 'white').css('color', 'black').off('click');
  })
  $('#4Kind').on('click', function(e) {
    addScore = $('#4KindPoints');
    fourOfAKind();
    bonus();
    $(this).attr('class', 'usedScoreCategory').attr('id', 'used4Kind').css('backgroundColor', 'white').css('color', 'black').off('click');
  })
  $('#smStraight').on('click', function(e) {
    smStraight();
    bonus();
    $(this).attr('class', 'usedScoreCategory').attr('id', 'usedSmStraight').css('backgroundColor', 'white').css('color', 'black').off('click');
  })
  $('#lgStraight').on('click', function(e) {
    lgStraight();
    bonus();
    $(this).attr('class', 'usedScoreCategory').attr('id', 'usedLgStraight').css('backgroundColor', 'white').css('color', 'black').off('click');
  })
  $('#fullHouse').on('click', function(e) {
    fullHouse();
    bonus();
    $(this).attr('class', 'usedScoreCategory').attr('id', 'usedFullHouse').css('backgroundColor', 'white').css('color', 'black').off('click');
  })
  $('#yahtzee').on('click', function(e) {
    yahtzee();
    bonus();
    $(this).attr('class', 'usedScoreCategory').attr('id', 'usedYahtzee').css('backgroundColor', 'white').css('color', 'black').off('click');
  })
  $('#chance').on('click', function(e) {
    chance();
    bonus();
    $(this).attr('class', 'usedScoreCategory').attr('id', 'usedChance').css('backgroundColor', 'white').css('color', 'black').off('click');
  })
}

///////////////Game Play///////////////////

$('#start').on('click', function (e){
  console.log("Begin!!")
  turn = 0
  round = 0
  total = 0
  $('#start').css('backgroundColor', 'white').css('color', 'black' );
  $(this).text("Reset Game")
  resetRound(e);
  $('.score').text(0)
  resetIds();
  $('#highScore').text("High Score: " + highScore);
  $('.usedScoreCategory').attr('class', 'scoreCategory');
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
