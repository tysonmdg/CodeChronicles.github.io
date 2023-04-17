/**
 * Escena de Título.
 * @extends Phaser.Scene
 */
import LevelSelector from "./LevelSelector.js";
import ControlsScene from "./ControlsScene.js";
import HistoryScene from "./HistoryScene.js";

export default class MenuScene extends Phaser.Scene {
	/**
	 * Escena principal.
	 * @extends Phaser.Scene
	 */
	constructor() {
		super({ key: 'menuScene' });    
        this.levels = [ 
            new LevelSelector(),
            new ControlsScene()
        ];  
	}

    preload(){
        this.load.image('button', 'assets/img/button.png');
        this.load.image('icon', 'assets/img/web/CodeChronicles.png');
        this.load.image('created', 'assets/img/web/Game-created-by.png');
        this.load.image('git','assets/img/git.png');
    }

    create(){
        this.scale=0.3;

        
        //BUTTON START
        this.buttonSTART = this.add.image(SCREEN_MAX_WIDTH/2+100,200,'button');
        this.buttonSTART.setDepth(998);
        this.buttonSTART.setScale(this.scale);
        this.buttonSTART.setInteractive();
        this.buttonSTART.on('pointerup', function () {this.scene.start('levelSelector')}, this);
        this.textSTART=this.add.text(SCREEN_MAX_WIDTH/2+50,185, "START",{ fontStyle: 'strong',font: '30px Arial', fill: '#ffffff' });
        this.textSTART.setDepth(999);

        //BUTTON CONTROL
        this.buttonCONTROLS = this.add.image(SCREEN_MAX_WIDTH/2+100,300,'button');
        this.buttonCONTROLS.setDepth(998);
        this.buttonCONTROLS.setScale(this.scale);
        this.buttonCONTROLS.setInteractive();
        this.buttonCONTROLS.on('pointerup', function () {this.scene.start('ControlsScene')}, this);
        this.textCONTROL=this.add.text(SCREEN_MAX_WIDTH/2+20,285, "CONTROLS",{ fontStyle: 'strong',font: '30px Arial', fill: '#ffffff' });
        this.textCONTROL.setDepth(999);

        //BUTTON HISTORY
        this.buttonHISTORY = this.add.image(SCREEN_MAX_WIDTH/2+100,400,'button');
        this.buttonHISTORY.setDepth(998);
        this.buttonHISTORY.setScale(this.scale);
        this.buttonHISTORY.setInteractive();
        this.buttonHISTORY.on('pointerup', function () {this.scene.start('HistoryScene')}, this);
        this.textHISTORY=this.add.text(SCREEN_MAX_WIDTH/2+40,385, "HISTORY",{ fontStyle: 'strong',font: '30px Arial', fill: '#ffffff' });
        this.textHISTORY.setDepth(999);

        //BUTTON GITYCREATORS
        this.buttonGITYCREATORS = this.add.image(SCREEN_MAX_WIDTH/2+100,500,'button');
        this.buttonGITYCREATORS.setDepth(998);
        this.buttonGITYCREATORS.setScale(this.scale);
        this.buttonGITYCREATORS.setInteractive();
        this.buttonGITYCREATORS.on('pointerup', function () {this.redirectToWeb()}, this);
        this.textGITYCREATORS=this.add.text(SCREEN_MAX_WIDTH/2+55,470, "GITHUB &\nCREATORS",{ fontStyle: 'strong',font: '25px Arial', fill: '#ffffff' });
        this.textGITYCREATORS.setDepth(999);
        this.git = this.add.image(SCREEN_MAX_WIDTH/2+30,500,'git');
        this.git.setDepth(999);
        this.git.setScale(this.scale-0.2);

        //CodeChronicles
        this.icon = this.add.image(SCREEN_MAX_WIDTH/2+100,SCREEN_MAX_HEIGHT,'icon');
        this.icon.setDepth(999);
        this.icon.setScale(this.scale+0.3);
        this.created = this.add.image(SCREEN_MAX_WIDTH/2+100,SCREEN_MAX_HEIGHT-50,'created');
        this.created.setDepth(999);
        this.created.setScale(this.scale+0.3);

    }

    update(){
        super.update();
    }

    redirectToWeb() {
        // Redirige a una página web
        window.open('https://github.com/tysonmdg/CodeChronicles.github.io', '_blank');
    }
}
    
    
