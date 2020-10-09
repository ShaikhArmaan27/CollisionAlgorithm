var movingRectangle;
var stillRectangle;


function setup() {
  createCanvas(800,400);
  movingRectangle = createSprite(500, 200, 150, 50); 
  stillRectangle = createSprite(350,200,50,150);
  movingRectangle.debug = true 
  stillRectangle.debug = true
}

function draw() {
  background(0,0,0);
   movingRectangle.x = World.mouseX;
   movingRectangle.y = World.mouseY;
   
   if(movingRectangle.x - stillRectangle.x <= movingRectangle.width/2 + stillRectangle.width/2 
    && stillRectangle.x - movingRectangle.x <= movingRectangle.width/2 + stillRectangle.width/2 
    && movingRectangle.y - stillRectangle.y <= movingRectangle.height/2 + stillRectangle.height/2 
    && stillRectangle.y - movingRectangle.y <= movingRectangle.height/2 + stillRectangle.height/2){   
      movingRectangle.shapeColor = "red";
      stillRectangle.shapeColor = "red";
   }
   else{
    movingRectangle.shapeColor = "green";
    stillRectangle.shapeColor = "green";
   }
  drawSprites();
}