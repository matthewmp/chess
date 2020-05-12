import Board from './classes/board';
import Coordinates from './vision_training/coordinates';
import Event from './Event';

// Initialize Board
const board = new Board();
board.render();
console.log(board)

// Initalize Event
window.ev = new Event(board.board);



// console.log(vision.getRandomSquare(board.board));
const coordinates = new Coordinates(board);
// console.log(coordinates)

