var iss1,iss2;
var spacecraft1,spacec2,spacec3,spacec4,spacec5;
var bg;
var hasDocked = false;

function preload(){
iss1 = loadImage("iss.png")
bg = loadImage("spacebg.jpg")
spacecraft1 = loadImage("spacecraft1.png")
spacec2 = loadImage("spacecraft2.png")
spacec3 = loadImage("spacecraft3.png")
spacec4 = loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(600,400);
 
spacec5 = createSprite(290,245)
spacec5.addImage(spacecraft1)
spacec5.scale = 0.2
iss2 = createSprite(350, 150, 50, 50);
iss2.addImage(iss1);
iss2.scale = 0.7;
}


function draw() {
  background(bg); 
  
  if(!hasDocked){
   spacec5.x = spacec5.x + random(-1,1)

   if(keyDown("UP_ARROW")){
    spacec5.y = spacec5.y - 2
   }
   if(keyDown("LEFT_ARROW")){
    spacec5.x = spacec5.x - 2
    spacec5.addImage(spacec3)
   }
   if(keyDown("RIGHT_ARROW")){
    spacec5.x = spacec5.x + 2
   spacec5.addImage(spacec4)
   }
   if(keyDown("DOWN_ARROW")){
   spacec5.addImage(spacec2)
   }
  }
if(spacec5.y<=(iss2.y+70)&& spacec5.x<=(iss2.x-10)){
hasDocked = true;
fill("white")
text('DOCKING SUCCESFULL',200,300)
}
  drawSprites();
}