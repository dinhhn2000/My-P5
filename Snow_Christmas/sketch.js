let snow = [];
let gravity;
let file1;
let file2;
let mySound;
let textures = [];

function preload(){
    file1 = loadImage('Snow32.png');
    file2 = loadImage('Merry_Christmas_PNG_Text.png');
    soundFormats('mp3', 'ogg');
    mySound = loadSound('Christmas.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    gravity = createVector(0,0.005);
    
    for(let x = 0; x < file1.width; x += 32){
        for(let y = 0; y < file1.height; y += 32){
            let img = file1.get(x, y, 32, 32);
            textures.push(img);
        }
    }
    
    let design = random(textures);
    snow.push(new snowFlake(design));
    
    mySound.loop(0, 1, 1, 0, 220);
}

function draw() {
    background(0);
    
    // Text
    push();
    translate(width/2, height/2);
    imageMode(CENTER);
    file2.resize(width / 2, (width / 2) / file2.width * file2.height);
    image(file2, 0, 0);
    pop();
    
    // Create Snow
    let design = random(textures);
    snow.push(new snowFlake(design));
    
    for(flake of snow){
        flake.applyForce(gravity);
        flake.update();
        flake.render();
    }

    for(let i = snow.length - 1; i >= 0; i--){
        if(snow[i].offScreen())
            snow.splice(i, 1);
    }
}