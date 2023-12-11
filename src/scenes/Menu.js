class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene"); 
    }

    create(){
        this.menuscreen = this.add.tileSprite(0, 0, 800, 600, 'menuscreen').setOrigin(0, 0); 

        const emitter = this.add.particles(790, game.config.height-275, 'heart', {
            speed: 100,
            lifespan: 3000,
            frequency: 100, 
            gravityY: -200
        });

        //adding keys for going to the tutorial and starting the game 
        keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T); 
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); 

        //adding text for the menu screen 
        this.menucontrolsText = this.add.bitmapText(285, game.config.height-120, 'font', 'Press T for tutorial').setScale(0.35); 
        this.menustartText =  this.add.bitmapText(220, game.config.height-90, 'font', 'Press Space bar to start').setScale(0.45); 
        
        this.screen = this.physics.add.sprite(0, 0, 'screen').setOrigin(0, 0);  

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