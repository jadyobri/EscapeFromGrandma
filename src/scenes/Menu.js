class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene"); 
    }

    preload(){
        this.load.path = './assets/'
        this.load.image('menuscreen', 'MenuScreen.PNG'); 
        console.log('here'); 
        this.load.spritesheet('character', 'Ungratefulgrandchild.png', {
            frameWidth: 95, 
            frameHeight: 94
        }); 
        console.log('character'); 
    } 

    create(){
        this.menuscreen = this.add.tileSprite(0, 0, 800, 600, 'menuscreen').setOrigin(0, 0); 
        this.player = this.physics.add.sprite(50, 50, 'character', 1).setScale(1.5); 
        
        this.anims.create({
            key: 'running', 
            frameRate: 3, 
            repeat: -1, 
            frames: this.anims.generateFrameNumbers('character', {
                start: 2, 
                end: 1 
            }), 
        })
        this.player.anims.play('running'); 
    }

    update(){
        
    }
} 