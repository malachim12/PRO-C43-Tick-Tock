function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
  
}

function draw() {
  background(0, 0, 0);  
  drawSprites();
  translate(200,200);
  rotate(-90);
  hrc = hour();
  m = minute();
  sc = second();
  scAngle = map(sc, 0,60,0,360);
  mAngle = map(m, 0,360);
  hrcAngle = map(hrc%12, 0,12,0,360);
  //Second hand
  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  //Minute hand
  push();
  rotate(mAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();
  //Hour hand
  push();
  rotate(hrcAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  //second
  strokeWeight(10);
  noFill();
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);
  //minute
  stroke(0,255,0);
  arc(0,0,280,280,0,mAngle);
  //hour
  stroke(0,0,255);
  arc(0,0,260,260,0,hrcAngle);

}