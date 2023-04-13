import Utils from "../../Utils.js"
import Background from "../Background.js"
export default class HorizontalBackground extends Background{
    constructor(scene){
        super(scene);

        // Carga la imagen 'planet' usando 'load'
        this.scene.load.image(this.scene.planet, Utils.getImgV(this.scene.planet));
        this.scene.load.image('platform', Utils.getImgH('moonPlatforms'));
    }

    create(){
        super.create();
    }

    launch(){
        if(!this.scene.introDone){
            this.auxSpeed += 0.035;
            if(this.scene.player.x != AST_INITIAL_X){
                this.scene.player.speedX += this.auxSpeed;
            }
            else{ 
                this.scene.player.speedX = 0;
                //this.scene.player.play("standingRight",true);
                this.scene.introDone = true;
            }
        }
    }
}
