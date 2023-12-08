class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene"); 
    }

    create(){
        this.menuscreen = this.add.tileSprite(0, 0, 800, 600, 'menuscreen').setOrigin(0, 0); 

        //adding keys for going to the tutorial and starting the game 
        keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T); 
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); 

        //adding text for the menu screen 
        this.menucontrolsText = this.add.text(250, game.config.height-90, 'Use cursor keys to move', { fontSize: '25px', fill: '#fff' });
        this.menustartText =  this.add.text(235, game.config.height-60, 'Press Space bar to start', { fontSize: '25px', fill: '#fff' });
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start('playScene'); 
        }
        if(Phaser.Input.Keyboard.JustDown(keyT)){
            this.scene.start('tutorialScene'); 
        }

        
    }
} 