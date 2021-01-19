class Particles {
    constructor(x,y) {
      var options = {
          restitution: 0.4,
          friction:0.1,
          density:2,
          }
      this.body = Bodies.circle(x,y,20/2,options);
      this.color=color(random(0,255) , random(0,255) , random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      push();
      translate(this.body.position.x,this.body.position.y);
      fill(this.color);
      ellipse(0, 0, 20 ,20);
      pop();
    }
  };