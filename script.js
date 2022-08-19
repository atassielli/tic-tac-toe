const gameBoard = (() => {
    const board = { 
        entries: ['x', 'x'],
        year: 5
    };
    return board.entries
})();

const page = document.querySelector('.container')

const displayController = (() => {
    const display = document.createElement('div');
    display.textContent = `'${gameBoard}'`
    display.classList.add('test')
    page.appendChild(display);
})();

//const Player = (label, symbol) => {
//    const getName // write an html input for getting the players name and have it map to name 
 //   const getSymbol // write an html input for getting the player symbol and have it map to symbol 

// Validations

 let getPlayerOneName = document.querySelector('.playerOneName');
 let getPlayerTwoName = document.querySelector('.playerTwoName');
 let options = document.getElementsByClassName('.symbol');
 let symbolX = document.querySelector('.x');
 let symbolO = document.querySelector('.o');

