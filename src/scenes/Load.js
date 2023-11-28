class Load extends Phaser.Scene{
    constructor() {
        super("loadScene");
    }
    preload(){
        this.load.path = './assets/'
        this.load.image('menuscreen', 'MenuScreen.PNG'); 
        console.log('here'); 
        this.load.spritesheet('character', 'Ungratefulgrandchild1.png', {
            frameWidth: 95, 
            frameHeight: 96
        }); 
        console.log('character'); 
    } 

    create(){
        this.anims.create({ //missing running-right 
            key: 'running-left', 
            frameRate: 3, 
            //repeat: 1, 
            frames: this.anims.generateFrameNumbers('character', {
                start: 1, 
                end: 2 
            }), 
        })
        this.anims.create({ //missing idle left 
            key: 'idle-right', 
            frameRate: 3, 
            frames: this.anims.generateFrameNumbers('character', {
                start: 0, 
                end: 0 
            }), 
        })
        this.anims.create({ //no need for startled left 
            key: 'startled-right', 
            frameRate: 3, 
            frames: this.anims.generateFrameNumbers('character', {
                start: 0, 
                end: 3 
            }), 
        })
        this.anims.create({ //missing idle left 
            key: 'idle-right', 
            frameRate: 3, 
            frames: this.anims.generateFrameNumbers('character', {
                start: 0, 
                end: 0 
            }), 
        })
        this.anims.create({ //missing idle left 
            key: 'struggling-left', 
            frameRate: 3, 
            frames: this.anims.generateFrameNumbers('character', {
                start: 5, 
                end: 7 
            }), 
        })
        this.anims.create({ //missing idle left 
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

        cursors = this.input.keyboard.createCursorKeys();
        this.scene.start("menuScene");
    }

    
} 