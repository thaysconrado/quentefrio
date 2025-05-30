let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background("#09FD13"); // fundo de tela laranja

  
  x = x +  random (-2, 2);
  y = y + random (-2,2);
  x = constrain(x,0,400);
  y = constrain(y,0, 400);
  let distanciaX;
    let distanciaY;
    let distancia;
    distanciaX = mouseX - x;
    distanciaY = mouseY - y;
    distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
    circle(mouseX, mouseY, distancia);// circulo com coorenada aleatória
  
  if(distancia < 30){
    fill("red");
    circle(mouseX, mouseY, distancia);
  } else if (distancia ,90){
    fill("orange");
    circle(mouseX, mouseY, distancia);
  } else if (distancia < 120){
    fill("#3F3FE5")
    circle(mouseX, mouseY, distancia);
  } else if (distancia <160){
    fill("#03A9F49")
    circle(mouseX, mouseY, distancia);
  }
 
  if(distancia < 3) { // se posicaoX do mouse for igual a x
    text("Encontrei!", 200, 200);// então mostrará o texto "encontrei"
    if( distancia < 120){
      fill("orange")
      circle(mouseX, mouseY, distancia)
   noLoop();
    
  }
}
}