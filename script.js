//Game Controls

const gameBoard = (() => {
    const board = { 
        entries: [],
    };
    return board.entries
})();

const displayController = (() => {
})();

let beginGame = document.querySelector('.beginGame');
beginGame.addEventListener('click', () => {
    let player1 = Player(getPlayerOneName.value, valdiatePlayer1Symbol());
    let player2 = Player(getPlayerTwoName.value, valdiatePlayer2Symbol());
    validateNames();
    valdiatePlayer1Symbol();
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
        if (turnIndicator === `${getPlayerOneName.value} is Up, Select a Square`) {
            this.textContent = valdiatePlayer1Symbol()
        } else if (turnIndicator === `${getPlayerTwoName.value} is Up, Select a Square`) {
            this.textContent = valdiatePlayer2Symbol()
        }
        winCheck();
        changeTurn();
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
    } else {
        return
    }
}

let winner = document.createElement('div');
let header = document.querySelector('.header');

function oWins () {
    instructions.style.cssText = 'display: none';
    winner.textContent = 'O Wins';
    header.appendChild(winner)
    gameOver();
}

function xWins () {
    instructions.style.cssText = 'display: none';
    winner.textContent = 'X Wins';
    header.appendChild(winner)
    gameOver();
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
        boardSpace.textContent = ''
        displayBoard();
    })
    header.appendChild(playAgain);
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
        return
    }
 }

 function valdiatePlayer2Symbol() {
    if(document.querySelector('.x').checked) {
         return 'O';
    } else if (document.querySelector('.o').checked) {
         return 'X'
    }
 }


 
 //Change the instruction line to read the players name and state that it is their turn
 //When a square is clicked it takes the current players symbol and puts it on the square - Issue with making new players using factory and having the players be out of scope
 //Possibly make each square into an object that holds a clicked property and a symbol property, this could run the game to not allow players to click a spot that has already been taken 