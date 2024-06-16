// var btn=document.querySelector(".btn");
// btn.addEventListener("click",() => {

// })
var randomNo = Math.random();
var n = Math.floor(randomNo*6)+1;
var randomImg = "dice" +n+ ".png";
var randomDiceimg ="images/" +randomImg;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceimg);


var randomNo1 =Math.floor( Math.random()*6) +1;
var randomImg1 = "dice" +randomNo1+ ".png";
var randomImageSource = "images/"+randomImg1;
var  image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);


if(n>randomNo1)
{
    document.querySelector("h1").innerHTML="Player 1 WINS";
}
else if(n<randomNo1)
{
    document.querySelector("h1").innerHTML="Player 2 WINS";
}
else
{
    document.querySelector("h1").innerHTML="It is Draw !";
}