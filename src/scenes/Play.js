class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create(){
        //bounce sound 
        //reached the level of ungrateful grandchild 
        //kissing sound 

        //background music 
        //this.sound.play('background'); 

        //initial setup 
        this.gameOver = false; 
        this.fireability = false; 
        this.hit = false; 
        this.shooting = false; 

        this.mainscreen = this.add.tileSprite(0, 0, 3000, 600, 'allscenes').setOrigin(0, 0); 
        let inviswall = this.physics.add.sprite(game.config.width+600,game.config.height-60,'invisible');

        //obstacles
        this.table = this.physics.add.sprite(1500, game.config.height-125, 'table'); 
        this.chair1 = this.physics.add.sprite(1350, game.config.height-125, 'chair').setScale(0.75); 
        this.chair2 = this.physics.add.sprite(1750, game.config.height-125, 'chair').setScale(0.75); //chair 2 is fine 
        this.lamp = this.physics.add.sprite(1550, 10, 'lamp'); 
        this.rock1 = this.physics.add.sprite(2300, game.config.height-90, 'rock').setScale(0.5); 
        this.rock2 = this.physics.add.sprite(2759, game.config.height-90, 'rock').setScale(0.75); 
        this.cloud1 = this.physics.add.sprite(2500, 250, 'clouds').setScale(3); 
        this.cloud2 = this.physics.add.sprite(2700, 100, 'clouds').setScale(3); 
        this.cloud3 = this.physics.add.sprite(2222, 2505, 'clouds').setScale(3); 
        this.chair2.setFlipX(true); 
        this.table.setSize(170, 50);
        this.chair1.setSize(75, 75); //45
        this.chair2.setSize(75, 75); //45 

        //gun  
        this.gun = this.physics.add.sprite(800, game.config.height-200, 'gun').setScale(0.85);  
        this.gun.setImmovable(true); 
        this.fired = 3; 

        //player 
        this.player = this.physics.add.sprite(game.config.width/2, game.config.height-150, 'character').setScale(1.5);
        this.player.setFlipX(true); 
        this.player.setCollideWorldBounds(true); 
        this.player.setSize(50,85); 
        
        //set obstacles as immovable 
        this.table.setImmovable(true);
        this.chair1.setImmovable(true); 
        this.chair2.setImmovable(true);  
        this.rock1.setImmovable(true); 
        this.rock2.setImmovable(true); 
        this.cloud3.setImmovable(true); 

        //grandma 
        this.grandma = this.physics.add.sprite(game.config.width/4, game.config.height-175, 'grandma').setScale(2.25);
        this.grandma.setFlipX(true); 
        this.grandma.setCollideWorldBounds(true); 
        this.grandma.body.setGravityY(300);
        this.grandma.setSize(this.grandma.width/2,this.grandma.height/2); 
        this.grandma.setOffset(this.grandma.width/6, this.grandma.height/2.5); 

        //monster 
        this.monster = this.physics.add.sprite(3, game.config.height-175, 'monsters').setScale(0.85); 

        //invisible wall 
        inviswall.setSize(game.config.width, inviswall.height);
        inviswall.setDisplaySize(game.config.width, inviswall.height);
        inviswall.body.setImmovable(true);
        inviswall.setVisible(false);

        //win condition collider 
        this.rectangle = this.add.rectangle(2950, 0, 50, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.physics.add.existing(this.rectangle); 
        this.rectangle.setVisible(false);

        
        //colliders 
        this.physics.add.collider(this.player, inviswall);
        this.physics.add.collider(this.grandma, inviswall);
        this.physics.add.collider(this.player, this.table); 
        this.physics.add.collider(this.player, this.chair1); 
        this.physics.add.collider(this.player, this.chair2); 
        this.physics.add.collider(this.player, this.rock1); 
        this.physics.add.collider(this.player, this.rock2); 
        this.physics.add.collider(this.player, this.cloud3); 

        //game over flag 
        this.done = true;
        this.direction = false;
        
        //create cursor keys
        cursors = this.input.keyboard.createCursorKeys();
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        //
        this.physics.world.setBounds(0, 0, 3000, 600); 

        //camera movement 
        this.cam = this.cameras.main; 
        this.cameras.main.setBounds(0, 0, 1000, 600); 
        this.cameras.main.startFollow(this.player, true, 0.25, 0.25, 150);

        //setting player gravity (for jumps)
        this.player.setGravityY(300); 

        //grandma's speed 
        this.grandmaspeed = 100; 

        //timers (increasing grandma's speed)
        this.timedEvent = this.time.addEvent({
            delay: 3000, //every 3 seconds  
            loop: true,
            callback: this.countup,
            callbackScope: this,
        }) 

        this.monster.anims.play('monster-popping-out'); 
        this.player.anims.play('startled-right').once('animationcomplete', ()=> {
            this.done = false; 
        })

        this.screen = this.physics.add.sprite(0, 0, 'screen').setOrigin(0, 0);  
        this.screen.setScrollFactor(0); 

    } 

    update(){
        //this.physics.moveToObject(this.grandma, this.player, 100);
        
        this.physics.add.overlap(this.player, this.grandma,()=>{  
            this.player.setVelocity(0,0);
            this.grandma.setVelocity(0,0);
            if(this.done != true){
                this.done = true;
        
                this.player.anims.play("struggling-right");
                this.grandma.anims.play('grandma-kissing-right'); 
                this.time.addEvent({delay:3000, callback: ()=>{
                    this.scene.start('gameOverScene');  
                }})
            }
        
        },null,this)

        //collision for the win screen 
        this.physics.add.overlap(this.player, this.rectangle,()=>{
            this.sound.play('click'); 
            this.player.setVelocity(0,0); 
            this.grandma.setVelocity(0,0); 
            if(this.done != true){
                this.done = true;
                this.scene.start('winScene'); 
            } 

        },null,this)

        //checks position of the player and camera in comparison to the "camera transition" bounds
        this.checkCamBounds(this.player, this.cam);

        if(this.done == false){
            //grandma movement
            if(this.hit == false){
                this.grandma.anims.play('grandma-walking-right', true); 
            } else{
                this.grandma.anims.play('grandma-hurt', true);
                this.time.addEvent({delay:1000, callback: ()=>{
                    this.hit = false; 
                }})    
            }
            //move grandma towards character
            this.physics.moveToObject(this.grandma, this.player, this.grandmaspeed);
            //

            //check function bounds 
            this.checkCamBounds(this.player, this.cameras.main); 

            //cursor movement
            if(cursors.left.isDown){
                this.player.setVelocityX(-160);
                this.player.anims.play('running-right', true);
                this.direction = false; 

                if(this.player.x > 730 && this.player.x < 800){
                    this.player.anims.play('grab-gun-right'); 
                    this.fireability = true; 
                }
                
            }

            else if(cursors.right.isDown){
                this.player.setVelocityX(160);
                this.player.anims.play('running-left', true);
                this.direction = true; 
                
                if(this.player.x > 730 && this.player.x < 820){
                    this.player.anims.play('grab-gun-left'); 
                    this.fireability = true; 
                } 
            } 

            else{
                if(this.direction == true && this.shooting == false){
                    this.player.setVelocityX(0); 
                    this.player.anims.play('idle-left');  
                }
                else if(this.direction == false && this.shooting == false) {
                    this.player.setVelocityX(0); 
                    this.player.anims.play('idle-right'); 
                }

            }

            if(Phaser.Input.Keyboard.JustDown(keyF) && this.fireability == true && this.fired > 0){
                this.shooting = true; 
                console.log(this.player.y); 
                this.fired -= 1; 

                if(this.direction == true){
                    this.player.anims.play('grab-gun-left');   //change y to player height lol 
                    this.bullet = this.physics.add.sprite(this.player.x+55, this.player.y+13, 'heart').setScale(0.25);
                    this.bullet.setVelocityX(1500); 

                    this.physics.add.collider(this.bullet, this.rectangle, (bullet, rectangle) => {
                        this.bullet.destroy(); 
                    })
                } else {
                    this.player.anims.play('grab-gun-right');  
                    this.bullet = this.physics.add.sprite(this.player.x-55, this.player.y+13, 'heart').setScale(0.25);
                    this.bullet.setVelocityX(-1500); 

                    this.physics.add.overlap(this.bullet, this.grandma,()=>{  
                        this.grandma.anims.play('grandma-hurt'); 
                        this.bullet.destroy(); 
                        this.grandmaspeed -= 20; 
                        this.hit = true; 
                        
                    },null,this)
                }


                this.player.once('animationcomplete', ()=> { //delay timer 
                    this.shooting = false; 
                }) 
            }

            if(Phaser.Input.Keyboard.JustDown(cursors.up) && this.player.body.touching.down){
                this.player.setVelocityY(-270);
                this.player.setVelocityX(0); 
                this.sound.play('jump'); 
            }           
        } 
    }
    
    checkCamBounds(player, cam){
        if(player.x + player.width/2 > 1000 && player.x + player.width/2 < 2000) { 
            cam.setScroll(cam.scrollX + cam.width, cam.scrollY)
            cam.setBounds(0, 0, 2000, 600); 
        } else if(player.x + player.width/2 > 2001){
            cam.setScroll(cam.scrollX + cam.width, cam.scrollY)
            cam.setBounds(0, 0, 3000, 600); 
        }
        
    }

    countup(){
        //increases grandma's speed every 3 seconds 
        if(this.done == false){
            this.grandmaspeed += 20; //20, increase after F key is implemented 
        }   
    }

} 