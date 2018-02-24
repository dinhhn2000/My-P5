function Ball(){
    this.pos = createVector(width/2, height/2);
    this.radius = 20;
    this.direction = createVector(1,1);
    this.velocity = this.direction.mult(4);
    this.red = random(255);
    this.green = random(255);
    this.blue = random(255);
    this.alpha = random(150, 255);
    
    this.show = function(){
        noFill();
        stroke(this.red, this.green, this.blue, this.alpha);
        strokeWeight(3);
        ellipse(this.pos.x, this.pos.y, this.radius*2, this.radius*2);
    }
    
    this.update = function(){
        this.pos.add(this.velocity);
        
        // Check edge
        // TOP - RIGHT - BOTTOM - LEFT
        if(this.pos.y <= this.radius){
            this.direction.y *= -1;
            this.changColor();
        }
        else if(this.pos.x >= width - this.radius){
            this.direction.x *= -1;
            this.changColor();
        }
        else if(this.pos.y >= height - this.radius){
            this.direction.y *= -1;
            this.changColor();
        }
        else if(this.pos.x <= this.radius){
            this.direction.x *= -1;
            this.changColor();
        }
        
        // Check bar
        if(this.pos.x >= bar.pos.x - this.radius && this.pos.x <= bar.pos.x + bar.w + this.radius)
            if(this.pos.y <= bar.pos.y && this.pos.y >= bar.pos.y - this.radius)
                if(this.direction.y > 0){
                    this.direction.y *= -1;
                    bar.red = random(255);
                    bar.green = random(255);
                    bar.blue = random(255);
                    this.changColor();
                }
        
        // Check bricks
        for(var i = 0; i < brickCount; i++){
            if(bricks[i].beingHit()){
                bricks[i].shrink();
                if(random(2) < 1)
                    this.direction.x *= -1;
                else
                    this.direction.y *= -1;
                this.changColor();
            }
        }
    }
    
    this.changColor = function(){
        this.red = random(255);
        this.green = random(255);
        this.blue = random(255);
        this.alpha = random(150, 255);
    }
               
    
}
               
