/**
 * Escena de Título.
 * @extends Phaser.Scene
 */

import Utils from "../Utils.js"
export default class Nivel extends Phaser.Scene {
	/**
	 * Escena principal.
	 * @extends Phaser.Scene
	 */

	constructor(key, ctrl) {
		super({ key: key });
		this.bg 	= null;
		this.player = null;
		this.ctrl	= ctrl;
		this.key = key;
		
	}
	
	/**
	 * Cargamos todos los assets que vamos a necesitar
	*/
	preload(){
		//this.load.image('background', getImg("universeBg"));
		this.load.spritesheet("spaceship",Utils.getImgV("spaceship"), {frameWidth: SPACESHIP_WIDTH, frameHeight: SPACESHIP_HEIGHT});
		this.st	= this.ctrl.levelSettings[this.key];
		this.planet = this.st["planet"];
	}
	
	/**
	 * Creación de los elementos de la escena principal de juego
	*/
	create() {
		Utils.createKeyBindings(this);
		this.planetSettings = this.ctrl.planetSettings[this.planet]
		this.introDone   	= false;
		this.playerWon		= false;
		this.levelCleared   = false;
		this.bullets=0;


        /*
		//Pintamos un botón de Empezar
		sprite.setInteractive(); // Hacemos el sprite interactivo para que lance eventos

		// Escuchamos los eventos del ratón cuando interactual con nuestro sprite de "Start"
	    sprite.on('pointerdown', pointer    => { console.log("pulsando"); });
	    sprite.on('pointerup', pointer      => { this.scene.start('animation'); /*Cambiamos a la escena de juego });
		sprite.on('pointerover', ()         => { console.log("hola") });
	    sprite.on('pointerout', ()          => { console.log("adios") });

		//textos:
		text = this.add.text(x,y,message);
		text.setFont("Times New Roman");
		text.setFontSize(50);
		text.setStroke(20); //borde
		text.setStroke(hexColor,size); //color borde
		text.setFill(hexcolor);
		text.setShadow(posX,posY,hexcolor,alpha);

		//importante:
		text.setScrollFactor(0,0);

		//camara:
		//...

		//bitmapTexts:
		scene.load.bitmapFont("imgKey","path/to/img.png","path/to/xml");
		this.add.bitmapText(x,y,fontName,message,size);

		//external fonts:
		this.load.script()
        */
	}
	
	finishLevel(){
		console.log("Level '" + this.scene.key + "' cleared.");
		this.sp.reset();
		this.scene.stop(this.key);
		this.scene.resume("levelSelector");	
	}
	/**
	* Loop del juego
	*/
    update(){ 
		super.update();
	
		//cerrar escena:
		//this.teclas = this.input.keyboard.addKeys('ENTER');
		//if (this.teclas.ENTER.isDown) {this.finishLevel(); }
		if(this.enter.isDown){ this.finishLevel(); }
	}

	playerIsDead() {return false; } //to be overriden by the subclasses
	victoryCondition(){ return false; } //to be overriden by the subclasses

	checkEndOfGame(){
		this.playerWon = this.victoryCondition();
		return this.playerIsDead() || this.playerWon;
	}
}