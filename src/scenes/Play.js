class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create(){
        this.mainscreen = this.add.tileSprite(0, 0, 800, 600, 'mainscreen').setOrigin(0, 0); 
        this.player = this.physics.add.sprite(game.config.width/4, game.config.height-150, 'character').setScale(1.5);  //character starting position 
        this.player.setCollideWorldBounds(true); 
        this.player.setImmovable(true);

    } 
        

    update(){
        
    } 
}
