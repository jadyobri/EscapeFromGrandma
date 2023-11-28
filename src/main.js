'use strict'

let config = {
    type: Phaser.WEBGL, 
    render: {
        pixelArt: true, 
    }, 
    width: 800, 
    height: 600, 
    scene: [Load, Menu, Tutorial], //add Menu scene 
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    
}


let game = new Phaser.Game(config); 
let cursors; 
let keyT; 
let keyM; 