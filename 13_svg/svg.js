var board = document.getElementById("vimage");
var clearButton = document.getElementById("clear");

var clearBoard = function() {
  board.innerHTML = '';
  lastX = -1;
}

var newDot = function(e) {
  dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  dot.setAttribute("cx", e.offsetX);
  dot.setAttribute("cy", e.offsetY);
  dot.setAttribute("r", 10);
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
