class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene"); 
    }

    create(){
        
        this.menuscreen = this.add.tileSprite(0, 0, 800, 600, 'menuscreen').setOrigin(0, 0); 
        keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T); 
        //testing animation sequences 
        //this.player = this.physics.add.sprite(50, 50, 'character', 1).setScale(1.5); 
        //this.player.anims.play('struggling-right'); 
    }

    update(){
        //this.input.keyboard.on("keydown", () => { //press any key to start 
        //    this.scene.start("playScene");
        //});
        if(Phaser.Input.Keyboard.JustDown(keyT)){
            this.scene.start('tutorialScene'); 
        }
        
    }
} 