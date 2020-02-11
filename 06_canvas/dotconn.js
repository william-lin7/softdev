/*
William Lin, Derek Leung
SoftDev Pd. 2
K #06: Dot Dot Dot
2020-02-11
*/

var xcoor = null;
var ycoor = null;


var clearScreen = function(e){
  var c = document.getElementById("playground");
  var ctx = c.getContext("2d");
  ctx.clearRect(0,0,c.width,c.height);
	xcoor = null;
	ycoor = null;
};

var button = document.getElementById('clear');
button.addEventListener('click',clearScreen);


var draw = function(event){
    var c = document.getElementById("playground");
    var ctx = c.getContext("2d");
    var tempx = event.offsetX
    var tempy = event.offsetY
    ctx.beginPath(); //like pd in netlogo?
    ctx.arc(event.offsetX, event.offsetY, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.moveTo(tempx,tempy);
		if (xcoor != null && ycoor != null){
			ctx.lineTo(xcoor, ycoor);
			ctx.stroke();
		}
		xcoor = event.offsetX;
		ycoor = event.offsetY;
};

var canvas = document.getElementById("playground");
canvas.addEventListener('click', draw);
