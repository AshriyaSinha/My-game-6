var cha1, playbutton 
var gameState = 0

function setup() {
  createCanvas(displayWidth,displayHeight - 175);
  ca1 = createSprite(displayWidth/1.2, displayHeight/2, 50, 50);
  ca1.addImage (cha1);
  ca1.scale = 0.7 

  ca3 = createSprite(displayWidth/1.2, displayHeight/2, 50, 50);
  ca3.addImage (cha5);
  ca3.scale = 0.7

  playbutton = createSprite(width/2.25,height/1.3 ,25,25)
  playbutton.addImage (plu);
  playbutton.scale = 0.5

  ob1 = createSprite (displayWidth/1.85, displayHeight/2 + 175,550,10)
  ob1.shapeColor = "red"
  ob1.visible = false;

  ob2 = createSprite (displayWidth/1.85, displayHeight/12,550,10)
  ob2.shapeColor = "red"
  ob2.visible = false;

  ob3 = createSprite (displayWidth/1.23, displayHeight/3 + 175,10,300)
  ob3.shapeColor = "black"
  ob3.visible = false;

  ob4 = createSprite (displayWidth/1.23, displayHeight/6 ,10,150)
  ob4.shapeColor = "black"
  ob4.visible = false;
  
  ob5 = createSprite (displayWidth/2.8, displayHeight/4.5 ,10,150)
  ob5.shapeColor = "blue"
  ob5.visible = false; 


  // level 2

        //Borders

  ball2 = createSprite (displayWidth/3.8, displayHeight/3.3,30,30)
  ball2.shapeColor  = "blue"
  ball2.visible = false;

  l2o1 = createSprite (displayWidth/1.85, displayHeight/12,800,10)
  l2o1.shapeColor = "black"
  l2o1.visible = false;

  l2o2 = createSprite (displayWidth/1.85, displayHeight/2 + 175,800,10)
  l2o2.shapeColor = "black"
  l2o2.visible = false;

  l2o3 = createSprite (displayWidth/3.8, displayHeight/3 + 175,10,300)
  l2o3.shapeColor = "black"
  l2o3.visible = false;
  
  l2o4 = createSprite (displayWidth/3.8, displayHeight/6 ,10,150)
  l2o4.shapeColor = "black"
  l2o4.visible = false; 

  l2o5 = createSprite (displayWidth/1.23, displayHeight/3 + 175,10,300)
  l2o5.shapeColor = "black"
  l2o5.visible = false;

  l2o6 = createSprite (displayWidth/1.23, displayHeight/6 ,10,150)
  l2o6.shapeColor = "black"
  l2o6.visible = false;

  l2o12 = createSprite (displayWidth/4, displayHeight/3.3 ,10,150)
  l2o12.shapeColor = "white"
  l2o12.visible = false; 

  l2o13 = createSprite (displayWidth/1.2, displayHeight/3.3 ,10,150)
  l2o13.shapeColor = "green"
  l2o13.visible = false; 


        //Obstacles 

  l2o7 = createSprite (displayWidth/1.85, displayHeight/6.8 ,10,100)
  l2o7.shapeColor = "red"
  l2o7.visible = false;
  l2o7.velocityY = random(10,30);
  
  l2o8 = createSprite (displayWidth/1.55, displayHeight/6.8 ,10,100)
  l2o8.shapeColor = "red"
  l2o8.visible = false;
  l2o8.velocityY = random(10,30);

  l2o9 = createSprite (displayWidth/2.98, displayHeight/6.8 ,10,100)
  l2o9.shapeColor = "red"
  l2o9.visible = false;
  l2o9.velocityY = random(10,30);
  
  l2o10 = createSprite (displayWidth/2.3 , displayHeight/6.8 ,10,100)
  l2o10.shapeColor = "red"
  l2o10.visible = false;
  l2o10.velocityY = random(10,30);

  l2o11 = createSprite (displayWidth/1.35, displayHeight/6.8 ,10,100)
  l2o11.shapeColor = "red"
  l2o11.visible = false;
  l2o11.velocityY = random(10,30);

        //Robin
        ca2 = createSprite(displayWidth/7.4, displayHeight/2, 50, 50);
        ca2.addImage (cha2);
        ca2.scale = 0.7 
        ca2.visible = false;

  //  sound .play ()
}

function preload() {
  cha1 = loadImage ("Images/Starfier.png")
  cha2 = loadImage ("Images/Robin.png")
  cha3 = loadImage ("Images/Cyborg.png")
  cha4 = loadImage ("Images/Beast boy.png")
  cha5 = loadImage ("Images/Raven.png")
  plu = loadImage ("Images/Play.png")
  bg = loadImage ("Images/Tower 2.png")
  bg2 = loadImage ("Images/JS BG.png")
  bg3 = loadImage ("Images/JS BG2.png")
  db1 = loadImage ("Images/Dialouge boc.png")
  l1 = loadImage  ("Images/maze 12.png")
  //sound = loadSound ("sound.mp3")
}

function draw() { 

  l2o7.bounceOff (l2o1);
  l2o7.bounceOff (l2o2);

  l2o8.bounceOff (l2o1);
  l2o8.bounceOff (l2o2);

  l2o9.bounceOff (l2o1);
  l2o9.bounceOff (l2o2);

  l2o10.bounceOff (l2o1);
  l2o10.bounceOff (l2o2);

  l2o11.bounceOff (l2o1);
  l2o11.bounceOff (l2o2);

  ball2.collide (l2o1);
  ball2.collide (l2o2);
  ball2.collide (l2o3);
  ball2.collide (l2o4);
  ball2.collide (l2o5);
  ball2.collide (l2o6);
  //ball2.collide (l2o12)

  if (gameState == 0){
    background(bg);
    fill ("black")
    textSize (17)
    image (db1, displayWidth/1.75, displayHeight/30, 360,250)

    text ("Hi! I am Starfier and the titans \nneed you to escape from slades\n prission.", 
    displayWidth/1.63 , displayHeight/9.5)
      if (mousePressedOver(playbutton)) {
          gameState = 3;
    
  }
}

if (gameState == 1){

  ob1.visible = true; 
  ob2.visible = true;
  ob3.visible = true;
  ob4.visible = true;
  ob5.visible = true;
  //ob6.visible = true;
  playbutton.visible = false; 
  ca1.visible = false; 

  background (bg2);
  image (l1, displayWidth, displayHeight, 600,600)

  if (mousePressedOver(ob1)) {
    gameState = 3;
  }
} 

if (gameState == 3){
  background (bg3)

  playbutton.visible = false; 
  ca1.visible = false; 
  ca3.visible = false;

  ob1.visible = false; 
  ob2.visible = false;
  ob5.visible = false; 

  ball2.visible = true;
  ca2.visible = true;
  
  if(keyIsDown(RIGHT_ARROW)){
    ball2.x = ball2.x + 3
  }

 if(keyIsDown(LEFT_ARROW)){
  ball2.x = ball2.x - 3
}

if(keyIsDown(UP_ARROW)){
  ball2.y = ball2.y - 3
}

if(keyIsDown(DOWN_ARROW)){
ball2.y = ball2.y + 3
}

if (ball2.isTouching(l2o7) || ball2.isTouching(l2o8) || ball2.isTouching(l2o9) || ball2.isTouching(l2o10)
 || ball2.isTouching(l2o11)) {

   ball2.x = displayWidth/3.8;
   ball2.y = displayHeight/3.3;
 }

if(ball2.isTouching(l2o13)){
   gameState = 4;
 }


  l2o1.visible = true;
  l2o2.visible = true;
  l2o3.visible = true;
  l2o4.visible = true; 
  l2o5.visible = true; 
  l2o6.visible = true;
  l2o12.visible = true;
  l2o13.visible = false;


  //

  l2o7.visible = true;
  
  l2o8.visible = true;
  l2o9.visible = true;
  l2o10.visible = true;
  l2o11.visible = true;
}

if(gameState === 4){

  l2o1.visible = false;
  l2o2.visible = false;
  l2o3.visible = false;
  l2o4.visible = false; 
  l2o5.visible = false; 
  l2o6.visible = false;
  l2o12.visible = false;
  l2o13.visible = false;


  //

  l2o7.visible = false;
  ball2.visible = false;
  
  l2o8.visible = false;
  l2o9.visible = false;
  l2o10.visible = false;
  l2o11.visible = false;

}

drawSprites();
}