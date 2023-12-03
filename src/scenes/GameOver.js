class GameOver extends Phaser.Scene {
    constructor(){
        super ("gameOverScene");
    }

    create(){
        this.gameoverscreen = this.add.tileSprite(0, 0, 800, 600, 'gameover').setOrigin(0,0); 
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            playerDirection = 'right'
            this.scene.start('playScene');   
        } 
        if(Phaser.Input.Keyboard.JustDown(keyM)){
            playerDirection = 'right'
            this.scene.start('menuScene'); 
        }
    }
} 