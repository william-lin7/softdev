var board = document.getElementById("vimage");
var clearButton = document.getElementById("clear");
var lastX = -1;
var lastY;

var clearBoard = function() {
  board.innerHTML = '';
  lastX = -1;
}

var newDot = function(e) {
  if (lastX == -1) {
    lastX = e.offsetX;
    lastY = e.offsetY;
    dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("cx", e.offsetX);
    dot.setAttribute("cy", e.offsetY);
    dot.setAttribute("r", 10);
    dot.setAttribute("fill", "black");
    board.appendChild(dot);
  } else {
    line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", lastX);
    line.setAttribute("y1", lastY);
    line.setAttribute("x2", e.offsetX);
    line.setAttribute("y2", e.offsetY);
    line.setAttribute("stroke", "black");
    dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("cx", e.offsetX);
    dot.setAttribute("cy", e.offsetY);
    dot.setAttribute("r", 10);
    dot.setAttribute("fill", "black");
    lastX = e.offsetX;
    lastY = e.offsetY;
    board.appendChild(line);
    board.appendChild(dot);
  }
}

board.addEventListener("click", newDot);
clearButton.addEventListener("click", clearBoard);
