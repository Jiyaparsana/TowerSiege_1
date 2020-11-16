const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var base1,base2
var block8,block9,block10,block11,block12,block13,block14,block15,block16
var polygon_img,polygon

function preload(){
  polygon_img=loadImage("hexagon.png")
}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);
  base1 = new Ground(600,250,150,10)
  base2 = new Ground(700,150,50,10)

  //level 2
  block8 = new Box(330,235,30,40)
  block9 = new Box(360,235,30,40)
  block10 = new Box(390,235,30,40)
  block11 = new Box(420,235,30,40)
  block12 = new Box(450,235,30,40)

  //level 3
  block13 = new Box(360,195,30,40)
  block14 = new Box(390,195,30,40)
  block15 = new Box(420,195,30,40)

  //top
  block16 = new Box(390,155,30,40)

  //polygon
  polygon = Bodies.circle(50,200,20)
  World.add(world,polygon)


  slingshot = new SlingShot(polygon.body,{x:100, y:200});

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  base1.display()
  base2.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40)
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}