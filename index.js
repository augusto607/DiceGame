function randonNumber() {
    return Math.floor((Math.random() * 6) + 1);
}

function dicePlayer(numIn, imgNum) {
    return document.querySelector(imgNum).setAttribute("src", "./images/dice" + numIn + ".png");
}

// Set default dice image
dicePlayer("Charge", ".img1");
dicePlayer("Charge", ".img2");

let randomNumber1 = randonNumber();
let randomNumber2 = randonNumber();

// Set the new dice image after 5 seconds
setTimeout(function() {dicePlayer(randomNumber1, ".img1");}, 500);
setTimeout(function() {dicePlayer(randomNumber2, ".img2");}, 500);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}
