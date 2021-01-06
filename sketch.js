
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var stone;

function preload()
{
	boyImage = loadImage("Plucking mangoes/boy.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(50,500,40);
	tree = new Tree();
	ground=new Ground(400,690,800,20);
	
	mango=new Mango(600,300,70,70);
	mango2=new Mango(530,420,70,70);
	mango3=new Mango(590,390,70,70);
	mango4=new Mango(650,370,70,70);
	mango5=new Mango(680,400,70,70);

	sling=new Sling(stone.body,{x:60,y:470});

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  stone.display();
  tree.display();
  ground.display();
  mango.display();
  mango2.display();
  sling.display();
  mango3.display();
  mango4.display();
  mango5.display();
  

  image(boyImage,100,570,100,450)


 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY});
}

function mouseReleased(){
	sling.fly();
}

function detectcollision(stone, mango){
	mangoBodyPosition=mango.body.position;
	stoneBodyPosition=stone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=mango.r,stone.r){
		Matter.Body.setStatic(mango.body,false);
	}

}

