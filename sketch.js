const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var polygonImage,polygon,slingShot;

function preload (){

polygonImage = loadImage("polygon.png")

}

function setup() {
  createCanvas(1000,600);

    engine = Engine.create();
    world = engine.world;
  
ground1 = new Ground (390,365,150,15)  
ground2 = new Ground (760,245,100,15)  
ground3 = new Ground (500,530,1000,10)  
block8 = new Block(330,335,30,40)
block2 = new Block(360,335,30,40)
block3 = new Block(390,335,30,40)
block4 = new Block(420,335,30,40)
block5 = new Block(450,335,30,40)

block6 = new Block(360,295,30,40)
block7 = new Block(390,295,30,40)
block9 = new Block(420,295,30,40)

block10 = new Block(390,255,30,40)

block11 = new Block(760,175,30,40)
block12 = new Block(730,215,30,40)
block13 = new Block(760,215,30,40)
block14 = new Block(790,215,30,40)

block6 = new Block(360,295,30,40)
block7 = new Block(390,295,30,40)

polygon = Bodies.circle(30,310,20)

//ball = Bodies.circle(50,200,20);

//slingShot =new SlingShot(this.ball,{x:100,y:200})
chain = new SlingShot(this.polygon,{x:30,y:310})
}

function draw() {
  background(225,192,203);  

  Engine.update(engine);
  
  textSize(25)
  text("Drag the Hexagonal Stone and Release it,to lauch it towards the blocks !!",50,50);


  ground1.display();
  ground2.display();
  ground3.display();
  block8.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  

  imageMode(CENTER)
  image(polygonImage,polygon.position.x,polygon.position.y,60,60)
  
  chain.display();
}


function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
chain.fly()
}


function keyPressed(){
  if(keyCode === 32){
  chain.attach(this.polygon)
  
  }
  }
  












