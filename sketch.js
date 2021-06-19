
var trex ,trex_running;
var edges;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  edges = createEdgeSprites();
  /*edges[0] ==> left edge
  edges[1] ===> right edge
  edges[2] ===> top edge
  edges[3]===> bottom edge*/

}

function draw(){
  background(220)
  drawSprites();

  if(keyDown("space")){
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY+ 0.8;

  trex.collide(edges);
 // console.log(trex.y);

}