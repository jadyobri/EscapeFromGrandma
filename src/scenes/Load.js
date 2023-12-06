class Load extends Phaser.Scene{
    constructor() {
        super("loadScene");
    }
    preload(){
        //load sprites 
        this.load.path = './assets/'
        this.load.image('menuscreen', 'MenuScreen.PNG'); 
        this.load.image('gameover', 'GameOver.PNG'); 
        this.load.image('clouds', 'pixilart-drawing-clouds.png'); 
        this.load.image('table', 'table.png'); 
        this.load.image('chair', 'finalchair.png')
        this.load.image('lamp', 'lamp.png'); 
        this.load.image('rock', 'rock.png'); 
        this.load.image('gun', 'Gun.png'); 

        this.load.spritesheet('character', 'FinalUngratefulgrandchild.png', {
            frameWidth: 95, 
            frameHeight: 96
        }); 
        this.load.image('invisible', "one_way_wall.png");
        this.load.image('allscenes', 'Scenes.png'); 
        this.load.spritesheet('grandma', 'FinalEvilgrandma.png', {
            frameWidth: 95, 
            frameHeight: 96, 
        })

        //load audio 
        this.load.audio('jump', 'jumping.wav'); //Lefty_Studios
        this.load.audio('click', 'click.wav'); //credits listed in IC Endless Runner 
        this.load.audio('restart', 'restart.wav'); //will add credits at a later date 
        this.load.audio('background', 'arcademusic.mp3'); //music by Luca Di Alessandro (Pixabay)

    } 

    create(){
        //animation sequences 
        this.anims.create({ 
            key: 'running-left', 
            frameRate: 3, 
            frames: this.anims.generateFrameNumbers('character', {
                start: 1, 
                end: 2, 
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
            key: 'jumping-right', 
            frameRate: 3, 
            //repeat: 1, 
            frames: this.anims.generateFrameNumbers('character', {
                frames: [0, 14,4] 
            }), 
        })
        this.anims.create({ 
            key: 'jumping-left', 
            frameRate: 3, 
            //repeat: 1, 
            frames: this.anims.generateFrameNumbers('character', {
                frames: [12,2,1] 
            }), 
        })
        

        //at beginning of level play startled animation and you can only move only the aimation ends
        this.anims.create({ 
            key: 'startled-right', 
            frameRate: 3, 
            frames: this.anims.generateFrameNumbers('character', {
                start: 0, 
                end: 3 
            }), 
        })
        this.anims.create({ 
            key: 'idle-left', 
            frameRate: 3, 
            frames: this.anims.generateFrameNumbers('character', {
                start: 12, 
                end: 12
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
            frameRate: 5, 
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
        this.anims.create({
            key: 'grandma-idle-right', 
            frameRate: 3, 
            frames: this.anims.generateFrameNumbers('grandma', {
                start: 9, 
                end: 9
            })
        })
        this.anims.create({
            key: 'grandma-walking-right', 
            frameRate: 3, 
            frames: this.anims.generateFrameNumbers('grandma', {
                start: 0, 
                end: 1, 
            })
        })
        this.anims.create({
            key: 'grandma-kissing-right', 
            frameRate: 3, 
            frames: this.anims.generateFrameNumbers('grandma', {
                start: 1, 
                end: 2, 
            })
        })

        this.scene.start("menuScene");
    }

    
} 