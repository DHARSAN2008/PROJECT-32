
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ball;
var ball;
var score=0
var gameState = "onSling";

function preload(){
  ballImage=loadImage("ball.png")
}


function setup() {
  createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

  ground1 = new Ground(600,595,1200,10)
  ground2= new Ground(600,5,1200,10)
  ground3 = new Ground(1195,300,10,600)
  ground4 = new Ground(5,300,10,600)
  
  
  roof1=new Stand(700,320,250,15)


  
  //level 1
  cup1= new Cup(700,315)
  cup2= new Cup(680,315)
  cup3= new Cup(660,315)
  cup4= new Cup(640,315)
  cup5= new Cup(720,315)
  cup6= new Cup(740,315)
  cup7= new Cup(760,315)
  cup8= new Cup(620,315)
  cup9= new Cup(780,315)

  //level 2
  cup10= new Cup(680,270)
  cup11= new Cup(660,270)
  cup12= new Cup(700,270)
  cup13= new Cup(720,270)
  cup14= new Cup(740,270)
  cup15= new Cup(760,270)
  cup16= new Cup(640,270)

  //level 3
  cup17= new Cup(680,225)
  cup18= new Cup(660,225)
  cup19= new Cup(700,225)
  cup20= new Cup(720,225)
  cup21= new Cup(740,225)

  //level 4
  cup22= new Cup(675,180)
  cup23= new Cup(700,180)
  cup24= new Cup(725,180)
   
  //level 5
  cup25= new Cup(700,150)

  roof2=new Stand(950,500,150,15)
  
  //level 1
  c1=new Cup(950,495)
  c2=new Cup(925,495)
  c3=new Cup(975,495)
  c4=new Cup(1000,495)
  c5=new Cup(900,495)

  //level 2
  c6=new Cup(950,440)
  c7=new Cup(925,440)
  c8=new Cup(975,440)
  
  //level 3
  c9=new Cup(950,400)

  roof3=new Stand(950,180,150,15)

  //level 1
  c10=new Cup(950,175)
  c11=new Cup(925,175)
  c12=new Cup(975,175)
  c13=new Cup(1000,175)
  c14=new Cup(900,175)

  //level 2
  c15=new Cup(950,120)
  c16=new Cup(925,120)
  c17=new Cup(975,120)
  
  //level 3
  c18=new Cup(950,75)

  roof4=new Stand(450,500,150,15)

  //level 1
  c19=new Cup(450,495)
  c20=new Cup(425,495)
  c21=new Cup(475,495)
  c22=new Cup(500,495)
  c23=new Cup(400,495)

  //level 2
  c24=new Cup(450,440)
  c25=new Cup(425,440)
  c26=new Cup(475,440)
  
  //level 3
  c27=new Cup(450,400)

  roof5=new Stand(450,180,150,15)

  //level 1
  c28=new Cup(450,175)
  c29=new Cup(425,175)
  c30=new Cup(475,175)
  c31=new Cup(500,175)
  c32=new Cup(400,175)

  //level 2
  c33=new Cup(450,120)
  c34=new Cup(425,120)
  c35=new Cup(475,120)
  
  //level 3
  c36=new Cup(450,75)

	ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  fill("lime")
  textSize(20)
  text("*IF YOU SMACK ALL CUPS YOU ARE THE BEST GAMER.",40,30)
  text("*PRESS SPACE FOR ANOTHER CHANCE.",40,60)
    
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();

  cup1.display();
  cup2.display();
  cup3.display();
  cup4.display();
  cup5.display();
  cup6.display();
  cup7.display();
  cup8.display();
  cup9.display();
  cup10.display();
  cup11.display();
  cup12.display();
  cup13.display();
  cup14.display();
  cup15.display();
  cup16.display();
  cup17.display();
  cup18.display();
  cup19.display();
  cup20.display();
  cup21.display();
  cup22.display();
  cup23.display();
  cup24.display();
  cup25.display();

  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  c6.display();
  c7.display();
  c8.display();
  c9.display();
  c10.display();
  c11.display();
  c12.display();
  c13.display();
  c14.display();
  c15.display();
  c16.display();
  c17.display();
  c18.display();
  c19.display();
  c20.display();
  c21.display();
  c22.display();
  c23.display();
  c24.display();
  c25.display();
  c26.display();
  c27.display();
  c28.display();
  c29.display();
  c30.display();
  c31.display();
  c32.display();
  c33.display();
  c34.display();
  c35.display();
  c36.display();

  imageMode(CENTER)
  fill("cyan")
  image(ballImage,ball.position.x,ball.position.y,40,40);
   
 
  drawSprites();
 
}


function mouseDragged(){

  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
 
function mouseReleased(){
  slingShot.fly();

}

function keyPressed(){

  if(keyCode === 32){
      slingShot.attach(this.ball)
      Matter.Body.setPosition(this.ball,{x:50,y:200})
      
  }
}