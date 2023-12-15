//Team members: Isha Chury & Jack O'Brien

//Major phaser components: timer events, camera movement, particle emitter, animation manager, bitmap text, and the physics system

/*Key Phaser components used within this game were the following: animations manager, tweens manager, timers, cameras, bitmap text, and the physics system.
The animation and tweens manager are used for various animations within the game, most notably, the player's movements.
Timers were used to gradually increase grandma's speed, as well as 'freeze' other animations until one specific animation (such as the grandchild struggling) has stopped playing.
The camera component was used to transition between different levels. Bitmap text was used within the game to keep the same style of text from the game within our version.
Though it's not an exact match to the original, it is similar in style, and contributes to the aesthetic.
The physics system was used most notably to create and detect collisions between the grandchild and various obstacles around it. */


/* The levels within our game were our designs, creation, and implementation. The original video of the game did not show much about the game itself,
and we wanted to add layers of complexity to our iteration that players would enjoy. We decided to creating and implementing these levels through the use of
the camera's movement. While in actuality, the play screen only uses one large asset, the use of the camera's movement allows players to assume there are different
levels to the game. Similarly, the mothballs and hearts were added to the game to increase the complexity of the game, as well as its difficulty. This aspects was
not really explored in the original, and we expanded on it to create a new mechanic that would push players to time their shots, and make decisions to continue the
game, such as shooting grandma if necessary (or even avoiding one mothball to escape).
*/

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
            //debug: true,
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
let keyG; 
let keySPACE; //key to start 
let keyENTER; //key for hard mode
let hardmode = false;

let playerDirection = 'right'; 
let gradermode = false; 