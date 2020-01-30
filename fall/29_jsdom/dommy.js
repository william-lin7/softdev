var addItem = function(e){
  var list = document.getElementById('thelist')
  var item = document.createElement('li');
  var listItem = document.createTextNode("WORD");
  item.appendChild(listItem);
  item.addEventListener('mouseover', changeHeading);
  item.addEventListener('mouseout', function(){
    document.getElementById("h").innerHTML = "Hello World!";
  });
  item.addEventListener('click', removeItem);
  list.appendChild(item);
}

var removeItem = function(e){
  var list = document.getElementById('thelist');
  list.removeChild(e.target);
}

var button = document.getElementById("b");
button.addEventListener('click', addItem);

var changeHeading = function(e){
  var h = document.getElementById("h");
  h.innerHTML = e.target.innerHTML;
}

var lis = document.getElementsByTagName("li");

for (var i = 0; i < lis.length; i++){
  lis[i].addEventListener('mouseover', changeHeading);
  lis[i].addEventListener('mouseout', function(){
  document.getElementById("h").innerHTML = "Hello World!";});
  lis[i].addEventListener('click', removeItem);
};

var fiblist = [];

var fib = function(n){
  if (n < 2){
    return 1;
  }
  else{
    return fib(n-1) + fib(n-2);
  }
};

var addFib = function(e){
  var list = document.getElementById('fiblist');
  var item = document.createElement('li');
  var fibNum = fiblist.length;
  var listItem = document.createTextNode(fibNum);
  if (fibNum == 0){
    fiblist.push(0);
    var listItem = document.createTextNode(0);
  }
  else if (fibNum <= 2){
    fiblist.push(1);
    var listItem = document.createTextNode(1);
  }
  else{
    var fibval = fiblist[fiblist.length-1] + fiblist[fiblist.length-2]
    fiblist.push(fibval);
    var listItem = document.createTextNode(fibval);
  }
  item.append(listItem);
  list.append(item);
}

var fb = document.getElementById("fb");
fb.addEventListener("click", addFib);
