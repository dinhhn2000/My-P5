// WzZzW
// This project will create a maze based on backtracking algorithm
// Source: "https://en.wikipedia.org/wiki/Maze_generation_algorithm"


var w = 40;
var matrix = [];
var cur;

var stackCell = [];

function setup() {
    createCanvas(700, 700);
    frameRate(300);
    COL = floor(width/w);
    ROW = floor(height/w);
    
    // Create gird
    for(var i=0;i<ROW;i++)
        for(var j=0;j<COL;j++){
            var square = new Cell(i,j);
            matrix.push(square);
        }
    
    cur = matrix[0];
    
    
}

function draw() {
    background(100);
    for(var i=0;i<matrix.length;i++)
        matrix[i].show(0);
    
    // Process
    // STEP 1
    cur.show(1);
    cur.visited = true;
    var next = cur.checkAround();
    if(next){
        
    // STEP 2
        removeWall(cur,next);
        
    // STEP 3
        stackCell.push(cur);
    
    // STEP 4
        cur = next;
    }
    else{
        cur = stackCell[stackCell.length - 1];
        stackCell.pop();
    }
}

function index(i,j){
    if(i<0 || j<0 || i>ROW-1 || j>COL-1)
        return -1;
    return i*COL + j;
}




















// End project