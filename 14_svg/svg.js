var board = document.getElementById("vimage");
var clearButton = document.getElementById("clear");
var moveButton = document.getElementById("move");
var xtraButton = document.getElementById("xtra");

var animation_id;

var clearBoard = function() {
  window.cancelAnimationFrame(animation_id);
  board.innerHTML = '';
}

var newDot = function(e) {
  dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  dot.setAttribute("cx", e.offsetX);
  dot.setAttribute("cy", e.offsetY);
  dot.setAttribute("r", 10);
  dot.setAttribute("dx", 1);
  dot.setAttribute("dy", 1);
  dot.setAttribute("dr", 1);
  dot.setAttribute("fill", "blue");
  dot.addEventListener("click", checkDot);
  board.appendChild(dot);
}

var checkDot = function(e){
  if (this.getAttribute("fill") == "blue"){
    this.setAttribute("fill", "cyan");
  }
  else{
    this.setAttribute("cx", Math.random() * board.getAttribute("width"));
    this.setAttribute("cy", Math.random() * board.getAttribute("height"));
    this.setAttribute("fill", "blue");
  }
  e.stopPropagation();
}

board.addEventListener("click", newDot);
clearButton.addEventListener("click", clearBoard);


var dotBounce = function() {
  var children = board.children;
  for (i = 0; i < children.length; i++){

    x =  parseInt(children[i].getAttribute("cx"));
    y =  parseInt(children[i].getAttribute("cy"));
    dx = parseInt(children[i].getAttribute("dx"));
    dy = parseInt(children[i].getAttribute("dy"));
    r =  parseInt(children[i].getAttribute("r") );

    children[i].setAttribute("cx", x + dx);
    children[i].setAttribute("cy", y + dy);

    if (x < r || x > board.getAttribute("width") - r) {
      children[i].setAttribute("dx", -dx);
      children[i].setAttribute("cx", x - dx * 3);
    }
  	if (y < r || y > board.getAttribute("height") - r) {
      children[i].setAttribute("dy", -dy);
      children[i].setAttribute("cy", y - dy * 3);
    }
  };
  animation_id = window.requestAnimationFrame(dotBounce);
}

var xtra = function(){
  var children = board.children;
  var randChild = Math.floor(Math.random() * children.length);
  children[randChild].setAttribute("fill", "red");
}

moveButton.addEventListener("click", dotBounce);
xtraButton.addEventListener("click", xtra);
