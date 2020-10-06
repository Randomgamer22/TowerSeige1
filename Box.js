class Box {
  constructor(x, y, width, height){
    var options = {
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color = color;
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    rectMode(CENTER);
    fill("red");
    rotate(angle);
    translate(this.body.position.x, this.body.position.y);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
