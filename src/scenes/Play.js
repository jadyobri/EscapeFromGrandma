class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create(){

        this.gameOver = false; 
        this.mainscreen = this.add.tileSprite(0, 0, 3000, 600, 'allscenes').setOrigin(0, 0); 
        let inviswall = this.physics.add.sprite(game.config.width+600,game.config.height-60,'invisible');

        //player 
        this.player = this.physics.add.sprite(game.config.width/2, game.config.height-150, 'character').setScale(1.5);
        this.player.setFlipX(true); 
        this.player.setCollideWorldBounds(true); 
        this.player.setGravityY(300); 
        
        //grandma 
        this.grandma = this.physics.add.sprite(game.config.width/4, game.config.height-150, 'grandma').setScale(2.0);
        this.grandma.setFlipX(true); 
        this.grandma.setCollideWorldBounds(true); 
        this.grandma.setImmovable(true); 

        //invisible wall 
        inviswall.setSize(game.config.width, inviswall.height);
        inviswall.setDisplaySize(game.config.width, inviswall.height);
        console.log(inviswall.width);
        inviswall.body.setImmovable(true);
        inviswall.setVisible(false);
        this.physics.add.collider(this.player, inviswall);

        //create cursor keys
        cursors = this.input.keyboard.createCursorKeys();

        this.cameras.main.setBounds(0, 0, 3000, 600); 
        this.cameras.main.startFollow(this.player, true, 0.25, 0.25, 150); 
        this.physics.world.setBounds(0, 0, 3000, 600); 

        this.cam = this.cameras.main; 

        this.physics.add.collider(this.player, this.grandma, (player, grandma) => {
            //.once('animationcomplete') does not work D: 
            this.player.anims.play('struggling-left'); 
            console.log(this.gameOver); 
            this.gameOver = true; 
            
        })
       

    } 

    update(){

        if(this.gameOver == false){
            //everything is flipped because of FlipX 
            this.checkCamBounds(this.player, this.cam); 

            if (cursors.left.isDown){
                this.player.setVelocityX(-160);
                this.player.anims.play('running-right', true);
                this.direction = false; 
            }
            else if (cursors.right.isDown){
                this.player.setVelocityX(160);
                this.player.anims.play('running-left', true);
                this.direction = true; 
            }
            else
            {
                if(this.direction == true){
                    this.player.setVelocityX(0);
                    this.player.anims.play('idle-left');
                } 
                else{
                    this.player.setVelocityX(0); 
                    this.player.anims.play('idle-right'); 
                }
            }
            if (Phaser.Input.Keyboard.JustDown(cursors.up))
            {
                this.player.setVelocityY(-200);
                //this.jumped = 0;
            }   
        } else{
            this.scene.start('gameOverScene');  
        }  
    }
    
    checkCamBounds(player, cam){
        if(player.x + player.width/2 > cam.width + cam.scrollX) {
            cam.setScoll(cam.setScrollX + cam.width, cam.scrollY)
            player.x = cam.scrollX + player.width/2; 
        }
    }

} 