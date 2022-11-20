var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;

//now we'll use this random no. to selsect a random dice image
var randomDiceImage = "dice" + randomNumber1 + ".png" ; //it can give any dice image starting from dice1.png to dice6.png

var randomImageSource = "images/" + randomDiceImage; // it will give:- images/dice1.png - images/dice6.png

//Now we are ready to change src attribute of our img element

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSource);



//Now we have to do exactly same for our second image element as we did above

var randomNumber2 = Math.floor(Math.random()*6) + 1 ;


var randomImageSource2 = "images/dice" + randomNumber2 + ".png"  ;

var image2 = document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2) ;

//If player 1 wins
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins";
}else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins";

}
else{
  document.querySelector("h1").innerHTML = "Draw";
}
//done
