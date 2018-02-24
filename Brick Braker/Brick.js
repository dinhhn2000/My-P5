function Brick(){
    this.x = random(100, width - 100);
    this.y = random(100, height - 100);
    this.radius = random(60, 90);
    this.totalAngle = 6;
    this.hitCount = 0;
    this.red = random(255);
    this.green = random(255);
    this.blue = random(255);
    
    this.show = function(){
        noFill();
        stroke(this.red,this.green,this.blue);
        strokeWeight(1);
        push();
        translate(this.x, this.y);
        beginShape();
        for(var i = 0; i < this.totalAngle; i++){
            let angle = map(i, 0, this.totalAngle, 0, TWO_PI);
            var x = this.radius * cos(angle);
            var y = this.radius * sin(angle);
            vertex(x,y);
        }
        endShape(CLOSE);
        pop();
    }
    
    this.update = function(){
        if(this.hitCount == 2){
            this.reCreate();
        }
    }
    
    this.shrink = function(){
        this.radius /= 2;
        this.hitCount ++;
    }
    
    this.reCreate = function(){
        this.x = random(100, width - 100);
        this.y = random(100, height - 100);
        this.radius = random(20,80);
        this.hitCount = 0;
        this.red = random(255);
        this.green = random(255);
        this.blue = random(255);
    }
    
    this.beingHit = function(){
        var distance = dist(ball.pos.x, ball.pos.y, this.x, this.y);
        if(distance < ball.radius + this.radius)    
            return true;
        return false;
    }
}