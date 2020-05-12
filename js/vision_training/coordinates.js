export const randomNum = () => {
    return Math.floor(Math.random() * 8);
}

export const getRandomSquare = (board, attempt=0) => { 
    // Too many attempts with invalid number
    if(attempt > 10){
        alert('There is a problem in the software, please alert the developer');
        throw new Error('Function "randomNum" is generating numbers beyond its range.');
    }

    let x = randomNum();
    let y = randomNum();

    if(x > 7 || y > 7){
        console.warn('random number gerated is too large.')
        getRandomSquare(board, ++attempt);
    }
    console.log('B: ', board)
    console.log(board[x][y]);
}



