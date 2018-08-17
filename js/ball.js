
function Ball(x, y,radius, color, angle=-90) {
  this.x = x;
  this.y = y;
  this.speedX=0;
  this.speedY=0;
  this.angle = angle;
  this.radius = radius;
  this.color= this.selectRandomColor()
}

Ball.prototype.newPos=function(){
    this.y += 2;     
}


  Ball.prototype.selectRandomColor= function(){
    var colors= ["red", "green","blue"];
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
    if (this.x + this.radius >= width || this.x - this.radius < 0) {
      this.x *= -1;
       if(this.y + this.radius >= height || this.y - this.radius < 0) {
        this.y *= -1;
      }
  }
}



  Ball.prototype.shoot = function () {
    console.log("shoot!!!");
    var speed = 10;
    this.speedX = speed * Math.cos(this.angle*Math.PI/180);
    this.speedY = speed * Math.sin(this.angle*Math.PI/180);
  }
  
  
 








  
  
 
  
  


