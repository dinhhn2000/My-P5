class snowFlake{

    constructor(img){
        let x = random(width);
        let y = random(height) - height;
        this.img = img;
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector();
        this.r = constrain(pow(randomGaussian() * 2, 2), 2, 32);
        this.img = img;
        this.angle = random(TWO_PI);
        this.direction = (random(1) > 0.5) ? 1 : -1;
        this.xOff;
    }

    applyForce(force){
        let f = force.copy();
        f.mult(this.r * 0.1);
        this.acc.add(f);
    }

    update(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.angle += this.direction * this.vel.mag() / 200;
        this.xOff = sin(this.angle) * this.r * 2;
    }

    render(){
        //        stroke(255);
        //        strokeWeight(this.r);
        //        point(this.pos.x, this.pos.y);
        
        push();
        translate(this.pos.x + this.xOff, this.pos.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.img, 0, 0, this.r, this.r);
        pop();
    }

    offScreen(){
        if(this.pos.x > width || this.pos.x < 0)
            return true;
        if(this.pos.y > height)
            return true;
        return false;
    }
}