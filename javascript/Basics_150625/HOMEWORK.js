// //1. Named Function in Expression – Behavior:-


// let a = function sum(a,b){
//     var c = a+b;
//     return c;
// }
// //console.log(sum(5,6));  

// console.log(a(4,6));




// let count = function counting(n) {
//     if (n == 0) return;
//     console.log(n);
//     counting(n - 1); // calling itself by name
//   };
  
//   count(5);



// //2. Garbage Collector – Behavior:-

// let a = {
//     name: "Mohit"
//   };
//   console.log(a);
//   a = null; 
//   console.log(a);
  
  
//  19-06-25 HOMEWORK

// function sum(a,b){
//   return a+b;
// }

// function mul(a,b){
//   return a*b;
// }

// function sub(a,b){
//   return a-b;
// }

// function divide(a,b){
//   return a/b;
// }

// function square(a){
//   return a*a;
// }

// //HIGHER ORDER FUNCTION

// function cal(operation,a,b){
//   return operation(a,b);
// }
// console.log(cal(sum,12,23));
// console.log(cal(sub,12,23));
// console.log(cal(mul,12,23));
// console.log(cal(divide,12,23));
// console.log(cal(square,12));


function print_tabel(a){
  for(let i=1;i<=10;i++){
      console.log(a +"*"+i+"="+a*i);
  }
}

function cube(a){
  return a*a*a;
}

function even_odd(a){
  if(a%2==0) return "Even";
  else return "Odd";
}

function helper(operation,a){
  return operation(a);
}

helper(print_tabel , 2);
console.log(cube(4));
console.log(even_odd(5));
console.log(even_odd(6));




