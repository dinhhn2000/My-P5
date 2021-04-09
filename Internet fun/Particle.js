class Particle{

    constructor(){
        let x = random(0, width);
        let y = random(0, height);
        this.pos = createVector(x, y);
        this.vel = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
        this.size = random(2, 4);
    }

    update(){
        this.pos.add(this.vel);

        // Out screen cases
        if(this.pos.x > width){
            this.vel.x *= -1;
        }
        if(this.pos.x < 0){
            this.vel.x *= -1;
        }
        if(this.pos.y > height){
            this.vel.y *= -1;
        }
        if(this.pos.y < 0){
            this.vel.y *= -1;
        }
    }

    connect(particles, level, Pass){
        if(level > 1)
            return;
        for(let i = 0; i < particles.length; i++){

            let test = 0;
            for(let j = 0; j < Pass.length; j++){
                if(i === Pass[j])
                    test = 1;
                if(i === Pass[j] && dist(this.pos.x, this.pos.y, particles[i].pos.x, particles[i].pos.y)>maxD)
                    Pass.splice(j, 1);
            }

            if(dist(this.pos.x, this.pos.y, particles[i].pos.x, particles[i].pos.y) < maxD && test === 0){
                strokeWeight(0.3);
                line(this.pos.x, this.pos.y,particles[i].pos.x, particles[i].pos.y);
                Pass.push(i);
                level++;
                particles[i].connect(particles, level, Pass);
                level--;
                //Pass.splice(Pass.length - 1, 1);
            }
        }
    }
    
    draw(particle2){
        line(this.pos.x, this.pos.y, particle2.pos.x, particle2.pos.y);
    }
    
    render(){
        stroke(95, 75, 139);
        strokeWeight(this.size);
        point(this.pos.x, this.pos.y);
    }   
}