let w = 64;
let r = 0;
let row = 3;
let col = 3;
let grid, grid2;
let level = 1;
let startButton;
let resetButton;
let levelIncreaseButton;
let levelDecreaseButton;
let testButton;
let changeBackgroundButton;
let c, bg;

function setup() {
  createCanvas(800, 800);
  //frameRate(1);
  c = color(floor(random(255)), floor(random(255)), floor(random(255)));
  bg = color(floor(random(200)) + 50, floor(random(200)) + 50, floor(random(200)) + 50);

  // Create grid
  createGrid();

  startButton = createButton("START");
  startButton.position(w , w / 2);
  startButton.mousePressed(generateMap);

  resetButton = createButton("RESET");
  resetButton.position(w * 3, w / 2);
  resetButton.mousePressed(reset);

  levelDecreaseButton = createButton("<<");
  levelDecreaseButton.position(w * 5, w / 2);
  levelDecreaseButton.mousePressed(decreaseLevel);

  levelIncreaseButton = createButton(">>");
  levelIncreaseButton.position(w * 7, w / 2);
  levelIncreaseButton.mousePressed(increaseLevel);

  testButton = createButton("TEST");
  testButton.position(w * 9, w / 2);
  testButton.mousePressed(test);

  changeBackgroundButton = createButton("MODE");
  changeBackgroundButton.position(w * 11, w / 2);
  changeBackgroundButton.mousePressed(changeBackground);

}

function createGrid(){
  grid = [];
  grid2 = [];
  for(let i = 0; i < row; i++){
    grid.push([]);
    grid2.push([]);
    for(let j = 0; j < col; j++){
      grid[i].push(0);
      grid2[i].push(0);
    }
  }
}

function generateMap(number){
  reset2  ();

  // Test end game
  let count = 0;
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      if(grid[i][j] === 1)  count++;
    }
  }
  if(count === col * row || col * row - count < 2 + level){
    return;
  }

  number = 2 + level * 2;

  for(let k = 0; k < number; k++){
    let i = floor(random(row));
    let j = floor(random(col));
    while(grid[i][j] === 1){
      i = floor(random(row));
      j = floor(random(col));
    }
    grid[i][j] = 1;
    grid2[i][j] = 1;
  }

  window.setTimeout(reset, 1000);
}

function reset(){
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      grid[i][j] = 0;
    }
  }
}

function reset2(){
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      grid2[i][j] = 0;
    }
  }
}

function increaseLevel() {
  c = color(floor(random(255)), floor(random(255)), floor(random(255)));
  level++;
  row++;
  col++;
  createGrid();
}

function decreaseLevel() {
  c = color(floor(random(255)), floor(random(255)), floor(random(255)));
  level--;
  row--;
  col--;
  if(level < 1){
    level++;
    row++;
    col++;
  }
  createGrid();
}

function mouseReleased() {
  let x = floor(mouseX / w);
  let y = floor(mouseY / w);
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      if(x === j + 1 && y === i + 1){
        grid[i][j] = 1;
        return;
      }
    }
  }
}

function test(){
  //console.log(grid, grid2);
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      if(grid2[i][j] != grid[i][j]){
        alert("INCORRECT! PLEASE TRAIN MORE!!!");
        setTimeout(reset, 1000);
        reset2();
        return;
      }
    }
  }
  alert("CORRECT! CONGRATULATION!!!");
  setTimeout(reset, 1000);
  reset2();
}

function changeBackground() {
  r = random(30);
  c = color(floor(random(200)) + 50, floor(random(200)) + 50, floor(random(200)) + 50);
  bg = color(floor(random(200)) + 50, floor(random(200)) + 50, floor(random(200)) + 50);
}

function draw() {
  background(bg);
  for(let i = 1; i <= row; i++){
    for(let j = 1; j <= col; j++){
      //translate(width / 5, height / 5);
      //rectMode(CENTER);
      if(grid[i - 1][j - 1] === 1)
      fill(c);
      else
      fill(255);
      rect(j * w, i * w, w - level * 2 + 2, w - level * 2 + 2, r);
    }
  }

}
