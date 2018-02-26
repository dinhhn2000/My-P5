function Cell(i,j){
    this.i = i;
    this.j = j;
    this.wall = [true,true,true,true];
    this.visited = false;
    
    this.show = function(mark)  {
        if(mark == 0){
            stroke(0);
            noFill();
            // Draw 4 walls     TOP - RIGHT - BOTTOM - LEFT
            if(this.wall[0])
                line(i*w     , j*w        , i*w     , (j+1)*w);
            if(this.wall[1])
                line(i*w     , (j+1)*w    , (i+1)*w , (j+1)*w);
            if(this.wall[2])
                line((i+1)*w , (j+1)*w    , (i+1)*w , j*w);
            if(this.wall[3])
                line((i+1)*w , j*w        , i*w     , j*w);
                
            if(this.visited){
                noStroke();
                fill(255, 0,0,150);
                rect(i*w,j*w,w,w);
            }
        }
        else{
            noStroke();
            fill(46,111,231,200);
            rect(i*w,j*w,w,w);
        }
    }
    
    this.checkAround = function(){
        var notVisited = [];
        
        var check = matrix[index(i-1,j)];
        if(check && check.visited == false) 
            notVisited.push(check);
        
        var check = matrix[index(i,j+1)];
        if(check && check.visited == false) 
            notVisited.push(check);
        
        var check = matrix[index(i+1,j)];
        if(check && check.visited == false) 
            notVisited.push(check);
        
        var check = matrix[index(i,j-1)];
        if(check && check.visited == false) 
            notVisited.push(check);
        
        if(notVisited.length > 0){
            var rand = floor(random(notVisited.length))
            return notVisited[rand];
        }
        else
            return undefined;
    }
}


function removeWall(a,b){
    if(a.i - b.i === 1){
        a.wall[0] = false;
        b.wall[2] = false;
    }
    if(a.i - b.i === -1){
        a.wall[2] = false;
        b.wall[0] = false;
    }
    if(a.j - b.j === 1){
        a.wall[3] = false;
        b.wall[1] = false;
    }
    if(a.j - b.j === -1){
        a.wall[1] = false;
        b.wall[3] = false;
    }
}
