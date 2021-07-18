var path_running,path;
var boy_running,boy;

function preload(){
  //pre-load images
  path_running=loadImage("path.png");
  boy_running=loadAnimation("Runner-1.png","runner-2.png");

}

function setup(){
  createCanvas(600,700);
  //create sprites here
  path=createSprite(320,286,60,50);
  path.addAnimation("running",path_running);
  path.scale=2
  path.velocityY=4
  path.y=path.width/2
  
  //creating boy
  boy=createSprite(200,397,40,20);
  boy.addAnimation("running",boy_running);
  edges=createEdgeSprites();
  boy.scale=0.3
  boy.y = 397
}

function draw() {
  background("lightgreen");

  if(keyDown("space")){
    path.velocityY=-2
  }

if(keyDown("enter")){
  boy.velocityY=-2

}

if(path.y<0){
  path.y=path.width+2
  }

  if(boy.y<0){
    boy.y=boy.width/2
    }
  drawSprites()
}
