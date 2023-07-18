var player, sombra;
var bloco1, bloco2;
var pikpik1,pikpik2,pikpik3,pikpik4,pikpik5,pikpik6,pikpik7,pikpik8,pikpik9,pikpik10;
//ESTADO PULADO (NAO PULAR ENQUANTO TA NO AR)
var tiro, mouseX, mouseY;
var statepulo;
var animationP, imageTiro;

function preload()
{
  imageTiro = loadImage("pikpik_0.png");
  animationP = loadAnimation("pikpik_0.png","pikpik_1.png","pikpik_2.png","pikpik_3.png",);

}


function setup() 
{
  canvas =  createCanvas(windowWidth,windowHeight);

  bloco1 = createSprite(400, 400, 500, 50);
  statepulo = false;

  sombra = createSprite(400, 200, 40, 50);
  sombra.shapeColor =rgb(29, 56, 29);
  //sombra.visible = false;


  player = createSprite(400, 200, 40, 50);
  player.shapeColor =rgb(113, 74, 253);
  //seguir o player no x e no y
  pikpik1 = createSprite(100, 200, 30, 30);
  pikpik1.addAnimation("Animation", animationP);
  pikpik1.scale = 1;

  pikpik2 = createSprite(150, 200, 30, 30);
  pikpik3 = createSprite(200, 200, 30, 30);
  pikpik4 = createSprite(250, 200, 30, 30);
  pikpik5 = createSprite(300, 200, 30, 30);
  pikpik6 = createSprite(350, 200, 30, 30);
  pikpik7 = createSprite(400, 200, 30, 30);
  pikpik8 = createSprite(450, 200, 30, 30);
  pikpik9 = createSprite(500, 200, 30, 30);
  pikpik10 = createSprite(550, 200, 30, 30);

  //pikpik1.shapeColor =rgb(183, 56, 29);
  pikpik2.shapeColor =rgb(183, 56, 29);
  pikpik3.shapeColor =rgb(183, 56, 29);
  pikpik4.shapeColor =rgb(183, 56, 29);
  pikpik5.shapeColor =rgb(183, 56, 29);
  pikpik6.shapeColor =rgb(183, 56, 29);
  pikpik7.shapeColor =rgb(183, 56, 29);
  pikpik8.shapeColor =rgb(183, 56, 29);
  pikpik9.shapeColor =rgb(183, 56, 29);
  pikpik10.shapeColor =rgb(183, 56, 29);
}


function draw() 
{
  background(255,255,255);  
  drawSprites();

  player.collide(bloco1);
  //MUDANÇAS ESTADO PULADO
  if (player.collide(bloco1))
  {
    statepulo = true;
  }
  else{
    statepulo = false;
  }
  
  pikpik1.y = sombra.y + 13;

 

 
  sombra.y = player.y;

  if(keyDown("a"))
  {
    player.x = player.x-4;
    sombra.x = player.x + 25;
    pikpik1.x = sombra.x + 25;

  }
      
  if(keyDown("d"))
  {
    player.x = player.x+4;
    sombra.x = player.x - 25;
    pikpik1.x = sombra.x - 25;
    //não teletransportar - ajustar isso

  }
  
  //PULO
  if(keyDown("w") && statepulo == true)
  {
    player.velocityY = -4;
  }
  player.velocityY = player.velocityY + 0.5;


  if(mouseDown("leftButton")){
   
     
  tiros();


}




}


function tiros()
{
 
if(frameCount %120 === 0)
{

  tiro = createSprite(pikpik1.x, pikpik1.y, 30, 30)
  tiro.addImage("tirao", imageTiro);
  pikpik1.visible = false;
  mouseX = World.mouseX;
  mouseY = World.MouseY;
  tiro.velocityX = 1;
  tiro.velocityY = 1;

}
}