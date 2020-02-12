/*
William Lin, Kevin Li
SoftDev Pd. 2
K #07: They lock us in the tower whenever we get caught
2020-02-12
*/

var radius = 0;
var increasing = true;
var id = null;
var stop = true;

var animate = function(event){
  var c = document.getElementById("playground");
  var ctx = c.getContext("2d");
  ctx.clearRect(0,0,c.width,c.height);
  ctx.beginPath(); //like pd in netlogo?
  ctx.arc(c.width / 2, c.height / 2, radius, 0, 2 * Math.PI);
  ctx.fill();
  if (radius == 0){
    increasing = true;
  }
  if (radius == c.width / 2 || radius == c.length / 2){
    increasing = false;
  }
  if (increasing){
    radius++;
  }
  else{
    radius--;
  }
  id = requestAnimationFrame(animate);
  stop = false;
};

var stop = function(event){
  if (stop){
    event.preventDefault();
  }
  else{
    cancelAnimationFrame(id);
    stop = true;
  }
}

var button1 = document.getElementById('animate');
button1.addEventListener('click', animate);

var button2 = document.getElementById('stop');
button2.addEventListener('click', stop);
