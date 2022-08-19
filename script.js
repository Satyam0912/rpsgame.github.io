const message = document.getElementById('message');
const start = document.getElementById('start');
const submit = document.getElementById('submit');
const boards = document.getElementById('boards');
const playerSide = document.getElementById('playerSide');
const pScore = document.getElementById('pScore');
const playerSelect = document.getElementById('playerSelect');
const computerSide = document.getElementById('computerSide');
const cScore = document.getElementById('cScore');
const computerSelect = document.getElementById('computerSelect');
const select = document.getElementById('select');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

let playerScore = 0;
let computerScore = 0;
let gameActive = false;

const reset = () => {
    setTimeout(() => {
        playerScore = 0;
        computerScore = 0;
        computerSelect.innerHTML = "";
        playerSelect.innerHTML = '';
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;
        gameActive = false;
        message.innerText = 'Choose rock paper or scissors to start again'
    }, 3000)
}

const whoWon = () => {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            message.innerText = 'Player is the winner! Congrulations!'
        }
        else {
            message.innerText = 'Computer is the winner! Shame on you!'
        }
        reset()
    }
}

const playRound = (ps, cs) => {
    if (ps === cs) {
        return 0;
    }
    else if (ps === 'rock' && cs === 'scissors') {
        return 1;
    }
    else if (ps === 'rock' && cs === 'paper') {
        return -1;
    }
    else if (ps === 'paper' && cs === 'rock') {
        return 1;
    }
    else if (ps === 'paper' && cs === 'scissors') {
        return -1;
    }
    else if (ps === 'scissors' && cs === 'rock') {
        return -1;
    }
    else if (ps === 'scissors' && cs === 'paper') {
        return 1;
    }
}

const computerPlay = () => {
    let options = ['rock', 'paper', 'scissors']
    return options[Math.floor(Math.random() * options.length)];
}

const gameFlow = (playerSelection) => {

    const computerSelection = computerPlay();

    let winner = playRound(playerSelection, computerSelection);

    results = winner === 0 ? "Draw" : (winner === 1 ? "Player won!" : "Computer won!");

    playerSelect.innerHTML = `<i class="fas fa-hand-${playerSelection}"></i>`
    computerSelect.innerHTML = `<i class="fas fa-hand-${computerSelection}"></i>`

    if (results === 'Player won!') {
        playerScore++;
        playerSelect.style.color = "green"
        computerSelect.style.color = "red"
    } else if (results === 'Computer won!') {
        computerScore++;
        playerSelect.style.color = "red"
        computerSelect.style.color = "green"
    } else {
        computerSelect.style.color = ""
        playerSelect.style.color = ""
    }

    pScore.innerText = playerScore;
    cScore.innerText = computerScore;

    message.innerText = results;
    whoWon()
}

const displayBoards = () => {
    start.style.display = 'none';
    boards.style.display = 'block';
    select.style.display = 'block';
    gameActive = true;
}

submit.addEventListener('click', () => displayBoards())
rock.addEventListener('click', () => gameFlow(rock.id));
paper.addEventListener('click', () => gameFlow(paper.id));
scissors.addEventListener('click', () => gameFlow(scissors.id));