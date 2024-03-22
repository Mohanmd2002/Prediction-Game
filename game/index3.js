function getComputerNumber() {
    // 
    number = ''
    for(i=0;i<4;i++){
    num = Math.floor(Math.random()*9)
    number+=num}
    console.log(number)
    return number
}

function getGuessResult(computerNumber, guess) {
    let result = '';
    for (let i = 0; i < 4; i++) {
        if (computerNumber[i] === guess[i]) {
            result += '+';
        } 
        else if (computerNumber.includes(guess[i])) {
            result += '-';
        }
        else{
            result += '*'
        }
    }
    return result;
}

function startGame() {
    const computerNumber = getComputerNumber();
    console.log('Guess a 4-digit number without repeating digits.');
    const startTime = Date.now();
    let numGuesses = 0;
    while (true) {
        const guess = prompt('Enter your guess:');
        numGuesses++;
        const result = getGuessResult(computerNumber, guess);
        if (result === '++++') {
            const endTime = Date.now();
            console.log(`You won in ${numGuesses} guesses and ${(endTime - startTime) / 1000} seconds.`);
            break;
        } else {
            console.log(`Result: ${result}`);
        }
    }
}

const name = prompt('Enter your name:');
console.log(`Hi ${name}, let's start the game!`);
startGame();