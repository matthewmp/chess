import Board from './classes/board';
import * as vision from './vision_training/coordinates';
// Initialize Board
const board = new Board();
board.render();

console.log(board);



console.log(vision.getRandomSquare(board.board));