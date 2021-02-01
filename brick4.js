class brick4 {
    constructor(x, y) {
        var options = {
            'isStatic': false,
            'restitution': 0.1,
            'friction': 1,
            'density': 0.1
        }
        this.body = Bodies.rectangle(x, y, 50, 75, options);
        
        this.Visiblity = 255;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        if (this.body.speed < 7.5) {
            push();
            translate(pos.x, pos.y);
            strokeWeight(5);
            stroke("black");
            fill("#808080");
            rect(0, 0, 50, 75);
            
            pop();
        }
        
        else {
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255, this.Visiblity);
            //rect(this.body.position.x, this.body.position.y, 50, 75);
            pop();
        }
        
    }
    score() {
        if (this.Visiblity < 0 && this.Visiblity > -220) {
            score++;
        }
    }
};
