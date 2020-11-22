
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(10,626,800,20); 
	dustbin1 = new Dustbin(600,562,20,125); 
	dustbin2 = new Dustbin(525,615,130,20); 
	dustbin3 = new Dustbin(470,562,20,125); 
	dustbinImage = new DustbinImg(520,562,200,130); 
	paper = new Paper(22,610,30); 
	Engine.run(engine);
}


function draw() {

  background("aqua");
  Engine.update(engine);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  dustbinImage.display();
  paper.display();
  drawSprites();
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x: 33,y:-33});
	}
}




