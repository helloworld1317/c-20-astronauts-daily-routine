var edges;
var astronaut;
function preload() {
  bg=loadImage("iss.png");
  sleep=loadAnimation("sleep.png");
  brush=loadAnimation("brush.png");
  gym=loadAnimation("gym1.png","gym2.png");
  eat=loadAnimation("eat1.png","eat2.png");
  drink=loadAnimation("drink1.png","drink2.png");
  bath=loadAnimation("bath1.png","bath2.png");
  floating=loadAnimation("move.png");
}
function setup() {
  createCanvas(800,400);
  astronaut=createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleep", sleep);
  astronaut.scale=0.1;
  
   
 
}

function draw() {
  background(bg);  
  drawSprites();
  textSize(20);
  fill(255);
  text("How To Play:",10,25);
  text("Up arrow=Brush",10,50);
  text("Down arrow=Workout",10,75);
  text("Left arrow=Eating",10,100);
  text("Right arrow=Bathing",10,125);
  text("M key=Floating",10,150);
  text("N key=Sleeping",10,175);
  text("B key=drinking",10,200);
 
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.X=400;
    astronaut.Y=200;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("workingout",gym);
    astronaut.changeAnimation("workingout");
    astronaut.X=400;
    astronaut.Y=200;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.X=400;
    astronaut.Y=200;
    astronaut.velocityX=3;
    astronaut.velocityY=5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.X=400;
    astronaut.Y=200;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("M")){
    astronaut.addAnimation("floating",floating);
    astronaut.changeAnimation("floating");
    astronaut.X=400;
    astronaut.Y=200;
    astronaut.velocityX=6;
    astronaut.velocityY=8;
  }

  if(keyDown("N")){
    astronaut.addAnimation("sleeping",sleep);
    astronaut.changeAnimation("sleeping");
    astronaut.X=400;
    astronaut.Y=200;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  
  if(keyDown("B")){
    astronaut.addAnimation("drinking",drink);
    astronaut.changeAnimation("drinking");
    astronaut.X=400;
    astronaut.Y=200;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
}