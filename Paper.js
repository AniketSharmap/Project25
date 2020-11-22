class Paper {
    constructor(x, y, radius) {
        var opt =
        {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("sprites/paper.png");
        this.body = Bodies.circle(x, y, radius/2, opt);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,0,0,100,55);
        pop();
    }
};