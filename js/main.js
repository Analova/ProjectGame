var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var width = ctx.canvas.width;
var height = ctx.canvas.height;
// var colors = ["red", "green", "yellow","blue"];

var mainBall = new Ball (400,400,30);

var smallBall1= new Ball (100,100,20); 
var smallBall2 = new Ball (200,100,20);
var smallBall3 = new Ball (300,100,20);
var smallBall4 = new Ball (400,100,20);
var smallBall5 = new Ball (500,100,20);

var balls=[smallBall1,smallBall2,smallBall3,smallBall3,smallBall3,smallBall5]




mainBall.draw();
smallBall1.draw();
smallBall2.draw();
smallBall3.draw();
smallBall4.draw();
smallBall5.draw();

// console.log(ctx.fillStyle = mainBall.color());
// console.log(ctx.fillStyles= smallBall1.color());
// console.log(ctx.fillStyles= smallBall2.color());
// console.log(ctx.fillStyles= smallBall3.color());
// console.log(ctx.fillStyles = smallBall4 .color());
// console.log(ctx.fillStyles = smallBall5.color());


  

setInterval(function() {
    ctx.clearRect(0,0,width,height);
    mainBall.goToNextPos();
    smallBall1.goToNextPos();
    smallBall2.goToNextPos();
    smallBall3.goToNextPos();
    mainBall.draw();
    mainBall.drawArrow();
    smallBall1.draw();
    smallBall2.draw();
    smallBall3.draw();
    smallBall4.draw();
    smallBall5.draw();
}, 20);


canvas.onclick = function (e) {
    mainBall.shoot();
console.log("Ball is clicked")
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

    console.log("mainBall.angle", mainBall.angle);
    
}
  



  
  


