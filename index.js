function randonNumber() {
    return Math.floor((Math.random() * 6) + 1);
}

function dicePlayer(numIn, imgNum) {
    return document.querySelector(imgNum).setAttribute("src", "./images/dice" + numIn + ".png");
}

let randomNumber1 = randonNumber();
let randomNumber2 = randonNumber();

dicePlayer(randomNumber1, ".img1");
dicePlayer(randomNumber2, ".img2");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}