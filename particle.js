class particle{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.polygon(x, y, 6, 10, options);
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        stroke("white");
        strokeWeight(4);
        line(this.body.vertices[0].x, this.body.vertices[0].y, this.body.vertices[1].x, this.body.vertices[1].y);
        line(this.body.vertices[1].x, this.body.vertices[1].y, this.body.vertices[2].x, this.body.vertices[2].y);
        line(this.body.vertices[2].x, this.body.vertices[2].y, this.body.vertices[3].x, this.body.vertices[3].y);
        line(this.body.vertices[3].x, this.body.vertices[3].y, this.body.vertices[4].x, this.body.vertices[4].y);
        line(this.body.vertices[4].x, this.body.vertices[4].y, this.body.vertices[5].x, this.body.vertices[5].y);
        line(this.body.vertices[5].x, this.body.vertices[5].y, this.body.vertices[0].x, this.body.vertices[0].y);
        pop();
      }
}