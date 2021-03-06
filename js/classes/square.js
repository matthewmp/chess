export default class Square{
    constructor(row, col, num, letter){
        this.row = row + 1;
        this.col = col;
        this.color = this._setColor();
        this.number = num;
        this.letter = String.fromCharCode(letter);
        this.x = null;
        this.y = null;
        this.size = null;
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

    setPosition(x, y){
        this.x = x;
        this.y = y;
    }

    setSize(size){
        this.size = size;
    }
}