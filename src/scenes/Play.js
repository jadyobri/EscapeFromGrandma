class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create(){

       // this.jumped = 0;
        this.mainscreen = this.add.tileSprite(0, 0, 800, 600, 'mainscreen').setOrigin(0, 0); 
       
        //Player
        this.player = this.physics.add.sprite(game.config.width/4, game.config.height-150, 'character').setScale(1.5);  //character starting position 

        this.player.setCollideWorldBounds(true); 
        
        cursors = this.input.keyboard.createCursorKeys();
        let inviswall = this.physics.add.sprite(game.config.width/2,game.config.height-60,'invisible');
        
        inviswall.setSize(game.config.width, inviswall.height);
        inviswall.setDisplaySize(game.config.width, inviswall.height);
        console.log(inviswall.width);
        inviswall.body.setImmovable(true);
        this.physics.add.collider(this.player, inviswall);
        //inviswall.setVisible(false);
        //inviswall.setCollideWorldBounds(true);
       // inviswall.setSize(game.config.width, )
        this.direction = true; //right 
        this.player.body.setGravityY(300); 
        // this.direction = true; //true = right
       // keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT); 
       // keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT); 
       // keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP); 
       // keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
       // keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        //keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
        
       // key
        //f key for fire
        //j Key for jump
        //cannot fire mid-air
        //cannot jump while firing
        //
        //if
        //
        //Grandma
        this.lola = this.physics.add.sprite(game.config.width/2, game.config.height-200, "grandma").setScale(2.0);
        this.lola.setCollideWorldBounds(true);
        this.lola.setSize(this.lola.width/2, this.lola.height/2)
        //this.lola.setCircle(this.lola.width/3);
        //this.lola.body.setOffset(this.lola.width/3,this.lola.height/4);
        //this.lola.body.setImmovable(true);
        this.lola.body.setOffset(this.lola.width/3, this.lola.height/2.5)
        
        //this.lola.setSize(this.lola.width,this.lola.height);
        this.physics.add.collider(this.lola, inviswall);
        // this.physics.add.collider(this.player, this.lola, (player, lola)=> { 
        //     if(this.direction == true){
        //     this.player.anims.play("struggling-right",true);
        //     }
        //      else{
        //         this.player.anims.play("struggling-left",true);
        //     }
        //  })
        this.lola.body.setGravityY(300); 
        inviswall.setVisible(false);

        

        

    } 


    update(){
      
    if (cursors.left.isDown){
        this.player.setVelocityX(-160);
        this.player.anims.play('running-right', true);
        this.direction = false; 
    }
    else if (cursors.right.isDown){
        this.player.setVelocityX(160);
        this.player.anims.play('running-right', true);
        this.direction = true; 
    }
    else
    {
        if(this.direction == true){
            this.player.setVelocityX(0);
            this.player.anims.play('idle-right');
        } 
        else{
            this.player.setVelocityX(0); 
            this.player.anims.play('idle-left'); 
        }
    }
    if (Phaser.Input.Keyboard.JustDown(cursors.up) && this.player.body.touching.down)
    {
        this.player.setVelocityY(-200);
        //this.jumped = 0;
    }   
    if(this.checkCollision(this.player, this.lola) == true){
        if(this.direction == true){
                this.player.anims.play("struggling-right");
                }
                 else{
                    this.player.anims.play("struggling-left");
                } 
    }
    

    
        /*let playerVector = new Phaser.Math.Vector2(0,0);
        if(cursors.left.isDown){
            playerVector.x = -1;
            playerDirection = 'left';
 
           
        }
        else if(cursors.right.isDown){
        // this.player.x += this.PLAYER_VELOCITY;
            playerVector.x = 1;
            playerDirection = 'right';

    
        }


        if(cursors.up.isDown){
            console.log('???'); 
            this.player.body.setAccelerationY(-450)
            //this.player.body.setDragY(-1000)
        } 
        
        this.player.setVelocity(this.PLAYER_VELOCITY * playerVector.x, this.PLAYER_VELOCITY*playerVector.y);
        let playerMovement;
        playerVector.length() ? playerMovement = 'running' : playerMovement = 'idle';
        this.player.play(playerMovement + '-' + playerDirection, true); */ 
   // } 
}
checkCollision(player,lola){
    // if(player.x < lola.x + lola.width && player.x + player.width > lola.width && lola.x && player.y < lola.y + lola.height && player.height + player.y > lola.y){
    //     return true;
    // }
    if(lola.x < player.x + player.width && lola.x + lola.width > player.width && player.x && lola.y < player.y + player.height && lola.height + lola.y > player.y){
        return true;
    }
    else{
        return false;
    }
}

}