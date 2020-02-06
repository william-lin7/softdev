var c = document.getElementById("slate");
//console.log(c);
var ctx = c.getContext("2d");
//console.log(ctx);
ctx.fillStyle = "#ff0000";
// ctx.fillRect(50 , 50, 100, 200);
// console.log(ctx);


var clear = function(){
	var width = c.width;
	var height = c.height;
	ctx.clearRect(0,0,width,height);
}

var createRect = function(){
	var x = event.clientX;
	var y = event.clientY;
	ctx.fillRect(x , y, 100, 200);
}

var createDot = function(){
  var x = event.clientX;
	var y = event.clientY;
	ctx.fillRect(x , y, 10, 10);
}

var shape = "rect";

var toggle = document.getElementById("toggle");
console.log(toggle.checked);

toggle.addEventListener("click", function(){
  console.log(toggle.isChecked);
  if (toggle.checked){
    shape = "dot";
    document.getElementById("message").innerHTML = "Now drawing dots. Toggle to switch to rectangles."
    // console.log("CHANGED TO CIRCLE");
  }
  else{
    shape = "rect";
    document.getElementById("message").innerHTML = "Now drawing rectangles. Toggle to switch to dots."
    // console.log("testing");
  }
  // console.log("toggled");
})

var button = document.getElementById("clear");
button.addEventListener("click", clear);

c.addEventListener("click", function(){
  if (shape == "rect"){
    c.addEventListener("click", createRect());
  }
  else{
    c.addEventListener("click", createDot());
    console.log("creating DOT");
  }
  // console.log("clicked");
  // console.log(shape);
});
