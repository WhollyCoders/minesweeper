const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    //Generate blank board of a given size to hold guesses
    //Set generatePlayerBoard equal to an arrow function 
    //that accepts two parameters: numberOfRows and numberOfColumns.
    let board = [];
    for( let r = 0; r < numberOfRows; r++){
        row = [];
        for(let c = 0; c < numberOfColumns; c++){
            row.push(' ');
        }
        board.push(row);
    }
    return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    //set generateBombBoard equal to an arrow function that 
    //takes three parameters: numberOfRows, numberOfColumns, numberOfBombs.
    let board = [];
    for( let r = 0; r < numberOfRows; r++){
        row = [];
        for(let c = 0; c < numberOfColumns; c++){
            row.push(null);
        }
        board.push(row);
    }

    let numberOfBombsPlaced = 0;
    while(numberOfBombsPlaced < numberOfBombs){
        /* while loop has the potential to place bombs on top of 
        already existing bombs. This will be fixed when you learn 
        about control flow.*/

        let randomRowIndex = Math.floor(Math.random() * numberOfRows );

        // use the board variable and access the space at the generated 
        // randomRowIndex and randomColumnIndex. Set it equal to 'B'.

        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns );

        board[randomRowIndex][randomColumnIndex] = 'B';

        numberOfBombsPlaced++;

    }
    return board;
};

const printBoard = (board) => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
}
// console.log(generatePlayerBoard(3,3));
// console.log(generatePlayerBoard(5,5));
// console.log(generatePlayerBoard(10,10));

console.log('Player Board: ');
let playerBoard = generatePlayerBoard(3, 4);
console.log(printBoard(playerBoard));

console.log('Bomb Board: ');
let bombBoard = generateBombBoard(3, 4, 5);
console.log(printBoard(bombBoard));