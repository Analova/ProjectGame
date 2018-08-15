var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var width = ctx.canvas.width;
var height = ctx.canvas.height;

var mainBall = new Ball (400,400,20);

var smallBall1= new Ball (100,100,20); 
var smallBall2 = new Ball (200,100,20);
var smallBall3 = new Ball (300,100,20);
var smallBall4 = new Ball (400,100,20);
var smallBall5 = new Ball (500,100,20);



function getDistance(x1,y1,x2,y2){
    var xDistance= x2-x1;
    var yDistance= y2-y1;

    return Math.sqrt(Math.pow(xDistance,2) + Math.pow(yDistance,2));
}


setInterval(update, 1000/50);

function update(){
    ctx.clearRect(0,0,width,height);
    mainBall.goToNextPos();
    if(getDistance(mainBall.x, mainBall.y, smallBall1.x, smallBall1.y)< mainBall.radius + smallBall1.radius){
    smallBall1.color="aqua";
    } 
    checkIfCreate();
    //crash();
    //draw
    mainBall.draw();
    mainBall.drawArrow();
    smallBall1.draw();
    smallBall2.draw();
    smallBall3.draw();
    smallBall4.draw();
    smallBall5.draw();

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


  



  
  


