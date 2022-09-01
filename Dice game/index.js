// By My Way
// var randomNumber1=Math.floor(Math.random()*6)+1;
// if (randomNumber1 === 1){
//   document.querySelector("img.right-image").setAttribute("src","images/dice1.png");
// }
// else if (randomNumber1===2){
//   document.querySelector("img.right-image").setAttribute("src","images/dice2.png");
// }
// else if (randomNumber1===3){
//   document.querySelector("img.right-image").setAttribute("src","images/dice3.png");
// }
// else if (randomNumber1===4){
//   document.querySelector("img.right-image").setAttribute("src","images/dice4.png");
// }
// else if (randomNumber1===5){
//   document.querySelector("img.right-image").setAttribute("src","images/dice5.png");
// }
// else if(randomNumber2===6){
//   document.querySelector("img.right-image").setAttribute("src","images/dice6.png");
// }
//
//
// var randomNumber2=Math.floor(Math.random()*6)+1;
// if (randomNumber2===1){
//   document.querySelector("img.left-image").setAttribute("src","images/dice1.png");
// }
// else if (randomNumber2===2){
//   document.querySelector("img.left-image").setAttribute("src","images/dice2.png");
// }
// else if (randomNumber2===3){
//   document.querySelector("img.left-image").setAttribute("src","images/dice3.png");
// }
// else if (randomNumber2===4){
//   document.querySelector("img.left-image").setAttribute("src","images/dice4.png");
// }
// else if (randomNumber2===5){
//   document.querySelector("img.left-image").setAttribute("src","images/dice5.png");
// }
// else if(randomNumber2===6){
//   document.querySelector("img.left-image").setAttribute("src","images/dice6.png");
// }
//
// if(randomNumber1>randomNumber2){
//   document.querySelector("h1").innerHTML="Player 1 won!";
// }
// else if(randomNumber1<randomNumber2){
//   document.querySelector("h1").innerHTML="Player 2 won!";
// }
// else if(randomNumber1===randomNumber2){
//   document.querySelector("h1").innerHTML="Draw!";
// }


// By course Way

var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber1Source="images/dice" +randomNumber1+ ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomNumber1Source);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomNumber2Source="images/dice" +randomNumber2+ ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomNumber2Source);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 won!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 won!";
}
else if (randomNumber1===randomNumber2) {
  document.querySelector("h1").innerHTML="Draw!";
}
