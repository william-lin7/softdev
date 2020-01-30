function fibonacci(n){
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (n == 2) return 1;
  return fibonacci(n-1) + fibonacci(n-2);
}

var myfib = fibonacci;
console.log(myfib(4))


function gcd(a, b){
  if (a == 0) return b;
  if (b == 0) return a;
  if (a == b) return a;
  if (a > b) return gcd(a-b, b);
  return gcd(a, b-a);
}

var mygcd = gcd;
console.log(mygcd(48, 18));


var names = ["Bob", "Mary", "Kevin", "Sarah", "William", "Zoe"]

function randomStudent(){
  return randSHelper(names);
}

function randSHelper(){
  i = Math.floor(Math.random() * names.length);
  return names[i];
}

var randName = randomStudent;
console.log(randName());
