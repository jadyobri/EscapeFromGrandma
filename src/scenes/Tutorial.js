class Tutorial extends Phaser.Scene {
    constructor () {
        super ("tutorialScene");
    }

    preload(){
        this.load.image('gameover', 'GameOver.PNG'); 
    } 

    create(){
        this.background = this.add.tileSprite(0, 0, 800, 600, 'gameover').setOrigin(0,0); 

        //particle emitter 
        const emitter = this.add.particles(400, game.config.height, 'heart', {
            speed: 100,
            lifespan: 3000,
            frequency: 100, 
            gravityY: -200
        });

        //added key to go back to menu 
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
 
        this.rightKey = this.add.sprite(225, game.config.height-432, 'arrowkey'); 
        this.rightKey.rotation = Math.PI; 
        this.leftKey = this.add.sprite(225, game.config.height-385, 'arrowkey');
        this.upKey = this.add.sprite(225, game.config.height-337, 'arrowkey'); 
        this.upKey.rotation = Math.PI/2; 
        this.fkey = this.add.sprite(225, game.config.height-285, 'fkey'); 

        //adding tutorial text 
        this.tutorialText = this.add.bitmapText(350, game.config.height-565, 'font', 'Tutorial').setScale(0.5); 
        this.rightkey = this.add.bitmapText(250, game.config.height-450, 'font', 'Use right key to move right').setScale(0.37); 
        this.leftkey = this.add.bitmapText(250, game.config.height-400, 'font', 'Use left key to move left').setScale(0.37);
        this.upkey = this.add.bitmapText(250, game.config.height-350, 'font', 'Use up key to jump').setScale(0.37);
        this.fKey = this.add.bitmapText(250, game.config.height-300, 'font', 'Use F key to fire').setScale(0.37)
        this.gunwarning = this.add.bitmapText(250, game.config.height-265, 'font', 'You can fire a total of 6 times').setScale(0.37); 
        this.gunwarning3 = this.add.bitmapText(250, game.config.height-240, 'font', '(4 times for hardmode)').setScale(0.37); 
        this.gunwarning2 = this.add.bitmapText(250, game.config.height-215, 'font', 'after grabbing the gun').setScale(0.37); 
        this.keywarning = this.add.bitmapText(250, game.config.height-175, 'font', 'Shoot the evil mothballs and').setScale(0.37); 
        this.keywarning2 = this.add.bitmapText(250, game.config.height-150, 'font', 'collect all 3 hearts to escape').setScale(0.37); 
        
        const warning = this.add.bitmapText(240, game.config.height-95, 'font', 'Avoid Grandma at all costs!').setScale(0.37);
        const fx1 = warning.postFX.addGlow(0xFACADE, 0, 0, false, 0.1, 14);

        this.tweens.add({
            targets: fx1,
            outerStrength: 2,
            yoyo: true,
            loop: -1,
            ease: 'sine.inout'
        });
        
        //add F key text 
        this.menutext = this.add.bitmapText(308, game.config.height-515, 'font', 'Press m to go back').setScale(0.35); 
    } 

    update(){
        //start menu scene 
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            this.sound.play('click'); 
            this.scene.start('menuScene');   
        } 
    }
} 