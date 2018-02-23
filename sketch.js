let w = 64;
let col = 4;
let row = 4;
let record;
let index = 0;
let step = 50;  // Number of steps that users can go back
let score = 0;
let scoreArr;
let TB, RB, MB;     // turnBack button & reset button
let c, bg, sq, t;  // Color mode for stroke, background, squares, text
let mode = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    resetSketch();
    c = color(70, 70, 70);
    bg = color(255);
    sq = (255);
    t = color(70, 70, 70);

    // Turn back button
    TB = createButton("BACK");
    TB.mousePressed(turnBack);

    // Reset button
    RB = createButton("RESET");
    RB.mousePressed(resetSketch);

    // Change mode button
    MB = createButton("CHANGE");
    MB.position(w * col + 50, w / 4)
    MB.mousePressed(changeColor);

    // Row and col config button
    let increaseRowCol = createButton(">>");
    increaseRowCol.position(w * col, w / 4);
    increaseRowCol.mousePressed(inRowCol);
    let decreaseRowCol = createButton("<<");
    decreaseRowCol.position(w * col - 50, w / 4);
    decreaseRowCol.mousePressed(deRowCol);
}

function changeColor() {
  mode++;
  if(mode > 4)
    mode = 0;
  switch(mode){
    case 0:{
      t = color(70, 70, 70);
      sq = color(150, 179, 211);
      bg = color(255, 94, 170);
      c = color(100, 100, 100);
      break;
    }
    case 1:{
      t = color(70, 70, 70);
      sq = color(0, 255, 153);
      bg = color(50, 152, 255);
      c = color(255, 50, 50);
      break;
    }
    case 2:{
      t = color(70, 70, 70);
      sq = color(240, 149, 89);
      bg = color(240, 89, 179);
      c = color(90, 240, 225);
      break;
    }
    case 3:{
      t = color(255);
      sq = color(6, 148, 62);
      bg = color(148, 62, 6);
      c = color(62, 6, 148);
      break;
    }
    case 4:{
      t = color(255);
      sq = color(0, 117, 87);
      bg = color(0, 29, 117);
      c = color(117, 29, 0);
      break;
    }
  }
}

function inRowCol() {
  row++;
  col++;
  resetSketch();
}

function deRowCol() {
  row--;
  col--;
  resetSketch();
}

function turnBack() {
  if(index != 0){
    base = record[--index];
    score = scoreArr[scoreArr.length - 1];
    scoreArr.splice(scoreArr.length - 1, 1);
  }
}

function resetSketch() {
  // Delete base and record
  base = [];
  record = [];
  scoreArr = [];
  score = 0;
  // Create new base
  for(let i = 0; i < col; i++){
    base.push([]);
    for(let j = 0; j < row; j++){
      base[i].push(0);
    }
  }

  // Create new record
  for(let i = 0; i < step; i++){
    record.push([]);
    for(let j = 0; j < col; j++){
      record[i].push([]);
      for(let k = 0; k < row; k++){
        record[i][j].push(0);
      }
    }
  }


}

function gameOver() {
  alert("GAME OVER!!!");
  //noLoop();
}

function generateNumber(base) {
  // Test game over
  let test = 0;
  for(let i = 0; i < row; i++)
    for(let j = 0; j < col; j++)
      if (base[i][j] === 0)
        test = 1;
  if(test === 0){
    gameOver();
    return false;
  }
  // let i = floor(random(col - 1) + 1);
  // for(let j = 0; j < i; j++){
    // Find out the empty box
    let c = floor(random(col));
    let r = floor(random(row));
    while(base[r][c] != 0){
      c = floor(random(col));
      r = floor(random(row));
    }
    // generateNumber
    let res = floor(random(2) + 1) * 2;
    base[r][c] = res;
  //}
}

function gamePlay(key) {
  switch (key){
    // LEFT_ARROW
    case 4:{
      for(let i = 1; i < col; i++){
        for(let j = 0; j < row; j++){
          // Move all the squares to the left
          if(base[j][i] != 0){
          // Count the number of empty squares on the left
            let buffer = 0;
            for(let k = i - 1; k >= 0; k--){
              if(base[j][k] != 0){
                break;
              }
              else {
                buffer++;
              }
            }
            // Move
            for(let k = i; k < col; k++){
              base[j][k - buffer] = base[j][k];
              if(buffer != 0) base[j][k] = 0;
            }
          }
        }
      }
      // Sum all the equal squares
      for(let i = 0; i < row; i++){
        for(let j = 0; j < col - 1; j++){
          if(base[i][j] === base[i][j + 1]){
            base[i][j] *= 2;
            score += base[i][j];
            for(let k = j + 1; k < col - 1; k++)
              base[i][k] = base[i][k + 1];
            base[i][col - 1] = 0;
          }

        }
      }
      break;
    }
    // UP_ARROW
    case 8:{
      for(let i = 0; i < col; i++){
        for(let j = 1; j < row; j++){
          // Move all the squares to the up
          if(base[j][i] != 0){
          // Count the number of empty squares on the up
            let buffer = 0;
            for(let k = j - 1; k >= 0; k--){
              if(base[k][i] != 0){
                break;
              }
              else {
                buffer++;
              }
            }
            // Move
            for(let k = j; k < row; k++){
              base[k - buffer][i] = base[k][i];
              if(buffer != 0) base[k][i] = 0;
            }
          }
        }
      }
      // Sum all the equal squares
      for(let j = 0; j < col; j++){
        for(let i = 0; i < row - 1; i++){
          if(base[i][j] === base[i + 1][j]){
            base[i][j] *= 2;
            score += base[i][j];
            for(let k = i + 1; k < row - 1; k++)
              base[k][j] = base[k + 1][j];
            base[row - 1][j] = 0;
          }

        }
      }
      break;
    }
    // RIGHT_ARROW
    case 6:{
      for(let i = 0; i < col - 1; i++){
        for(let j = 0; j < row; j++){
          // Move all the squares to the right
          if(base[j][i] != 0){
          // Count the number of empty squares on the right
            let buffer = 0;
            for(let k = i + 1; k < col; k++){
              if(base[j][k] != 0){
                break;
              }
              else {
                buffer++;
              }
            }
            // Move
            for(let k = i; k >= 0; k--){
              base[j][k + buffer] = base[j][k];
              if(buffer != 0) base[j][k] = 0;
            }
          }
        }
      }
      // Sum all the equal squares
      for(let i = 0; i < row; i++){
        for(let j = col - 1; j > 0; j--){
          if(base[i][j] === base[i][j - 1]){
            base[i][j] *= 2;
            score += base[i][j];
            for(let k = j - 1; k > 0; k--)
              base[i][k] = base[i][k - 1];
            base[i][0] = 0;
          }

        }
      }
      break;
    }
    //DOWN_ARROW
    case 2:{
      for(let i = 0; i < col; i++){
        for(let j = row - 1; j >= 0; j--){
          // Move all the squares to the down
          if(base[j][i] != 0){
          // Count the number of empty squares on the down
            let buffer = 0;
            for(let k = j + 1; k < row; k++){
              if(base[k][i] != 0){
                break;
              }
              else {
                buffer++;
              }
            }
            // Move
            for(let k = j; k >= 0; k--){
              base[k + buffer][i] = base[k][i];
              if(buffer != 0) base[k][i] = 0;
            }
          }
        }
      }
      // Sum all the equal squares
      for(let j = 0; j < col; j++){
        for(let i = row - 1; i > 0; i--){
          if(base[i][j] === base[i - 1][j]){
            base[i][j] *= 2;
            score += base[i][j];
            for(let k = i - 1; k > 0; k--)
              base[k][j] = base[k - 1][j];
            base[0][j] = 0;
          }
        }
      }
    }
  }
  scoreArr.push(score);
}

function copyMatrix(matrixA, matrixB){
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      matrixB[i][j] = matrixA[i][j];
    }
  }
}

function keyPressed() {
  if(index >= step - 1){
    for(let i = 0; i < step - 1; i++){
      record[i] = record[i + 1];
    }
  copyMatrix(base, record[index - 1]);
  }
  else
    copyMatrix(base, record[index++]);

  if(keyCode === LEFT_ARROW || keyCode === 65){
    gamePlay(4);
    generateNumber(base);
    return false;
  }
  if(keyCode === RIGHT_ARROW || keyCode === 68){
    gamePlay(6);
    generateNumber(base);
    return false;
  }
  if(keyCode === UP_ARROW || keyCode === 87){
    gamePlay(8);
    generateNumber(base);
    return false;
  }
  if(keyCode === DOWN_ARROW || keyCode === 83){
    gamePlay(2);
    generateNumber(base);
    return false;
  }
  if(keyCode === 27){ // Escape button
    console.log(record);
    record.splice(record.length - 1, 1);
  }
  return false;
}

function draw() {
    background(bg);
    for(let i = 1; i <= row; i++){
      for(let j = 1; j <= col; j++){
        rectMode(CENTER);
        strokeWeight(4);
        stroke(c);
        fill(sq);
        rect(i * w, j * w, w, w, 5);
        strokeWeight(0.5);
        noStroke();

        textAlign(CENTER, CENTER);
        let size = 0;
        for(let k = 0; k < 10; k++){
          if(base[j - 1][i - 1] / pow(10, k) > 1)
            size++;
          else {
            break;
          }
        }
        textSize(w / 2 - 3 * size);
        textStyle(BOLD);
        fill(t);
        if(base[j - 1][i - 1] != 0)
          text(base[j - 1][i - 1], i * w, j * w)
        fill(255);
      }
    }
    // Score
    textAlign(CORNER, CORNER);
    textSize(16);
    fill(0);
    text("SCORE: " + score, w * 1.5, w/4);
    fill(255);

    // Back & Resetbutton
    TB.position(w * 2, w * (row + 1));
    RB.position(w / 2, w * (row + 1));
}
