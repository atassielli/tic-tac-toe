//Game Controls

let gameBoard = [];

const displayController = (() => {
})();

let beginGame = document.querySelector('.beginGame');
beginGame.addEventListener('click', () => {
    if (validateNames() === 'error') {
        return
    };
    if (valdiatePlayer1Symbol() === 'error') {
        return
    }
    valdiatePlayer2Symbol();
    displayBoard();
})

let form = document.querySelector('.form');
let showboard = document.querySelector('.gameBoard');
let instructions = document.querySelector('.instructions');
let turnIndicator;

function displayBoard() {
    form.style.cssText = 'display: none';
    showboard.style.cssText = 'display: grid';
    turnIndicator =`${getPlayerOneName.value} is Up, Select a Square`
    instructions.textContent = `${turnIndicator}`
}

function changeTurn() {
    if (turnIndicator === `${getPlayerOneName.value} is Up, Select a Square`) {
        turnIndicator = `${getPlayerTwoName.value} is Up, Select a Square`
    } else if (turnIndicator === `${getPlayerTwoName.value} is Up, Select a Square`) {
        turnIndicator = `${getPlayerOneName.value} is Up, Select a Square`
    }
    instructions.textContent = `${turnIndicator}`
}

let boardSpace = document.querySelectorAll('.boardSpace');
boardSpace.forEach(space => {
    space.addEventListener('click', function () {
        if ((turnIndicator === `${getPlayerOneName.value} is Up, Select a Square`) && this.textContent === '') {
            this.textContent = valdiatePlayer1Symbol()
        } else if ((turnIndicator === `${getPlayerTwoName.value} is Up, Select a Square`) && this.textContent === '') {
            this.textContent = valdiatePlayer2Symbol()
        } else if (this.textContent != '') {
            alert('This square has already been taken, please choose an empty square')
            return
        }
        gameBoard.push(this.textContent)
        winCheck();
        changeTurn();
    })
});
boardSpace.forEach(space => {
    space.addEventListener('mouseover', function () {
        if (this.textContent === ''){
            this.style.cssText = 'background-color: grey'
        } else {
            this.style.cssText = 'background-color: white'
        }
    })
});

boardSpace.forEach(space => {
    space.addEventListener('mouseout', function () {
        this.style.cssText = 'background-color: white'
    })
});

let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');

function winCheck() {
    if (one.textContent === 'O' && two.textContent === 'O' && three.textContent === 'O') {
        console.log('O Win')
        oWins()
    } else if (one.textContent === 'O' && four.textContent === 'O' && seven.textContent === 'O') {
        oWins()
    } else if (one.textContent === 'O' && five.textContent === 'O' && nine.textContent === 'O') {
        oWins()
    } else if (two.textContent === 'O' && five.textContent === 'O' && eight.textContent === 'O') {
        oWins()
    } else if (three.textContent === 'O' && five.textContent === 'O' && seven.textContent === 'O') {
        oWins()
    } else if (three.textContent === 'O' && six.textContent === 'O' && nine.textContent === 'O') {
        oWins()
    } else if (four.textContent === 'O' && five.textContent === 'O' && six.textContent === 'O') {
        oWins()
    } else if (seven.textContent === 'O' && eight.textContent === 'O' && nine.textContent === 'O') {
        oWins()
    } else if (one.textContent === 'X' && four.textContent === 'X' && seven.textContent === 'X') {
        xWins()
    } else if (one.textContent === 'X' && five.textContent === 'X' && nine.textContent === 'X') {
        xWins()
    } else if (two.textContent === 'X' && five.textContent === 'X' && eight.textContent === 'X') {
        xWins()
    } else if (three.textContent === 'X' && five.textContent === 'X' && seven.textContent === 'X') {
        xWins()
    } else if (three.textContent === 'X' && six.textContent === 'X' && nine.textContent === 'X') {
        xWins()
    } else if (four.textContent === 'X' && five.textContent === 'X' && six.textContent === 'X') {
        xWins()
    } else if (seven.textContent === 'X' && eight.textContent === 'X' && nine.textContent === 'X') {
        xWins()
    } else if (one.textContent === 'X' && two.textContent === 'X' && three.textContent === 'X') {
        xWins()
    } else if (gameBoard.length === 9) {
        tie()
    }
}

let winner = document.createElement('div');
let header = document.querySelector('.header');

function oWins () {
    instructions.style.cssText = 'display: none';
    winner.textContent = getOWinnerName()
    winner.style.cssText = 'display: flex';
    header.appendChild(winner)
    gameOver();
}

function xWins () {
    instructions.style.cssText = 'display: none';
    winner.textContent = getXWinnerName()
    winner.style.cssText = 'display: flex';
    header.appendChild(winner)
    gameOver();
}

function tie() {
    instructions.style.cssText = 'display: none';
    winner.textContent = 'Game ended in a Tie'
    winner.style.cssText = 'display: flex';
    header.appendChild(winner)
    gameOver();
}

function getXWinnerName() {
    if (valdiatePlayer1Symbol() === 'X') {
        return `${getPlayerOneName.value} Wins!`
    } else {
        return `${getPlayerTwoName.value} Wins!`
    }
}

function getOWinnerName() {
    if (valdiatePlayer1Symbol() === 'O') {
        return `${getPlayerOneName.value} Wins!`
    } else {
        return `${getPlayerTwoName.value} Wins!`
    }
}

function gameOver () {
    let homePage = document.createElement('button');
    homePage.textContent = "Home Page";
    homePage.addEventListener('click', function () {
        location.reload();
    })
    header.appendChild(homePage);
    let playAgain = document.createElement('button')
    playAgain.textContent = "Play Again";
    playAgain.addEventListener('click', function () {
        boardSpace.forEach(space => {
            space.textContent = ''
        })
        instructions.style.cssText = 'display: flex';
        this.style.cssText = 'display: none';
        homePage.style.cssText = 'display: none';
        winner.style.cssText = 'display: none';
        displayBoard();
    })
    header.appendChild(playAgain);
    gameBoard = []
}

//Player Creation

const Player = (name, symbol) => {
    const getName = name;
    const getSymbol = symbol;
    return {getName, getSymbol}
}

// Validations

 const getPlayerOneName = document.querySelector('.playerOneName');
 let getPlayerTwoName = document.querySelector('.playerTwoName');
 let symbolX = document.querySelector('.x');
 let symbolO = document.querySelector('.o');

 function validateNames() {
     if ((getPlayerOneName.value.length === 0) || (getPlayerTwoName.value.length === 0)) {
         alert('Please fill out player names before proceeding to the game');
         return 'error'
     } else {
         return
     }
 }

 function valdiatePlayer1Symbol() {
    if(document.querySelector('.x').checked) {
         return 'X';
    } else if (document.querySelector('.o').checked) {
         return 'O'
    } else {
        alert('Please select a symbol before proceeding to the game')
        return 'error'
    }
 }

 function valdiatePlayer2Symbol() {
    if(document.querySelector('.x').checked) {
         return 'O';
    } else if (document.querySelector('.o').checked) {
         return 'X'
    }
 }


 