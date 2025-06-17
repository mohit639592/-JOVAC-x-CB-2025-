//1. Named Function in Expression – Behavior:-


let a = function sum(a,b){
    var c = a+b;
    return c;
}
//console.log(sum(5,6));  

console.log(a(4,6));




let count = function counting(n) {
    if (n == 0) return;
    console.log(n);
    counting(n - 1); // calling itself by name
  };
  
  count(5);



//2. Garbage Collector – Behavior:-

let a = {
    name: "Mohit"
  };
  console.log(a);
  a = null; 
  console.log(a);
  
  


