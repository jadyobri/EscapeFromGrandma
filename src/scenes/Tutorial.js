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
        
        //adding tutorial text 
        this.tutorialText = this.add.text(350, game.config.height-550, 'Tutorial', { fontSize: '25px', fill: '#fff' });
        this.rightkey = this.add.text(250, game.config.height-450, 'Use right key to move right', { fontSize: '20px', fill: '#fff' });
        this.leftkey = this.add.text(250, game.config.height-400, 'Use left key to move left', { fontSize: '20px', fill: '#fff' });
        this.upkey = this.add.text(250, game.config.height-350, 'Use up key to jump', { fontSize: '20px', fill: '#fff' });
        this.warning = this.add.text(215, game.config.height-300, 'Avoid Grandma at all costs!', { fontSize: '25px', fill: '#fff' });
        this.menutext = this.add.text(300, game.config.height-175, 'Press m to go back', { fontSize: '20px', fill: '#fff' });
    }
    update(){
        //start menu scene 
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            this.scene.start('menuScene');   
        } 
    }
} 