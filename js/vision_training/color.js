export default class ColorTrainer{
    constructor(){
        this.view = document.getElementById('color-trainer');
        this.on = false;
    }

    init(){
        if(!this.on){
            this.switchToColorMode();
        } else {
            this.colorModeOff();
        }
    }

    switchToColorMode(){
        this.on = true;
        ev.setMode('color-selection');
        this.view.style.display = 'block';
    }

    colorModeOff(){
        this.on = false;
        ev.setMode();
        this.view.style.display = 'none';

    }
}