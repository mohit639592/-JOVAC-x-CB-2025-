// // function

// function sumoftwo(a,b){  //parameter
//     let c = a+b;
//     return c;
// }
// var f = sumoftwo(23,80);  // argument
// console.log(f);



// //try to pass argument with decimal value
// function sumoftwo(a,b){  //parameter
//     let c = a+b;
//     return c;
// }

// var f = sumoftwo(1.2,80.2);  // argument
// console.log(f);
// //working normally


// //nested function
// function sumoftwo(a,b){  //parameter
//     let c = a+b;
//     console.log(sub(a,b));
//     return c;
//     function sub(a,b){
//         let diff = b-a;
//         return diff;
//     }
// }
// var f = sumoftwo(23,80);  // argument
// console.log(f);


// //scope of a function
// function sum(a,b){
//     let s = a+b;
// }
// sum(4,6);
// console.log(s);    // showing s is not defined because s is define inside the function sum and not accessable outside the function


// var c = 45;
// function sum(a,b){
//     let s = a+b;
//     console.log(c);    //here is no error because c is define in global and accessable in all the code
//     return s;   
// }
// console.log(sum(4,6));



// // clouser function
// function mul(a,b){
//     let mul = a*b;
//     var f = mul_with_add();
//     return f;
//     function mul_with_add(){     //in this function no parameter pass and the variable a,b,mul is taken from the outer funtion(mul) so this form clouser
//         let c = a+b;
//         let d = mul+c;
//         return d;
//     }
// }
// console.log(mul(3,5));


// // set timeout function
// setTimeout(() =>{
//     console.log(5);
// },4000);


// // set time out in different ways
// for(var i=0;i<6;i++){
//     setTimeout(() =>{
//         console.log("HELLO");
//     },4000);
// }


// for(var i=0;i<6;i++){
//     setTimeout(() =>{
//         console.log(i);       // here the output is 6 not 12345 just beacuse of syncronus and asyncronus 
//     },4000);
// }

//  // example of synchronus and asynchronus
//  console.log(" HELLO ");

//  setTimeout(() =>{
//     console.log("SetTimeout"); 
// },4000);

// function x(y){     
//     console.log("X");
//     y();
// }

// x(function(){
//     console.log("Y");
// });

// console.log("Thanks");

//the output of this code is
// HELLO 
// X
// Y
// Thanks
// SetTimeout    it is run after all syncronus work complete



//Event Listener
document.getElementById("functionCall").addEventListener("click",function abc(){
    console.log("WELCOME TO THE SITE");
})