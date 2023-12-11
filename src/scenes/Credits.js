class Credits extends Phaser.Scene {
    constructor() {
        super("creditsScene");
    }

    create(){
        this.gameoverscreen = this.add.tileSprite(0, 0, 800, 600, 'gameover').setOrigin(0,0); 

        this.creditstext = this.add.bitmapText(350, game.config.height-550, 'font', 'Credits').setScale(0.37);

        //adding keys for going back to game over screen 
        keyB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyB)){
            this.sound.play('click'); 
            this.scene.start('winScene'); 
        }
    }
} 