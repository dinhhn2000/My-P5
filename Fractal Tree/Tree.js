function Tree(){
    this.tree = [];
    this.flowers = [];
    var begin = createVector(width/2, height);
    var end = createVector(width/2, height - 200);
    this.tree.push(new Branch(begin,end));
    this.red = random(255);
    this.green = random(255);
    this.blue = random(255);

    this.show = function(){
        for(var i=0; i < this.tree.length; i++){
            stroke(this.red, this.green, this.blue);
            if(i === 0){
                strokeWeight(10);
                this.tree[i].show();
            }
            if(i === 1 || i === 2 || i === 3){
                strokeWeight(8);
                this.tree[i].show();
            }
            if(i > 3 && i < 10){
                strokeWeight(5);
                this.tree[i].show();
            }
            if(i > 10 && i < 20){
                strokeWeight(3);
                this.tree[i].show();
            }
            if(i > 20 && i < 33){
                strokeWeight(2);
                this.tree[i].show();
            }
            else{
                strokeWeight(1);
                this.tree[i].show();
            }
        }
        for(var i = 0; i < this.flowers.length; i++){
            push();
            this.flowersShow(this.flowers[i].x, this.flowers[i].y);
            pop();
        }
    }

    this.flowersShow = function(x, y){
        fill(255-this.red, 255-this.green, 255-this.blue, 80);
        noStroke();
        translate(x, y);
        for(var i = 0; i < 10; i++){
            ellipse(0, 0,8, 22);
            rotate(PI/5);
        }
    }

    this.update = function(){
        var len = this.tree.length;
        if(count === 0){
            this.tree.push(this.tree[0].branchL());
            this.tree.push(this.tree[0].branchR());
            this.tree.push(this.tree[0].branchM());
            count++;
            return;
        }
        if(count < 7){
            for(var i = count*2 - 1; i < len;i++){
                this.tree.push(this.tree[i].branchL());
                this.tree.push(this.tree[i].branchR());
                this.tree.push(this.tree[i].branchM());
            }
            count++;
            return;
        }
        if(count === 7){
            for(var i = 100; i < this.tree.length; i+=1800){
                var flower = this.tree[i].end.copy();
                this.flowers.push(flower);
            }
            count++;
            return;
        }
        if(count === 10){
            for(var i = 500; i < this.tree.length; i+=1800){
                var flower = this.tree[i].end.copy();
                this.flowers.push(flower);
            }
            count++;
            return;
        }
        if(count === 15){
            for(var i = 1000; i < this.tree.length; i+=1800){
                var flower = this.tree[i].end.copy();
                this.flowers.push(flower);
            }
            count++;
            return;
        }
        if(count > 7 && count < 25){
            count++;
        } else{
            this.tree = [];
            this.tree.push(new Branch(begin,end));
            this.flowers = [];
            count = 0;
            this.red = random(255);
            this.green = random(255);
            this.blue = random(255);
        }
    }
}