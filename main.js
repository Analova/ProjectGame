var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var width = ctx.canvas.width;
var height = ctx.canvas.height;

var mainBall = new Ball (400,400,20);
 var counter = 0;

var smallBall1= new Ball (100,100,20); 
var smallBall2 = new Ball (200,100,20);
var smallBall3 = new Ball (300,100,20);
var smallBall4 = new Ball (400,100,20);
var smallBall5 = new Ball (500,100,20);
var smallBall6 = new Ball (600,100,20);
var balls=[smallBall1,smallBall2,smallBall3,smallBall4,smallBall5,smallBall6];

function getDistance(x1,y1,x2,y2){
    var xDistance= x2-x1;
    var yDistance= y2-y1;

    return Math.sqrt(Math.pow(xDistance,2) + Math.pow(yDistance,2));
} 

  

function checkIfWin (){ 
        if( balls.length===0) {
           ctx.clearRect(0, 0, canvas.width,canvas.height)
           ctx.fillText("You Won!!!", canvas.width/2, canvas.height/2)
           ctx.font = "30px Arial";
           ctx.fillStyle = "red";
           ctx.textAlign = "center";
}
}


var intervalId= setInterval(update, 1000/50);

function update(){
    counter++;
    ctx.clearRect(0,0,width,height);
    mainBall.goToNextPos();
    mainBall.draw();
    mainBall.drawArrow(); 
    getDistance();
    checkIfCreate();
    
    // Game Over 
    for(var i=0; i<balls.length; i++){  
        if(balls[i].y + balls[i].radius >= ctx.canvas.height ){
           gameover()
        }
    } 
    
    // balls coliding
    for(var i=0; i<balls.length; i++){  
        if(getDistance(mainBall.x, mainBall.y, balls[i].x, balls[i].y)< mainBall.radius + balls[i].radius && mainBall.color=== balls[i].color){
            balls.splice(i,1)
        }
    }  
    // new position of the small balls
    if (counter % 20 === 0){
        for(var i=0; i<balls.length; i++){  
            balls[i].newPos();
        }
    }
    
    for(var i=0; i<balls.length; i++){  
        balls[i].draw();
    }  
    checkIfWin();
}

function gameover(){
    console.log("gameover")
    clearInterval(intervalId)
    ctx.clearRect(0, 0, canvas.width,canvas.height)
    ctx.fillText("Game over!!!", canvas.width/2, canvas.height/2)
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";

}

function checkIfCreate(){
    if(mainBall.y < -10 || mainBall.x + mainBall.width > ctx.canvas.width || mainBall.x < -10){
    console.log("I am outside")
    mainBall= new Ball (400,400,20);
    }

}


canvas.onclick = function (e) {
    mainBall.shoot();

//console.log("Ball is clicked")
}

document.onkeydown = function(e) {
    console.log(e.keyCode);
    
    switch (e.keyCode) {
        case 38: // UP
            mainBall.shoot();
            break;
        case 37: // LEFT
            mainBall.angle -= 5; 
            break;
        case 39: //Right
            mainBall.angle += 5 ;
            break;
    }

    //console.log("mainBall.angle", mainBall.angle);
    
}







