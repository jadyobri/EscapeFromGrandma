'use strict'

let config = {
    type: Phaser.WEBGL, 
    render: {
        pixelArt: true, 
    }, 
    width: 800, 
    height: 600, 
    scene: [Load, Menu, Tutorial, Play, GameOver, Win], //game scenes 
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0, 
            }
        }
    },
    
}

let game = new Phaser.Game(config); 

let cursors; 
let keyT; //key for tutorial 
let keyM; //key for menu 
let keyR; //key to restart  
let keyF; //key to fire
let keySPACE; //key to start 

let gameOver = false; 
let playerDirection = 'right'