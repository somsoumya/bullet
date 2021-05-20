var bullet , wall;
var speed,weight;
var thickness



function setup() {
  createCanvas(1600,400);
 
 thickness=random(40,80);
 
 
  bullet = createSprite(200, 200, 50, 10);
 
 wall = createSprite(1200,200,thickness,300);
 

bullet.velocityX=5;

speed=random(240,360);
weight=random(35,60);

bullet.velocityX = speed;
}

function draw() {
  background("black");  

if (wall.x-bullet.x<(bullet.width+wall.width/2)){
  
  bullet.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22509;
  if(deformation>180){
    bullet.shapeColor="silver";
    wall.shapeColor="blue";
  }
if(deformation < 180  && deformation >100){
  bullet.shapeColor="silver";
  wall.shapeColor="blue";
}
if (deformation<100){
bullet.shapeColor="silver";
wall.shapeColor="blue";


}
 }

if (isCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5 * weight * speed*speed/(thickness * thickness * thickness);

  if (damage>10){
    wall.shapeColor="red";
  }
  if (damage<10){
    wall.shapeColor="green";
  }

}







  drawSprites();
}


function isCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true ;
}

return false ;

}





