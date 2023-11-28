class Load extends Phaser.Scene{
    constructor() {
        super("loadScene");
    }
    preload(){
        this.load.path = './assets/'
        this.load.image('menuscreen', 'MenuScreen.PNG'); 
        this.load.spritesheet('character', 'Ungratefulgrandchild.png', {
            frameWidth: 95, 
            frameHeight: 96
        }); 
        this.load.image('mainscreen', 'main.png'); 
        this.load.spritesheet('grandma', 'Evilgrandma.png', {
            frameWidth: 95, 
            frameHeight: 96, 
        })

    } 

    create(){
        //missing some animation sequences for character 
        this.anims.create({ 
            key: 'running-left', 
            frameRate: 3, 
            //repeat: 1, 
            frames: this.anims.generateFrameNumbers('character', {
                start: 1, 
                end: 2 
            }), 
        })
        this.anims.create({ 
            key: 'running-right', 
            frameRate: 3, 
            //repeat: 1, 
            frames: this.anims.generateFrameNumbers('character', {
                start: 14, 
                end: 15 
            }), 
        })
        this.anims.create({ 
            key: 'idle-right', 
            frameRate: 3, 
            frames: this.anims.generateFrameNumbers('character', {
                start: 0, 
                end: 0 
            }), 
        })
        this.anims.create({ 
            key: 'startled-right', 
            frameRate: 3, 
            frames: this.anims.generateFrameNumbers('character', {
                start: 0, 
                end: 3 
            }), 
        })
        this.anims.create({ 
            key: 'idle-right', 
            frameRate: 3, 
            frames: this.anims.generateFrameNumbers('character', {
                start: 0, 
                end: 0 
            }), 
        })
        this.anims.create({ 
            key: 'struggling-left', 
            frameRate: 3, 
            frames: this.anims.generateFrameNumbers('character', {
                start: 5, 
                end: 7 
            }), 
        })
        this.anims.create({ //missing idle left 
            key: 'struggling-right', 
            frameRate: 3, 
            frames: this.anims.generateFrameNumbers('character', {
                frames: [5, 5, 5, 10, 11, 11, 11]
            }), 
        })

        this.scene.start("menuScene");
    }

    
} 