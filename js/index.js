import Board from './classes/board';
import Coordinates from './vision_training/coordinates';
import Event from './Event';
import ColorTrainer from './vision_training/color';

// Initialize Board
const board = new Board();
board.render();
console.log(board)

// Initalize Event
window.ev = new Event(board.board);

const coordinates = new Coordinates(board);

const colorTrainer = new ColorTrainer();


/* Refactor Menu later */
const btnColorTrainer = document.getElementById('btn-color-trainer')
btnColorTrainer.addEventListener('click', (e) => {
    colorTrainer.init();
})


