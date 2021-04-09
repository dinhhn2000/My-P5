let particle = [];
let pass = [];
let maxD = 120;

function setup() {
    createCanvas(windowWidth, windowHeight);

    for(let i = 0; i < 200; i++)
        particle.push(new Particle());
}

function draw() {
    background(255);

    for(let i = 0; i < particle.length - 1; i++){
        particle[i].update();
        particle[i].render();
        
//        for(let j = i + 1; j < particle.length; j++)
//            particle[i].draw(particle[j]);
        
        if(dist(particle[i].pos.x, particle[i].pos.y, mouseX, mouseY) < maxD){
            pass.push(i);
            particle[i].connect(particle, 0, pass);
            pass.pop();
        }
        
    }
    
    
}