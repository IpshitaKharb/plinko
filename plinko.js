class Plinko {
    constructor(x,y) {
      var options = {
          isStatic : true
      }
      this.body = Bodies.circle(x,y,30/2,options);
      //this.color=color(random(0,255) , random(0,255) , random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle)
      fill("white");
      ellipse(0,0, 30 ,30);
      pop();
    }
  }