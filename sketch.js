
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,boyimg,tree,treeimg
function preload()
{
  boyimg=loadImage("boy.png")
  treeimg=loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  var boy_options ={
    isStatic: true
}

//boy = Bodies.rectangle(200,390,400,20,boy_options);
//boy=addImage(boyimg)
//World.add(world,boy);

stone= new Stone(200,300,20)
//tree= new Tree(500,150)
mango1=new Mango(530,300,10,20)
mango2=new Mango(500,300,10,20)
mango3=new Mango(580,280,10,20)
mango4=new Mango(550,200,10,20)
mango5=new Mango(600,300,10,20)
ground=new Ground(400,650,800,40)
chain=new Chain(stone.body,{x:80,y:470})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  image (treeimg,430,70,280,600)
  mango1.display()
   mango2.display()
    mango3.display() 
    mango4.display() 
    mango5.display()
     ground.display()
     image (boyimg,150,550,200,400)
     
        
        stone.display()
         detectcollision(stone,mango1)
          detectcollision(stone,mango2)
           detectcollision(stone,mango3)
            detectcollision(stone,mango4)
             detectcollision(stone,mango5)
  drawSprites();
 
}
function mouseDragged(){
    stone.body.position.x = mouseX;
    stone.body.position.y = mouseY;

}
function mouseReleased(){
 chain.fly()   
}
function keyPressed(){
if(keyCode===32){
	Matter.Body.setPosition(stone.body,{x:235,y:420})
	chain.attach(stone.body)
}

}
function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y
	,mangoBodyPosition.x,mangoBodyPosition.y	)
	if(distance<=lmango.r+lstone.r){

		Matter.Body.setStatic(lmango.body,false)
	}

}


