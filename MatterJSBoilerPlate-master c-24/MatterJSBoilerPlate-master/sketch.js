
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var Ground,Paper,Box1,Box2,Box3;
function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	Ground = new ground(400,780,900,50);
  Paper = new paper(100,770,20);
  Box1 = new dust(450,680,150,40);
  Box2 = new dust(570,735,40,200);
  Box3 = new dust(690,680,150,40)
  
}


function draw() {
  background(0);
  Engine.update(engine);

  Ground.display();
  Paper.display();
  Box1.display();
  Box2.display();
  Box3.display();  
  drawSprites();
 
}

function keyPressed(){
 if(keyCode === UP_ARROW){
   
  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});


 }


}

