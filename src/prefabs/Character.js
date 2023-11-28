class Character extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame); 

        scene.add.existing(this); 
        scene.physics.add.existing(this); 
        this.moveSpeed = 6; 
        
    } 

    update(){
        //keyboard functionality 
        if(this.cursors.left.isDown){
            //something 
        }
        if(this.cursors.right.isDown){
            //something 
        }
        if(this.cursors.up.isDown){
            //something 
        }

       
    } 
} 