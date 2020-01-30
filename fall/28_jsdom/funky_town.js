var fibonacci = function(n){
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (n == 2) return 1;
  return fibonacci(n-1) + fibonacci(n-2);
}
// console.log(fibonacci(4))

document.getElementById("fib").addEventListener("click", function(){
  var value = fibonacci(4);
  console.log(value);
  document.getElementById("output").innerHTML = value;
});


var gcd = function(a, b){
  if (a == 0) return b;
  if (b == 0) return a;
  if (a == b) return a;
  if (a > b) return gcd(a-b, b);
  return gcd(a, b-a);
}
// console.log(gcd(48, 18));

document.getElementById("gcd").addEventListener("click", function(){
  var value = gcd(48, 18)
  document.getElementById("output").innerHTML = value;
  console.log(value);
});


var names = ["Bob", "Mary", "Kevin", "Sarah", "William", "Zoe"]

var randomStudent = function(){
  return randSHelper(names);
}

var randSHelper = function(){
  i = Math.floor(Math.random() * names.length);
  return names[i];
}

// console.log(randomStudent());

document.getElementById("randName").addEventListener("click", function(){
  var stu = randomStudent();
  console.log(stu);
  document.getElementById("output").innerHTML = stu;
});
