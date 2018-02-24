// WzZzW
// This project will create a birck breaker game
// Sources link: "https://www.youtube.com/watch?v=5kEPixL8JoU"

var bar;
var ball;
var bricks = [];
var brickCount;

function setup() {
    createCanvas(window.innerWidth - 200, window.innerHeight - 100);
    
    bar = new Bar();
    ball = new Ball();
    brickCount = random(5, 15)
    for(var i = 0; i < brickCount; i++)
        bricks.push(new Brick());
}

function draw() {
    background(255);
    stroke(100);
    strokeWeight(2);
    noFill()
    rect(0, 0, width - 5, height - 5);
    
    ball.show();
    ball.update();
    
    for(var i = 0; i < bricks.length; i++){
        bricks[i].show();
        bricks[i].update();
    }
    
    bar.show();
    bar.update();
    bar.autoPlay();
    
}

function keyPressed(){
    if(key === 'a' || key === 'A')
        bar.moveToLeft = true;
    if(key === 'd' || key === 'D')
        bar.moveToRight = true;
}

function keyReleased(){
    bar.moveToLeft = false;
    bar.moveToRight = false;
}