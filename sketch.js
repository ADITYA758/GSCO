var CAR,WALL;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  CAR=createSprite(50,200,50,50,height/2);
  WALL=createSprite(1500,200,60,height/2)
  WALL.shapeColor=80,80,80
  speed=random(50,90);
  weight=random(400,1500); 
  CAR.VelocityX=speed;
}

function draw() {
  background("Skyblue");  
  drawSprites();

  console.log(deformation)


  if (WALL.x-CAR.x>(CAR.width=Wall.width))
  {
    CAR.VelocityX=0
    var deformation=0.5*weight*speed*speed/22500;
  
    if (deformation<180 &&  deformation>100)
    {
      CAR.shapeColor=color(255,0,0)
    }

    if (deformation>180)
    {
      CAR.shapeColor=color(230,230,0)
    }

    if (deformation>100)
    {
      CAR.shapeColor=color(0,255,0)
    }
  
  }
  


}



