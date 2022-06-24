var player,thief;
var gold,money;
var play, win;
var winSignBoard, winLogo;
var gameState = play;
var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;
var wall7;
var wall8;
var wall9;
var wall10;
var wall11;
var wall12;
var wall13;
var wall14;
var police;
var officer1;
var officer2;
var officer3;
var ground,groundImg;

function preload() {
  thief = loadImage("thief.png");
  money = loadImage("money.png");
  winLogo = loadImage("winlogo.png");
  police = loadImage("cop.png");
  groundImg = loadImage("ground.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  ground = createSprite(windowWidth/2,windowHeight/2,20,20);
  ground.addImage("groundtexture",groundImg);
  ground.scale = 5;

  player = createSprite(windowWidth/2,windowHeight/2,20,20);
  player.shapeColor = "darkred";
  player.addImage("playerthief", thief);
  player.scale = 0.1;

  gold = createSprite(windowWidth/2+500,windowHeight/2-275,20,20);
  gold.shapeColor = "gold";
  gold.addImage("moneybag", money);
  gold.scale = 0.1;

  winSignBoard = createSprite(windowWidth/2,windowHeight/2,20,20);
  winSignBoard.addImage("winsign",winLogo);
  winSignBoard.scale = 0.5;

  wall1 = createSprite(windowWidth/2-30,windowHeight/2,5,65);
  wall2 = createSprite(windowWidth/2+30,windowHeight/2,5,65);
  wall3 = createSprite(windowWidth/2,windowHeight/2+30,65,5);
  wall4 = createSprite(windowWidth/2+30,windowHeight/2-65,5,65);
  wall5 = createSprite(windowWidth/2-47,windowHeight/2-95,150,5);
  wall6 = createSprite(windowWidth/2-120,windowHeight/2+20,5,230);
  wall7 = createSprite(windowWidth/2+10,windowHeight/2+135,265,5);
  wall8 = createSprite(windowWidth/2+140,windowHeight/2-5,5,285);
  wall9 = createSprite(windowWidth/2-15,windowHeight/2-150,315,5);
  wall10 = createSprite(windowWidth/2-172,windowHeight/2+50,5,400);
  wall11 = createSprite(windowWidth/2+75,windowHeight/2+250,500,5);
  wall12 = createSprite(windowWidth/2+325,windowHeight/2+50,5,400);
  wall13 = createSprite(windowWidth/2+140,windowHeight/2-250,5,200);
  wall14 = createSprite(windowWidth/2+573,windowHeight/2-150,500,5);

  officer1 = createSprite(windowWidth/2+115,windowHeight/2+105,20,20);
  officer1.addImage("cop", police);
  officer1.scale = 0.06;
  
  officer2 = createSprite(windowWidth/2-45,windowHeight/2-180,20,20);
  officer2.addImage("cop", police);
  officer2.scale = 0.06;

  officer3 = createSprite(windowWidth/2-75,windowHeight/2+160,20,20);
  officer3.addImage("cop", police);
  officer3.scale = 0.06;
  
}

function draw() {
  background(255,255,255);

  player.bounceOff(wall1);
  player.bounceOff(wall2);
  player.bounceOff(wall3);
  player.bounceOff(wall4);
  player.bounceOff(wall5);
  player.bounceOff(wall6);
  player.bounceOff(wall7);
  player.bounceOff(wall8);
  player.bounceOff(wall9);
  player.bounceOff(wall10);
  player.bounceOff(wall11);
  player.bounceOff(wall12);
  player.bounceOff(wall13);
  player.bounceOff(wall14);

  if (keyDown(RIGHT_ARROW)) {
    player.x += 2;
  }
  if (keyDown(LEFT_ARROW)) {
    player.x -= 2;
  }
  if (keyDown(DOWN_ARROW)) {
    player.y += 2;
  }
  if (keyDown(UP_ARROW)) {
    player.y -= 2;
  }

  winSignBoard.visible = false;
  
  getCaughtUp();

  getCaughtUp2();

  reachTheGold();

  drawSprites();
}

function reachTheGold() {
  if(player.isTouching(gold)) {
    gameState = win;
    winSignBoard.visible =true;
  }
}

function getCaughtUp() {
  if(player.isTouching(officer1)) {
    player.x = windowWidth/2;
    player.y = windowHeight/2;
  }
}

function getCaughtUp2() {
  if(player.isTouching(officer3)) {
    player.x = windowWidth/2;
    player.y = windowHeight/2;
  }
}