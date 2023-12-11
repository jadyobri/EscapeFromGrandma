class Win extends Phaser.Scene {
    constructor() {
        super("winScene");
    }

    create(){
        this.gameoverscreen = this.add.tileSprite(0, 0, 800, 600, 'gameover').setOrigin(0,0); 

        //adding keys for restarting the game and going back to menu 
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);

        //adding text for win screen 
        this.wintext = this.add.bitmapText(350, game.config.height-550, 'font', 'You Won!').setScale(0.37);
        this.success = this.add.bitmapText(120, game.config.height-450, 'font', "YOU ESCAPED GRANDMA'S HOUSE").setScale(0.6); 
        this.rkeytext = this.add.bitmapText(295, game.config.height-380, 'font', 'Press R to restart').setScale(0.37);
        this.mkeytext = this.add.bitmapText(280, game.config.height-340, 'font', 'Press M to go to Menu').setScale(0.37);
        this.ckeytext = this.add.bitmapText(270, game.config.height-300, 'font', 'Press C to go to Credits').setScale(0.37);
        
        this.player = this.physics.add.sprite(650, game.config.height-180, 'character').setScale(1.5);
        this.player.setFlipX(true); 
    
        this.screen = this.physics.add.sprite(0, 0, 'screen').setOrigin(0, 0);  

    }

    update(){
        this.player.anims.play('running-right', true); 
        this.player.setVelocityX(-100); 
        this.physics.world.wrap(this.player);
        
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            playerDirection = 'right'
            this.sound.play('restart'); 
            this.scene.start('playScene');   
        } 
        if(Phaser.Input.Keyboard.JustDown(keyM)){
            playerDirection = 'right'
            this.sound.play('click'); 
            this.scene.start('menuScene'); 
        }

        if(Phaser.Input.Keyboard.JustDown(keyC)){
            this.sound.play('click'); 
            this.scene.start('creditsScene')
        }
    }
} 