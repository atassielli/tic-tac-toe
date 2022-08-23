const gameBoard = (() => {
    const board = { 
        entries: [],
    };
    return board.entries
})();

const displayController = (() => {
})();

//Player Creation

const Player = (name, symbol) => {
    const getName = () => name;
    const getSymbol = () => symbol;
    return {getName, getSymbol}
}

let beginGame = document.querySelector('.beginGame');
beginGame.addEventListener('click', () => {
    console.log(getPlayerOneName.value)
    console.log(getPlayerTwoName.value)
    validateNames();
    valdiateSymbol();
})


function makePlayer () {
    let player1 = Player(`'${getPlayerOneName}'`, `${getSymbolPlayer1()}`);
    let player2 = Player(`${getPlayerTwoName}`, `${getSymbolPlayer2()}`);
}


// Validations

 const getPlayerOneName = document.querySelector('.playerOneName');
 let getPlayerTwoName = document.querySelector('.playerTwoName');
 let symbolX = document.querySelector('.x');
 let symbolO = document.querySelector('.o');
 let getPlayerOneSymbol;

 function validateNames() {
     if ((getPlayerOneName.value.length === 0) || (getPlayerTwoName.value.length === 0)) {
         alert('Please fill out player names before proceeding to the game');
     } else {
         return
     }
 }

 function valdiateSymbol() {
    if(document.querySelector('.x').checked) {
         return 'x';
    } else if (document.querySelector('.o').checked) {
         return 'o'
    } else {
        alert('Please select a symbol before proceeding to the game')
        return
    }
 }
