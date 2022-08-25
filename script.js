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
    console.log(getPlayerOneName.value)
    console.log(getPlayerTwoName.value)
    validateNames();
    valdiatePlayer1Symbol();
    valdiatePlayer2Symbol();
    makePlayer();
})

//Player Creation

const Player = (name, symbol) => {
    const getName = name;
    const getSymbol = symbol;
    return {getName, getSymbol}
}

function makePlayer () {
    let player1 = Player(getPlayerOneName.value, valdiatePlayer1Symbol());
    let player2 = Player(getPlayerTwoName.value, valdiatePlayer2Symbol());
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


 //when you click begin game it needs to hide the form and bring up the board game
 //Change the instruction line to read the players name and state that it is their turn
 //When a square is clicked it takes the current players symbol and puts it on the square
 //Possibly make each square into an object that holds a clicked property and a symbol property, this could run the game to not allow players to click a spot that has already been taken 