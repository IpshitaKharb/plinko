const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var plinko=[];
var particles=[];
var division=[];
var divisionHeight = 300;

function preload(){

}

function setup() {
    createCanvas(800,800);
    engine=Engine.create();
    world=engine.world;
    ground = new Ground(width/2,height,800,20);
    
     for(var i = 0; i<=width;i = i+80){
       division.push(new Division(i , height-divisionHeight/2,10,divisionHeight));
       }

      for(var s = 40; s<=width ; s = s + 50){
        plinko.push(new Plinko(s,75));
        }

      for(var s = 15; s<=width ; s = s + 50){
        plinko.push(new Plinko(s,175));
          }
  }

function draw() {
  background(0);

  Engine.update(engine); 

  drawSprites();

  ground.display();

   for(var i = 0; i<division.length; i++){
     division[i].display();
       }

  for(var s = 0; s<plinko.length; s++){
    plinko[s].display();
        }

        for(var t = 0; t<particles.length; t++){
         particles[t].display();
        }

        SPAWNparticles();
}

function SPAWNparticles(){
  if (frameCount%1===0){
particles.push(new Particles(random(30,770),10,10))
  }
}