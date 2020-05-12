export default class Event{
    constructor(board){
        this.board = board;
        this.canvas = null;
        this._init();
        this.x = null;
        this.y = null;
        this.currentSquare = null;
        this.indices = [];
    }

    _init(){
        console.log('EvtB: ', this.board)
        this.canvas = document.getElementById('canvas');
        window.addEventListener('click', (event) => {
            this.getMousePos(event)
        })
    }

    getMousePos(event){
        const rect = this.canvas.getBoundingClientRect();
        // console.log(event.clientX - rect.left, event.clientY - rect.top)
        this.x = event.clientX - rect.left;
        this.y = event.clientY - rect.top;
        this._findCurrentSquare();
        console.log(ev)
    }

    _setCurrentSquare(square){
        this.currentSquare = square;
    }

    _setCurrentIndices(indices){
        this.indices = indices;
    }

    _findCurrentSquare(){
        this.board.forEach((row, rowIndex) => {
            row.forEach((square, colIndex) => {
                if(this.x > square.x && this.x < (square.x + square.size) &&
                   this.y > square.y && this.y < (square.y + square.size)) {
                       this._setCurrentSquare(square);
                       this._setCurrentIndices([rowIndex, colIndex]);
                   }
            })
        })
    }
}