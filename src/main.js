//Major phaser components: timer events, camera movement, particle emitter, animation manager, bitmap text (pending), physics system

'use strict'

let config = {
    type: Phaser.WEBGL, 
    render: {
        pixelArt: true, 
    }, 
    width: 800, 
    height: 600, 
    //hardmode:false,
    scene: [Load, Menu, Tutorial, Play, GameOver, Win, Credits], //game scenes 
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
let keyB; //key to return back from credits
let keyC; //key for credits 
let keySPACE; //key to start 
let keyENTER; //key for hard mode
let hardmode = false;

let playerDirection = 'right'; 