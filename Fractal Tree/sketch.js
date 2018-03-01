var angle;
var tree;
var count = 0;
var sketch = false;

function setup() {
    createCanvas(900, 600);
    frameRate(5);
    angle = PI/2.7;

    tree = new Tree();
}

function draw() {
    background(60);
    //if(sketch){
        tree.update();
    //}
    tree.show();
}

function mousePressed(){
    sketch = true;
}

function mouseReleased(){
    sketch = false;
}

