var n = 1;
var d;

var slider;

function setup() {
    createCanvas(500, 500);
    frameRate(2);
    slider = createSlider(1, 5, 1, 2);
}

function draw() {
    //n = slider1.value();
    d = slider.value();
    n++;
    if(n >= d * 20)
        n = 0;
    var k = n / d;
    background(50);
    translate(width/2, height/2);
    
    beginShape();
    noStroke();
    fill(random(200) + 50, random(200) + 50, random(200) + 50);
    for(var angle = 0; angle < TWO_PI * d; angle+=0.01){
        var r = 200 * cos(k * angle);
        var x = r * cos(angle);
        var y = r * sin(angle);
        vertex(x, y);
    }
    endShape(CLOSE);
}