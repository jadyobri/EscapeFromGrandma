class Tutorial extends Phaser.Scene {
    constructor () {
        super ("tutorialScene");
    }

    preload(){
        this.load.image('tutorial', './assets/Controls.PNG'); 
    } 
    create(){
        this.background = this.add.tileSprite(0, 0, 800, 600, 'tutorial').setOrigin(0,0); 
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        //add text (and high score)
    }
    update(){
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start('menuScene');   
        } 
    }
} 