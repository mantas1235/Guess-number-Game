'use strict';


// console.log(document.querySelector(".message").textContent);


// document.querySelector('.message').textContent = "Correct Number 🎉🎉🎉"

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value
// document.querySelector('.guess').value = 23

let secretNumber = Math.trunc(Math.random() * 50) + 1

let score = 30
let highScore = 0

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}

const bodyColor = function (color) {
    document.querySelector('body').style.backgroundColor = color
}
document.querySelector(".check").addEventListener("click", function () {

    const guess = Number(document.querySelector(".guess").value)

    // empty input
    if (!guess) {
        displayMessage("You need to choose a number between 1 and 20 🎉🎉🎉")
    }

    //when win
    else if (guess === secretNumber) {
        displayMessage("Corect number🏆")

        bodyColor("green")

        document.querySelector('.number').style.width = "30rem"
        document.querySelector(".number").textContent = secretNumber
        if (score > highScore) {
            highScore = score
            document.querySelector(".highscore").textContent = highScore
        }
    }

    //when guess is wrong
    else if (guess !== secretNumber) {

        if (score > 1) {
            displayMessage(guess > secretNumber ? "too high" : "too low")
            score--
            document.querySelector('.score').textContent = score
        }
        else {
            displayMessage("You lost the game 💥")
            document.querySelector('.score').textContent = 0
            bodyColor("red")
        }

    }

})

document.querySelector(".again").addEventListener("click", function () {
    document.querySelector(".guess").value = ""
    bodyColor("#222")
    score = 30
    secretNumber = Math.trunc(Math.random() * 50) + 1
    displayMessage("Start guessing...")
    document.querySelector('.score').textContent = score
    document.querySelector(".number").textContent = "?"
    document.querySelector('.number').style.width = "15rem"




    //vienas is variantu
    // window.location.reload()
    // return false
}

)