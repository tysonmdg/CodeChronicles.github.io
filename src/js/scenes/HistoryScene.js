/**
 * Escena de Título.
 * @extends Phaser.Scene
 */

//import MenuScene from "../scenes/MenuScene";


export default class HistoryScene extends Phaser.Scene {
	/**
	 * Escena principal.
	 * @extends Phaser.Scene
	 */
	constructor() {
		super({ key: 'HistoryScene' });    
	}

    preload(){
        this.load.image('cross', 'assets/img/cross.png');
        this.load.image('Xote', 'assets/img/Xote.jpeg');
    }

    create(){
        this.scale=0.03;

        
        //BUTTON CROSS
        this.buttonCROSS = this.add.image(SCREEN_MAX_WIDTH,100,'cross');
        this.buttonCROSS.setDepth(999);
        this.buttonCROSS.setScale(0.03);
        this.buttonCROSS.setInteractive();
        this.buttonCROSS.on('pointerup', function () {this.scene.start('menuScene')}, this);

        this.bg=this.add.image(SCREEN_MAX_WIDTH/2,SCREEN_MAX_HEIGHT/2,'Xote');
        this.bg.setDepth(1);
        this.bg.setScale(1);


    }

    update(){
        super.update();
    }


}