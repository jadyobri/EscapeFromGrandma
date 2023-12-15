class Credits extends Phaser.Scene {
    constructor() {
        super("creditsScene");
    }

    create(){
        this.gameoverscreen = this.add.tileSprite(0, 0, 800, 600, 'gameover').setOrigin(0,0); 

        this.creditstext = this.add.bitmapText(350, game.config.height-550, 'font', 'Credits').setScale(0.37);

        //adding keys for going back to game over screen 
        keyB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);

        //adding text
        this.artcredits = this.add.bitmapText(200, game.config.height-475, 'font', 'Art Assets by Isha Chury').setScale(0.37);
        this.bckcredit = this.add.bitmapText(200, game.config.height-425, 'font', 'Background Music by Luca Di Alessandro').setScale(0.37);
        this.jumpcredit = this.add.bitmapText(200, game.config.height-375, 'font', 'Jump SFX by Lefty_Studios').setScale(0.37);
        this.restartcredit = this.add.bitmapText(200, game.config.height-325, 'font', 'Restart SFX by LorenzoTheGreat').setScale(0.37);
        this.clickcredit = this.add.bitmapText(200, game.config.height-275, 'font', 'Click SFX by MATRIXX_').setScale(0.37);

        this.bkeytext = this.add.bitmapText(270, game.config.height-95, 'font', 'Press B to go back').setScale(0.37); 

    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyB)){
            this.sound.play('click'); 
            this.scene.start('winScene'); 
        }
    }
} 