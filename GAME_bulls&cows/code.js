let secret = ""
let checkBtn = document.getElementById("checkBtn")
let guessInput = document.getElementById("guessInput")
let message = document.getElementById("message")
let history = document.getElementById("history")
let restartBtn = document.getElementById("restartBtn")


function makeSecret() {
    secret = ""
    while (secret.length < 4) {
        let digit = String(Math.floor(Math.random() * 10))
        if (!secret.includes(digit)) {
            secret = secret + digit
        }
    }
}

function addHistory(text) {
    let line = document.createElement("div")
    line.textContent = text
    history.appendChild(line)
}

makeSecret()




checkBtn.addEventListener("click", function () {
    let guess = guessInput.value

    if (guess.length !== 4) {
        message.textContent = "Нужно ровно 4 цифры!"
        return
    }

    if (isNaN(Number(guess))) {
        message.textContent = "Нужно вводить цифры!"
        return
    }



    // сколько быков на своём месте
    let bulls = 0
    let cows = 0

    for (let i = 0; i < 4; i++) {

        if (guess[i] === guess[i + 1] || guess[i] === guess[i + 2] || guess[i] === guess[i + 3]) {
            message.textContent = "Цифры не должны повторяться!"
            return
        } else if (guess[i] === secret[i]) {
            bulls++
        } else if (secret.includes(guess[i])) {
            cows++
        }
        

    }
    if (bulls === 4) {
        message.textContent = "Победа! Ты угадал, это число " + secret
        guessInput.disabled = true
    } else {
        message.textContent = "Быков: " + bulls + ", коров: " + cows
        addHistory(guess + " → быков " + bulls + ", коров " + cows)
    }

    guessInput.value = ""
})


restartBtn.addEventListener("click", function () {
    makeSecret()
    history.textContent = ""
    message.textContent = ""
    guessInput.value = ""
    guessInput.disabled = false
})




