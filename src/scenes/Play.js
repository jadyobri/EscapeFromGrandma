class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create(){
        this.mainscreen = this.add.tileSprite(0, 0, 800, 600, 'mainscreen').setOrigin(0, 0); 
        this.player = this.physics.add.sprite(game.config.width/4, game.config.height-150, 'character').setScale(1.5);  //character starting position 
        this.player.setCollideWorldBounds(true); 
        cursors = this.input.keyboard.createCursorKeys();
        
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
    if (cursors.up.isDown)
    {
        this.player.setVelocityY(-330);
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
    } 
}
