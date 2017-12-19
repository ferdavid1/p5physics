var xpos = 0;

function setup() {
  // put setup code here
  createCanvas(600,600);
}

function draw() {
  // put drawing code here
  // ellipse(50,50,80,80)
  
  background(255); //clear background
  
  fill(255,0,0); //set the fill color
  
  stroke(0); // black outline
  
  ellipseMode(CENTER); //set the ellipse mode

  //xpos = xpos + 2; //increment x variable
  xpos = mouseX
  if (xpos > width) {
  	xpos = 0;
  }

  ypos = mouseY
  ellipse(xpos, ypos, 25,25);

  ellipse(ypos, xpos, 25, 25);
  fill(0); // display xpos variable

  text("xpos = " + xpos, 25, 25) // display xpos variable
}	