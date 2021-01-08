
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600,400);

  
  monkey=createSprite(80,315,1,1);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.x);
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
background(255)
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
  }
  
   monkey.velocityY = monkey.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(obstacleGroup.isTouching(monkey)){
   FoodGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    ground.velocityX=0;
    FoodGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
  }
  stroke("white");
  textSize(20);
  fill("white")
  
 stroke("black");
  textSize(20);
  fill("black") ;
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime:"+ survivalTime,100,50)
    monkey.collide(ground);
  Food();
  Obstacles();
drawSprites();  
}

function Food(){
  if (frameCount % 80 === 0) {
    var food = createSprite(600,150,40,10);
    food.y = Math.round(random(80,180));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -3;
    food.lifetime=200;
    FoodGroup.add(food)
  }
}
function Obstacles() {
  if(frameCount % 300 === 0) {
     var obstacle = createSprite(600,308,10,40);
    obstacle.addImage(obstaceImage)
    //obstacle.debug = true;
    obstacle.velocityX = -8;
    
    obstacle.scale = 0.2;
    obstacle.lifetime = 200;
    
    obstacleGroup.add(obstacle);
    }
  }


