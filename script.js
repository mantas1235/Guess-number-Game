'use strict';


// console.log(document.querySelector(".message").textContent);


// document.querySelector('.message').textContent = "Correct Number 🎉🎉🎉"

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value
// document.querySelector('.guess').value = 23

const secretNumber = Math.trunc(Math.random() * 20) + 1

let score = 20

document.querySelector(".number").textContent = secretNumber

document.querySelector(".check").addEventListener("click", function () {

    const guess = Number(document.querySelector(".guess").value)


    if (!guess) {
        document.querySelector('.message').textContent = "You need to choose a number between 1 and 20 🎉🎉🎉"
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "Corect number"
    } else if (guess > secretNumber || secretNumber > 21) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Your Number is too high try again🙏😌"
            score--
            document.querySelector('.score').textContent = score
        }
        else {
            document.querySelector('.message').textContent = "You lost the game 💥"
            document.querySelector('.score').textContent = 0
        }



    }
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Your Number is too low try again🙏😌"
            score--
            document.querySelector('.score').textContent = score
        }
        else {
            document.querySelector('.message').textContent = "You lost the game 💥"
            document.querySelector('.score').textContent = 0
        }
    }

})

