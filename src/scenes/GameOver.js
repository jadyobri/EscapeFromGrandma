class GameOver extends Phaser.Scene {
    constructor(){
        super ("gameOverScene");
    }

    create(){
        this.gameoverscreen = this.add.tileSprite(0, 0, 800, 600, 'gameover').setOrigin(0,0); 
        
        //adding keys for restarting the game and going back to menu 
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        this.ungreat = this.sound.add('ungrateful',{volume:2});
        this.ungreat.play();

        //adding game over text 
        this.gameovertext = this.add.bitmapText(350, game.config.height-550, 'font', 'Game Over').setScale(0.37);
        this.ungrateful = this.add.bitmapText(175, game.config.height-450, 'font', 'UNGRATEFUL GRANDCHILD').setScale(0.6)
        this.ungrateful.tint = 0x6F2DA8; 
        this.rkeytext = this.add.bitmapText(295, game.config.height-380, 'font', 'Press R to restart').setScale(0.37);
        this.mkeytext = this.add.bitmapText(280, game.config.height-340, 'font', 'Press M to go to Menu').setScale(0.37);

        this.player = this.physics.add.sprite(650, game.config.height-180, 'character').setScale(1.5);
        this.player.setFlipX(true); 
        this.grandma = this.physics.add.sprite(745, game.config.height-195, 'grandma').setScale(2); 

        this.screen = this.physics.add.sprite(0, 0, 'screen').setOrigin(0, 0);  
    }

    update(){

        this.player.anims.play('running-right', true); 
        this.grandma.anims.play('grandma-walking-right', true); 
        this.grandma.setVelocityX(-100); 
        this.player.setVelocityX(-100); 
        this.physics.world.wrap(this.player); 
        this.physics.world.wrap(this.grandma); 


        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.ungreat.stop();
            playerDirection = 'right'
            this.sound.play('restart'); 
            this.scene.start('playScene');   
        } 
        if(Phaser.Input.Keyboard.JustDown(keyM)){
            this.ungreat.stop();
            playerDirection = 'right'
            this.sound.play('click'); 
            this.scene.start('menuScene'); 
        }
    }
} 