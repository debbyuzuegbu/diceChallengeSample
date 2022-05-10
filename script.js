//Generate a random number from 1 - 6 for user 1
const firstRandomNum = Math.floor(Math.random() * 6) + 1;

//Generate a random number from 1 - 6 for user 2
const secondRandomNum = Math.floor(Math.random() * 6) + 1;

//generates a random image between image/dice1.png to image/dice6.png for user 1
const firstDiceImage = "images/dice" + firstRandomNum + ".png";

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);


//generates a random image between image/dice1.png to image/dice6.png for user 2
const secondDiceImage = "images/dice" + secondRandomNum + ".png";
document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

//shows users who wins
if (firstRandomNum > secondRandomNum) {
   document.querySelectorAll('h1')[0].innerHTML = "Winner is User 1";
} else if (firstRandomNum < secondRandomNum) {
   document.querySelectorAll('h1')[0].innerHTML = "Winner is User 2";
} else {
   document.querySelectorAll('h1')[0].innerHTML = "It's a draw";
}