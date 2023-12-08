class Win extends Phaser.Scene {
    constructor() {
        super("winScene");
    }

    create(){
        this.gameoverscreen = this.add.tileSprite(0, 0, 800, 600, 'gameover').setOrigin(0,0); 

        //adding keys for restarting the game and going back to menu 
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

        //adding text for win screen 
        this.wintext = this.add.text(350, game.config.height-550, 'You Won!', { fontSize: '25px', fill: '#fff' });
        this.rkeytext = this.add.text(275, game.config.height-450, 'Press R to restart', { fontSize: '20px', fill: '#fff' });
        this.mkeytext = this.add.text(275, game.config.height-400, 'Press M to go to Menu', { fontSize: '20px', fill: '#fff' });
    }

    update(){
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
    }
} 