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
        this.canvas = document.getElementById('canvas');
        window.addEventListener('click', (e) => {
            this.getMousePos(e)
        })
    }

    getMousePos(event){
        const rect = this.canvas.getBoundingClientRect();
        // console.log(event.clientX - rect.left, event.clientY - rect.top)
        this.x = event.clientX - rect.left;
        this.y = event.clientY - rect.top;
        this._setCurrentIndices();
        this._setCurrentSquare();
        console.log(ev)
    }

    _setCurrentSquare(){
        this.board.forEach(row => {
            row.forEach((square, index) => {
                
            })
        })
    }

    _setCurrentIndices(){

    }
}