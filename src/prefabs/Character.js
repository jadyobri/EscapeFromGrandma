class Character extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame, direction) {
        super(scene, x, y, texture, frame) // call Sprite parent class
        scene.add.existing(this)           // add Hero to existing scene
        scene.physics.add.existing(this)   // add physics body to scene
        this.body.setCollideWorldBounds(true); 
    } 
} 