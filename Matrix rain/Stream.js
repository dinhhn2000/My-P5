function Stream(x){
    this.x = x*symbolSize;
    this.y = random(-2000,-1500);
    this.speed = random(4,10);
    this.type = int(random(2));
    
    this.len = int(random(5,20));
    var symbols = [];
    for(var i = 0; i < this.len; i++){
        var symbol = new Symbol(this.x,this.y + i*symbolSize +2);
        symbol.setRandomSymbol();
        symbols.push(symbol);
    }
    
    this.show = function(){
        if(this.type == 0){
            for(var i = 0; i < symbols.length - 1; i++){
               symbols[i].show(0);
            }
            symbols[symbols.length - 1].show(1);
        }
        else{
            for(var i = 0; i < symbols.length; i++){
               symbols[i].show(0);
            }
        }
    }
    
    this.update = function(frameTime){
        for(var i = 0; i < symbols.length; i++){
            if(frameTime % symbols[i].time == 0)
                symbols[i].setRandomSymbol();
        }
    }
    
    this.rain = function(){
        this.y += this.speed;
        for(var i = 0; i < symbols.length; i++){
            symbols[i].fall(this.y,i);
        }
        if(this.y > height){
            this.speed = random(4,10);
            this.len = int(random(5,20));
            this.y = random(-1000,-700);
            this.type = int(random(2));
            
            symbols = [];
            for(var i = 0; i < this.len; i++){
                var symbol = new Symbol(this.x,this.y + i*symbolSize +2);
                symbol.setRandomSymbol();
                symbols.push(symbol);
            }
        }
    }
}