var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var fairy, fairyImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  fairyImg = loadImage("fairy.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300,40,40);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  fairy = createSprite(200,200);
  fairy.addImage("fairy",fairyImg);
  fairy.scale=0.1

  
  
}

function draw() {
  background("black");
  
 if(tower.y > 400){
      tower.y = 300
    }
    if(keyDown("space")){
      fairy.velocityY=-10;

    }
    fairy.velocityY=fairy.velocityY+0.8
    spawndoors()
       drawSprites()
}
function spawndoors(){
  if(frameCount% 240 === 0){
  door = createSprite(200,-50);
  door.addImage("door",doorImg);
  climber = createSprite(200,10);
  climber.addImage("climber",climberImg);
  door.x=Math.round(random(120,400));
  climber.x=door.x;
  climber.velocityY=1
  door.velocityY=1;
  }
}
