//create an empty array called balls
let balls = [];
var speeds = 0;
var run = false;


function setup() {
  	createCanvas(2000, 800);
}

function draw(){
	background(220);
  paddle();

  print(run);

  if (run == true && frameCount%20 == 0){
    let  b = new Ball(0, random(800), random(10));
    balls.push(b);
    console.log(balls); //print the balls array to the console
  }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	balls[i].drawBall();
    balls[i].moveBall();
    balls[i].bounceBall();
	  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  if (run == false){
    run == true;
  } else{
    run == false;
  }
}



// make the paddle and attach it to the mouse
function paddle(){
  stroke("black");
  strokeWeight(10);
  line(mouseX,mouseY-20,mouseX,mouseY+20);
}

//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
    this.direction = "right";
	}

	// draw a ball on the screen at x,y
	drawBall(){
    		stroke(0);
        	strokeWeight(1);
    		fill("red");
		ellipse(this.x,this.y,10,10);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
    if (this.direction == "right"){
      this.x = this.x+ this.speed;
    } else if(this.direction == "left"){
      this.x = this.x - this.speed;
    }
		// this.x = this.x+ this.speed;
		// this.y = this.y+.5;
	}

	//if the ball hits the paddle, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= mouseX-6 && this.x <= mouseX+20 && this.y > mouseY-20 && this.y < mouseY+20){
      			if (this.direction == "right"){
              this.direction = "left";
            }
            // } else{
            //   this.direction = "right";
            // }
    		}
  	}

}
