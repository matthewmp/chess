import Square from './square';

const createBoard = () => {
    const board = [];
    for(let row = 0; row < 8; row++){
        
        const num = 8 - row;
        let asciiLetter = 97;

        let newArr = [];
        
        for(let col = 0; col < 8; col++){
            newArr.push(new Square(row, col, num, asciiLetter++));
        }

        board.push(newArr);
    }

    return board;
}

export default class Board{
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

        this.board.forEach((row, rowIndex) => {
            row.forEach((square, index) => {
                
                if(index % 8 === 0 && rowIndex !== 0){
                    yPos += this.squareSize;
                    xPos = 0;
                }

                let color = square.color === 'light' ? 'white' : 'green';
                this.ctx.fillStyle = color;

                square.setPosition(xPos, yPos);
                
                square.setSize(this.squareSize);

                this.ctx.fillRect(square.x, square.y, square.size, square.size);
                xPos += 50;
            });
        });
    }
}