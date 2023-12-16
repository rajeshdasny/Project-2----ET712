let secretNumber;
let currentScore = 10;
let highScore = 0;

function generateSecretNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const currentScoreDisplay = document.getElementById("currentScore");
    const highScoreDisplay = document.getElementById("highScore");
    const secretNumberDisplay = document.getElementById("secretNumber");

    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Invalid value. Number 1-100 only.";
    } else {
        if (userGuess === secretNumber) {
            message.textContent = "Congratulations! You guessed it!";
            document.body.classList.add("correctGuess");
            if (currentScore > highScore) {
                highScore = currentScore;
                highScoreDisplay.textContent = highScore;
            }
        } else {
            message.textContent = userGuess < secretNumber ? "Too low" : "Too high";
            currentScore--;
            currentScoreDisplay.textContent = currentScore;
            if (currentScore === 0) {
                message.textContent = "Sorry, game is over";
            }
        }
    }
}

function resetGame() {
    secretNumber = generateSecretNumber();
    currentScore = 10;
    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("currentScore").textContent = currentScore;
    document.body.classList.remove("correctGuess");
    document.getElementById("secretNumber").textContent = "";
}

window.onload = function () {
    secretNumber = generateSecretNumber();
};
