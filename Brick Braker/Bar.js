function Bar(){
    this.w = 200;
    this.h = 20;
    this.moveToLeft = false;
    this.moveToRight = false;
    this.buffer = 10;
    this.red = random(0, 255);
    this.green = random(0, 255);
    this.blue = random(0, 255);
    
    this.pos = createVector(width/2 - this.w/2, height - 40);
    
    this.show = function(){
        noStroke();
        fill(this.red,this.green,this.blue);
        rect(this.pos.x,this.pos.y,this.w,this.h);
    }
    
    this.update = function(){
        if(this.moveToLeft)
            this.pos.x -= this.buffer;
        if(this.moveToRight)
            this.pos.x += this.buffer;
        if(this.pos.x < 0)
            this.pos.x = 0;
        if(this.pos.x + this.w > width)
            this.pos.x = width - this.w;
    }
    
    this.autoPlay = function(){
        if(ball.pos.x <= this.pos.x + ball.radius)
            this.pos.x -= this.buffer;
        else if(ball.pos.x >= this.pos.x + this.w - ball.radius)
            this.pos.x += this.buffer;
    }
    
    
    
}