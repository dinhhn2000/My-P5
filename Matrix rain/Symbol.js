function Symbol(x,y){
    this.x = x;
    this.y = y;
    this.value;
    this.time = int(random(5,15));
    
    this.setRandomSymbol = function(){
        this.value = String.fromCharCode(0x30A0 + round(random(0,96)));
    }
    
    this.show = function(type){
        if(type == 0){
            noStroke();
            fill(0,255,40);
            textSize(symbolSize);
            text(this.value,this.x,this.y);
        }
        else{
            noStroke();
            fill(255);
            textSize(symbolSize);
            text(this.value,this.x,this.y);
        }
    }
    
    this.fall = function(streamY,index){
        this.y = streamY + symbolSize*index + 2;
    }

}