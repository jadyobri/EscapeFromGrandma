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
        this.player.setSize(50,60); 
        
        //grandma 
        this.grandma = this.physics.add.sprite(game.config.width/4, game.config.height-135, 'grandma').setScale(2.25);
        this.grandma.setFlipX(true); 
        this.grandma.setCollideWorldBounds(true); 
        this.grandma.setImmovable(true); 
        this.grandma.setSize(50,60); 
        this.grandma.setOffset(15, 25); 

        //invisible wall 
        inviswall.setSize(game.config.width, inviswall.height);
        inviswall.setDisplaySize(game.config.width, inviswall.height);
        console.log(inviswall.width);
        inviswall.body.setImmovable(true);
        inviswall.setVisible(false);
        this.physics.add.collider(this.player, inviswall);

        //this.physics.add.sprite(12, game.config.height / 4, 'clouds').setScale(2); 

        //create cursor keys
        cursors = this.input.keyboard.createCursorKeys();

        // this.cameras.main.setBounds(0, 0, 3000, 600); 
        // this.cameras.main.startFollow(this.player, true, 0.25, 0.25, 150); 
        this.physics.world.setBounds(0, 0, 3000, 600); 

        this.cam = this.cameras.main; 
        this.cameras.main.setBounds(0, 0, 1000, 600); 
        this.cameras.main.startFollow(this.player, true, 0.25, 0.25, 150);


        this.physics.add.collider(this.player, this.grandma, (player, grandma) => {
            //.once('animationcomplete') does not work D: 
            this.player.anims.play('struggling-left'); 
            console.log(this.gameOver); 
            this.gameOver = true; 
            
        })

        this.player.setGravityY(300); 
    } 

    update(){

        this.checkCamBounds(this.player, this.cam);

        if(this.gameOver == false){
            //everything is flipped because of FlipX 
            this.checkCamBounds(this.player, this.cameras.main); 

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
            if (Phaser.Input.Keyboard.JustDown(cursors.up)){
                this.player.setVelocityY(-200);
                this.player.setVelocityX(0); 
                /*if(this.direction == true){
                    this.player.setVelocityX(0);
                    this.player.anims.play('jumping-right');
                } 
                else{
                    this.player.setVelocityX(0); 
                    this.player.anims.play('jumping-left'); 
                }*/ 
            }   

        } else{
            this.scene.start('gameOverScene');  
        }  
    }
    
    checkCamBounds(player, cam){
        // console.log( player.x, cam.x, cam.width)
        //console.log(player.x)
        //console.log(player.width/2)
        console.log(cam.width); 
        

        if(player.x + player.width/2 > 1000 && player.x + player.width/2 < 2000) { //right at the edge :O 
            //cam.setScoll(cam.setScrollX, cam.setScrollY); //(cam.setScrollX + cam.width, cam.scrollY)
            cam.setScroll(cam.scrollX + cam.width, cam.scrollY)
            cam.setBounds(0, 0, 2000, 600); 
            //player.x = cam.width + 214 + player.width/2; 
        } else if(player.x + player.width/2 > 2001){
            console.log('here!')
            cam.setScroll(cam.scrollX + cam.width, cam.scrollY)
            cam.setBounds(0, 0, 3000, 600); 
        }
        
    }

} 