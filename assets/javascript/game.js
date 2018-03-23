$(document).ready(function () {
    var Random = 0
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    var gemValues = []
    var targetValueDIV = $('#targetNumber')
    var userNumberDIV = $('#userScore')
    var winsDIV = $('#wins')
    var lossesDIV = $('#losses')

    resetGame()
    // $('#randomNumber').text(Random);
    // $('#numberWins').text(wins)
    // $('#numberLosses').text(losses)

function resetGame() {
    userTotal = 0
    Random = rollTargetScore()
    rollGemScores()
    updateTargetScore()
    updateUserScore()
    updateWinsAndLosses()
}
function rollTargetScore() {
    return Math.floor(Math.random() * 101 + 19)
}
function rollGemScores() {
    gemValues = []
    for (var i = 0; i < 4; i++) {
        gemValues[i] = Math.floor(Math.random() * 11 + 1);
    }
}

function updateTargetScore() {
    targetValueDIV.text(Random)
}
function updateUserScore() {
    userNumberDIV.text(userTotal)
}

function updateWinsAndLosses() {
    winDIV.text(wins)
    lossesDIV.text(losses)
}

})

document.getElementById("bluegem").addEventListener("click", function () {
    console.log("blue button clicked")
})

// function reset (){

// }

// $('#one').on('click', function()){
//     userTotal = userTotal + num1;
//     console.log("New User Total = " + userTotal);
//     $('#finalTotal').text(userTotal);

//     if (userTotal === Random) {
//         console.log(Yay! Winner!)
//         alert("You won!")

//         if (userTotal > Random)
//         console.log(Loser)
//         alert("Too high! You lost!")

//     }

// }