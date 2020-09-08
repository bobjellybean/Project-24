
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var log1,log2,log3,ground,ball;
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	log1 = new Dustbins(700,695,20,20);
	log2 = new Dustbins(750,695,20,20);
	log3 = new Dustbins(725,695,50,20);
	
	ground = new Ground(400,700,800,20);
	
	ball = new CrumpledPaper(300,300);


	Engine.run(engine);
  
}

 function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  log1.dispaly();
  log2.display();
  log3.display();
  ground.display();
  ball.display();
 
}


