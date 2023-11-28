class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene"); 
    }

    create(){
        
        this.menuscreen = this.add.tileSprite(0, 0, 800, 600, 'menuscreen').setOrigin(0, 0); 
        keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T); 
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); 
        //testing animation sequences 
        //this.player = this.physics.add.sprite(50, 50, 'character', 1).setScale(1.5); 
        //this.player.anims.play('struggling-right'); 
    }

    update(){
        //console.log('????')
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start('playScene'); 
        }
        if(Phaser.Input.Keyboard.JustDown(keyT)){

            this.scene.start('tutorialScene'); 
        }
        
    }
} 