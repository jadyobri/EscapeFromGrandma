class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create(){
        this.mainscreen = this.add.tileSprite(0, 0, 800, 600, 'mainscreen').setOrigin(0, 0); 

    }
} 