const createBoard = () => {
    const board = [];
    for(let i = 0; i < 8; i++){ // row
        for(let j = 0; j < 8; j++){ // column
            board.push(new Square(i, j))
        }
    }

    return board;
}

class Board{
    constructor(){
        this.board = createBoard();
        this.el = document.getElementById('canvas');
        this.ctx = this.el.getContext('2d');
        this.squareSize = 50;
        this.width = this.squareSize * 8;
        this.height = this.squareSize * 8;
    }

    render(){
        this.el.width = this.width;
        this.el.height = this.height;

        let yPos = 0;
        let xPos = 0;

        this.board.forEach((square, index) => {
            if(index % 8 === 0 && index !== 0){
                yPos += this.squareSize;
                xPos = 0;
            }

            let color = square.color === 'light' ? 'white' : 'green';
            this.ctx.fillStyle = color;


            this.ctx.fillRect(xPos, yPos, this.squareSize, this.squareSize);
            xPos += 50;
        })
    }
}

class Square{
    constructor(row, col){
        this.row = row + 1;
        this.col = col;
        this.color = this._setColor();
        // this.letter = getLetter(); 
    }

    _setColor(){
        if(this.row % 2 === 0){
            let color = this.col % 2 === 0 ? 'dark' : 'light';
            return color;           
        }

        if(this.row % 2 !== 0){
            let color = this.col % 2 === 0 ? 'light' : 'dark';
            return color;           
        }
    }
}

// initialize
const board = new Board();
board.render();