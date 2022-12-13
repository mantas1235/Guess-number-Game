'use strict';


// console.log(document.querySelector(".message").textContent);


// document.querySelector('.message').textContent = "Correct Number 🎉🎉🎉"

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value
// document.querySelector('.guess').value = 23

let secretNumber = Math.trunc(Math.random() * 50) + 1

let score = 30



document.querySelector(".check").addEventListener("click", function () {

    const guess = Number(document.querySelector(".guess").value)

    // empty input
    if (!guess) {
        document.querySelector('.message').textContent = "You need to choose a number between 1 and 20 🎉🎉🎉"
    }

    //when win
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "Corect number🏆"

        document.querySelector('body').style.backgroundColor = "green"

        document.querySelector('.number').style.width = "30rem"
        document.querySelector(".number").textContent = secretNumber
    }


    //when guess is too high
    else if (guess > secretNumber || secretNumber > 51) {
        if (score > 1) {
            document.querySelector('.message').textContent = "⬇⬇⬇"
            score--
            document.querySelector('.score').textContent = score
        }
        else {
            document.querySelector('.message').textContent = "You lost the game 💥"
            document.querySelector('.score').textContent = 0
            document.querySelector('body').style.backgroundColor = "red"
        }



    }


    //when guess is too low
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "⬆⬆⬆"
            score--
            document.querySelector('.score').textContent = score
        }
        else {
            document.querySelector('.message').textContent = "You lost the game 💥"
            document.querySelector('.score').textContent = 0
            document.querySelector('body').style.backgroundColor = "red"
        }
    }

})

document.querySelector(".again").addEventListener("click", function () {
    document.querySelector(".guess").value = ""
    document.querySelector('body').style.backgroundColor = "#222"
    score = 30
    secretNumber = Math.trunc(Math.random() * 50) + 1
    document.querySelector('.message').textContent = "Start guessing..."
    document.querySelector('.score').textContent = score
    document.querySelector(".number").textContent = "?"
    document.querySelector('.number').style.width = "15rem"




    //vienas is variantu
    // window.location.reload()
    // return false
}

)