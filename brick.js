class brick1 {
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
        var angle = this.body.angle;
        
        push();
        
        if (this.body.speed < 7.5) {
            translate(pos.x, pos.y);
            rotate(angle);
            
            strokeWeight(5);
            stroke("black");
            fill("#87CEEA");
            rect(0, 0, 50, 75);
            //rectMode(CENTER);
            
            
        }
        else {
            translate(pos.x, pos.y);
            rotate(angle);
            World.remove(world, this.body);
            
            this.Visiblity = this.Visiblity - 5;
            //rect(this.body.position.x, this.body.position.y, 50, 75);
            
        }
        pop();
        textSize(20);
        text("score: " + score, 300, 100);
    }
    score() {
        if (this.Visiblity < 0 && this.Visiblity > -155) {
            score++;
        }
    }
};

