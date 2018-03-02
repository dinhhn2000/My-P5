function Branch(begin, end){
    this.begin = begin;
    this.end = end;


    this.show = function(){
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    this.branchL = function(){
        var direction = p5.Vector.sub(this.end, this.begin);
        direction.rotate(random(-angle, 0));
        direction.mult(0.67);
        var newEnd = p5.Vector.add(this.end, direction);
        var subBranch = new Branch(this.end, newEnd);
        return subBranch;
    }

    this.branchM = function(){
        var direction = p5.Vector.sub(this.end, this.begin);
        direction.rotate(random(-angle, angle));
        direction.mult(0.67);
        var newEnd = p5.Vector.add(this.end, direction);
        var subBranch = new Branch(this.end, newEnd);
        return subBranch;
    }

    this.branchR = function(){
        var direction = p5.Vector.sub(this.end, this.begin);
        direction.rotate(random(0, angle));
        direction.mult(0.67);
        var newEnd = p5.Vector.add(this.end, direction);
        var subBranch = new Branch(this.end, newEnd);
        return subBranch;
    }
}