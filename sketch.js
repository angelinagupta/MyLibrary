var fixedRect, movingRect;
var square1, square2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  square1 = createSprite(200,100,50,50);
  square1.shapeColor = "green";

  square2 = createSprite(200,200,50,50);
  square2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  square1.x = World.mouseX;
  square1.y = World.mouseY;

  bounceOff(movingRect, fixedRect);
  
  if(isTouching(square1, square2)){
    square1.shapeColor = "red";
    square2.shapeColor = "red";

    }

    else{
      square1.shapeColor = "green";
      square2.shapeColor = "green";
    }

  drawSprites();
}

