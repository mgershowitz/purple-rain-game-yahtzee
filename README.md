# purple-rain-game-yahtzee
Yahtzee

Yahtzee is a game played with five dice and can be played with one or more players. Each player has 13 rounds to attempt to get the highest score possible. In each round, the player has the opportunity to roll the dice 3 times. On the first roll, all 5 dice are rolled. For the second and third roll, the player can choose which dice they would like to re-roll, or can choose not to roll altogether. After three rolls, or after deciding to forfeit subsequent rolls, the player must choose 1 of thirteen categories, which will add to their total score based on the value of the category and the collection of dice values. Each category can be selected once. After all thirteen categories have been choosen, a total score is returned. If multiple players are playing, the player with the highest score wins.

Categories - categories are separated by Upper Scores and Lower Scores

Upper Scores - these scores are based on the values of the die in the returned rolled. (Example: if you have three 3's at the end of the round, you can gain 9 points towards your total. The Upper SCores are as follows;
Aces
Twos
Threes
Fours
Fives
Sixes

Lower Scores - these scores are based on meeting the criteria of certain dice combinations. The Lower SCores are as follows;

3-of-a-kind & 4-of-a-kind - This score is similarly scored as the Upper Scores in that points are decided by the face value of the die. (example: if you roll four 5's, you return 20 points). However, the amount of die must, at the least, meet the critera of three of four instances of the dice value respectively.

Small Straight - This is met when the die represent a sequence of 4 consecutive numbers (example: 2,3,4,5 || 3,4,5,6). A small straight returns the player 30 points

Large Straight - This is met when the die represent a sequence of 5 consecutive numbers (example: 1,2,3,4,5 || 2,3,4,5,6). A large straight returns the player 40 points

Full House - This is met when the player has both a 3-of-a-kind and a pair of dice. Full houses return 25 points to the player

Yahtzee - This is met when the player has five of the same dice value. A yahtzee returns the player 50 Points. Any additional yahtzee's rolled will award the player 100 points plus the points of the category chosen that round.

Chance -  This is score as a summation of the dice values rolled

User Story - As a user, I want to be able to play this game by myself or against the computer. I want o be able to play the game for 13 rounds, with each round consisting of at most three rolls where I have the ability to select and save values on the dice throughout the round. I want to be able to choose which caregory I want in order to increase my score. I want a high score to be logged that can be beat and replaced.
