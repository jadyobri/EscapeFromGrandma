class Tutorial extends Phaser.Scene {
    constructor () {
        super ("tutorialScene");
    }

    preload(){
        this.load.image('tutorial', './assets/Controls.PNG'); 
    } 

    create(){
        this.background = this.add.tileSprite(0, 0, 800, 600, 'tutorial').setOrigin(0,0); 

        //particle emitter 
        this.add.particles(675, game.config.height-275, 'heart', {
            speed: 100,
            lifespan: 3000,
            frequency: 100, 
            gravityY: -200
        });

        //added key to go back to menu 
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        
        //adding tutorial text 
        this.tutorialText = this.add.bitmapText(350, game.config.height-565, 'font', 'Tutorial').setScale(0.5); 
        this.rightkey = this.add.bitmapText(250, game.config.height-450, 'font', 'Use right key to move right').setScale(0.4); 
        this.leftkey = this.add.bitmapText(250, game.config.height-400, 'font', 'Use left key to move left').setScale(0.4);
        this.upkey = this.add.bitmapText(250, game.config.height-350, 'font', 'Use up key to jump').setScale(0.4);
        this.warning = this.add.bitmapText(230, game.config.height-300, 'font', 'Avoid Grandma at all costs!').setScale(0.45);
        //add F key text 
        this.menutext = this.add.bitmapText(300, game.config.height-200, 'font', 'Press m to go back').setScale(0.35); 
    } 

    update(){
        //start menu scene 
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start('menuScene');   
        } 
    }
} 