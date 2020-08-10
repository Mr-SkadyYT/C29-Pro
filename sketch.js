const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  object1 = new particle(100,100);
  string01 = new String(object1.body,{x:100,y:200});
  platform = new Ground(400,200,290,10);
  box1 = new Box(400,175);
  box2 = new Box(370,175);
  box3 = new Box(350,175);
  box4 = new Box(330,175);
  box5 = new Box(310,175);
  box6 = new Box(410,175);
  box7 = new Box(420,175);
  box8 = new Box(436,175);
  box9 = new Box(460,175);
  box10 = new Box(470,175);


}

function draw() {
  background(0);  
  Engine.update(engine);
  object1.display();
  string01.display();
  platform.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  

}

function mouseDragged(){
  Matter.Body.setPosition(object1.body,{x:mouseX,y:mouseY});
}

function mouseReleasef(){
  string01.fly();
}