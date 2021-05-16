

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

ground1= new Ground(200,200,20,20)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


//function mouseDragged(){
   
//}
//function mouseReleased(){
   
//}

//function keyPressed(){
   // if(keyCode === 32){
     //  slingshot1.attach(stone1.body);
   // }
//}
}
function draw() {
  rectMode(CENTER);
  background('black');
 ground1.display

}



