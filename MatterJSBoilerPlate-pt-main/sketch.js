var fogo,agua
var fogoImg,aguaImg
var aguad,fogod
var aguae,fogoe
var diamanteBlue,diamanteRed
var  diamanteBlueImg,diamanteRedImg


function preload()
{ 
	fogoImg=loadImage("./va/fogof.jpg")
	aguaImg=loadImage("./va/aguaf.jpg")
	aguad=loadAnimation("./va/agua_direita.png","./va/agua_direita2.png")
	fogod=loadAnimation("./va/fogo_direita.png","./va/fogo_d2.png")
	aguae=loadImage("./va/agua_esquerda.png")
	fogoe=loadAnimation("./va/fogo_esquerda.png","./va/fogo_esquerda2.png")
	diamanteBlueImg=loadImage("diamante_azul.png")
	diamanteRedImg=loadImage("dimante_red.png")




}

function setup() {
	createCanvas(800, 700);



	//Crie os Corpos aqui.


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



