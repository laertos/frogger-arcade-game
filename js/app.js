// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    //initial position of enemy is offscreen
    this.x = -100; 
    this.y = 75*(Math.ceil(3*Math.random()));
    // enemy speed is random from 50 to 150 units (may need to edit)
    this.speed = Math.random() * 100 + 50;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    //enemy is reset when it gets to the end of the canvas
    if (this.x > 505) {
        this.x = -100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x = 200;
    this.y = 400;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function () {
    this.x = 200;
    this.y = 400;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(movement) {
    switch(movement) {
        case "up":
        if (this.y > 0){
            this.y = this.y - 83;
        }
        break;   
        case "down":
        if (this.y < 400){
            this.y = this.y + 83;            
        }
        break; 
        case "left":
        if (this.x > 0) {
            this.x = this.x - 101;
        }
        break; 
        case "right":
        if (this.x < 400) {
            this.x = this.x + 101;
        }
        break;      
    }

};

Player.prototype.reset = function () {
    this.x = 200;
    this.y = 400;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
for (var i = 0; i <= 4; i++) {
    allEnemies[i] = new Enemy();
}
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
