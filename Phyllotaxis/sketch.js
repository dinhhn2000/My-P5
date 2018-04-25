var n = 0;
var c = 4;

function setup() {
    createCanvas(700, 700);
    //angleMode(DEGREES);
    background(50);
    translate(width/2, height/2);
    colorMode(HSB);
}

function draw() {
    translate(width/2, height/2);
    var angle = n * 137.5;
    var r = c * sqrt(n);
    var x = r * cos(angle);
    var y = r * sin(angle);
    //fill((angle - r) % 256, 255, 255);
    fill(r % 256, 255, r % 256 + 100);
    ellipse(x, y, 6, 6);
    n++;
}