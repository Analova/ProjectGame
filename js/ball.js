
function Ball(x, y,radius,angle=-90) {
    this.x = x;
    this.y = y;
    this.speedX=0;
    this.speedY=0;
    this.angle = angle;
    this.radius = radius;
    this.colors=["red", "green", "yellow","blue"]

  }

  Ball.prototype.color= function(){
  var colors= this.colors;
  var index =  Math.floor(Math.random()*colors.length);
  return colors[index]

  }

  Ball.prototype.draw = function () {
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  } 
  Ball.prototype.drawArrow = function () {
    var size = 100;
    var arrowX = this.x + size * Math.cos(this.angle*Math.PI/180);
    var arrowY = this.y + size * Math.sin(this.angle*Math.PI/180); 

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(this.x, this.y); // Bottom of arrow
    ctx.lineTo(arrowX, arrowY); // Top of arrow
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  Ball.prototype.goToNextPos = function () {
    this.x += this.speedX;
    this.y += this.speedY;
  }


  Ball.prototype.shoot = function () {
    console.log("shoot!!!");
    var speed = 10;
    this.speedX = speed * Math.cos(this.angle*Math.PI/180);
    this.speedY = speed * Math.sin(this.angle*Math.PI/180);
  }
  
  
  
  Ball.prototype.crash=function (arry){
    for(var i=0; i<arry.length; i++){
        console.log(this.mainBall.color()===balls[i].color)
        //if(this.mainBall.color()===balls[i].color){
           // console.log("Hit the bal");
        //}
      
      }
      console.log("Hit the ball")
}








  
  
 
  
  


