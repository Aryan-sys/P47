var hr;
var mn; 
var sc; 
var scAngle, mnAngle, hrAngle;
var x,y,z

function setup() {
  createCanvas(800,400);
  hr = hour();
  mn = minute();
  sc = second();
x= 0;
y = 0;
z= 100;
  
}

function draw() {
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,60,0,360);

  background("black");  
  text("refresh the page to see the hands moving", 400,350)
  translate(440,200);
  push();
 rotate(scAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
 
  push();
 rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  push();
 rotate(hrAngle%12);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  drawSprites();
}