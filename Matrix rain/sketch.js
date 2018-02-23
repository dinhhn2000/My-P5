// WzZzW
// This project will create a matrix rain with Katakana symbols
// Sources link: "https://www.youtube.com/watch?v=S1TQCi9axzg"

var stream = [];
var symbolSize = 20;
var streamSize;
var time = 0;

function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    //createCanvas(720,480);
    streamSize = int(width/symbolSize);
    for(var i = 0; i < streamSize; i++){
        stream[i] = new Stream(i);
    }
    background(0);
}

function draw() {
    background(0,160);
    for(var i = 0; i < streamSize; i++){
        stream[i].show();
        stream[i].rain();   
        stream[i].update(time);
    }
    time++;
}

