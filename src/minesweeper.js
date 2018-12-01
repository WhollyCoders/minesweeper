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
}

// console.log(generatePlayerBoard(3,3));
// console.log(generatePlayerBoard(5,5));
console.log(generatePlayerBoard(10,10));
