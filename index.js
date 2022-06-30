
const choices = ['rock', 'paper', 'scissors']
const winners = []
let playerScore = 1;
let pcScore = 1;
let allTie = 0;
const pScore = document.querySelector('.player')
const cpuScore = document.querySelector('.pc')
const resetScore = document.querySelector('#reset');
const getTie = document.querySelector('.tie')
const whoIsWinner = document.querySelector('#wonp')

resetScore.addEventListener('click', function() {
    let makeZero = 0;
    pScore.textContent = makeZero;
    cpuScore.textContent = makeZero
    getTie.textContent = makeZero;
    playerScore = 1;
    pcScore = 1;
    allTie = 0;
    console.clear()
    whoIsWinner.textContent = ''
})

function playGame() {
    for (let i = 1; i <= 5; i++) { 
        const getPlayer = btnShowGame()
        const getPC = getPcAnswer();
        const winner = calculateScore(getPlayer, getPC);
    }
    const whoWinner = getWinner(playerScore, pcScore)
}
function getWinner(choiceP, choiceC) {
    if (choiceP > choiceC) {
        console.log('PLAYER WIN')
        whoIsWinner.textContent = 'PLAYER WIN'
    } else if (choiceP < choiceC) {
        console.log('PC WINS')
        whoIsWinner.textContent = 'PC WIN'
    } else {
        console.log('TIEEEE')
        whoIsWinner.textContent = 'TIE'
    }
}

function calculateScore(choiceP, choiceC) {
    if (choiceP === choiceC) {
        console.log('Tie')
        allTie++;
        getTie.textContent = allTie;
    } else if (
        choiceP === 'rock' && choiceC == 'scissors' ||
        choiceP === 'paper' && choiceC === 'rock' ||
        choiceP === 'scissors' && choiceC === 'paper' 
    ) {
        pScore.textContent = playerScore;
        playerScore++;
        console.log('win')
    } else {
        cpuScore.textContent = pcScore;
        pcScore++;
        console.log('lose')
    }
}

function btnShowGame() {
    alert('Today We are going to play Rock Paper Scissors')
    let getAnswer = prompt('Type Rock, Paper or Scissors as your answer');
    while (getAnswer == null) {
        getAnswer = prompt('Enter your Answer');
    }
    getAnswer = getAnswer.toLowerCase();
    let validate= checkAnswer(getAnswer)
    while(validate== false) {
        getAnswer = prompt('Type Rock, Paper or Scissors as your answer');
        while(getAnswer == null) {
            getAnswer = prompt('Type Rock, Paper or Scissors as your answer');
        }
        getAnswer = getAnswer.toLowerCase();
        validate = checkAnswer(getAnswer);
    }
    console.log(getAnswer)
    return getAnswer;
}

function getPcAnswer() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function checkAnswer(answer) {
    return choices.includes(answer);
}

