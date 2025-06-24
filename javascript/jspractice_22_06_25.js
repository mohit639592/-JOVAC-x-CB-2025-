//LEXICAL SCOPE
// function outer(){
//     var a=9;
//     function inner(){
//         console.log(a); //a is accessable in inner fxn due to lexical scope
//     }
//     inner();
// }
// // inner();      //inner is not define

// outer(); 



//SETINTERVAL
// setInterval(()=>{
//     console.log("HELLO");    // continue printing hello in 2 sec
// },2000);



// setTimeout(()=>{
//     console.log("hii");
// },2000)


// for(var i=0;i<=4;i++){
//     setTimeout(()=>{  //// output is 5 5 5 5 5 
//         console.log(i);
//     })
// }


// for(var i=0;i<=4;i++){
//     function a(i){
//         setTimeout(()=>{        //// output is 0 1 2 3 4
//             console.log(i);
//         },2000);
//     }
//     a(i);
// }


// document.getElementById("hello").addEventListener("click",function a(){
//     console.log("SUCCESS");

// })


//Comparison opreator
// let a = 2;
// let b = "2";
// if(a==b){
//     console.log("BOTH ARE SAME");          //the output is   BOTH ARE SAME
// }
// if(a===b){
//     console.log("BOTH ARE DIFFERENT BUT SAME");
// }



// let a = 2;
// let b = 2;
// if(a==b){
//     console.log("BOTH ARE SAME");          //the output is BOTH ARE SAME    BOTH ARE DIFFERENT BUT SAME
// }
// if(a===b){
//     console.log("BOTH ARE DIFFERENT BUT SAME");
// }


//callback
// function a(callback){
//     console.log("1");
//     callback();
// }
// function b(callback){
//     console.log("2");
//     callback();
// }
// function c(callback){
//     console.log("3");
//      callback();
// }
// function d(){
//     console.log("4");
// }
// a(()=>{
//     b(()=>{
//         c(()=>{
//             console.log("DONE");
//         })
//     })
// })

// function step1(callback) {
//     setTimeout(() => {
//         console.log("Step 1 completed");
//         callback();
//     }, 1000);
// }

// function step2(callback) {
//     setTimeout(() => {
//         console.log("Step 2 completed");
//         callback();
//     }, 1000);
// }

// function step3(callback) {
//     setTimeout(() => {
//         console.log("Step 3 completed");
//         callback();
//     }, 1000);
// }

// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("All steps completed");
//         });
//     });
// });



//MAP FUNCTION
    //normal function
// var arr=[1,2,3,4,5,6,7];
// function square(a){
//     return a*a;
// }
// function cube(a){
//     return a*a*a;          
// }
// function calc(arr,logic){
//     var arr2=[];
//     for(var i=0;i<arr.length;i++){
//         arr2.push(logic(arr[i]));
//     }
//     return arr2;
// }
// var out = calc(arr,square);
// console.log(out);

   //map function
//    var arr=[1,2,3,4,5,6,7];
//    function square(a){
//        return a*a;
//    }
//    function cube(a){
//        return a*a*a;          
//    }
//    var a = arr.map(square);             // It is act like a HOF  automatically pass the element one by one in square function
//    console.log(a);        
   
//    let b = arr.map(cube);
//    console.log(b);
//    var a = square(arr);
//    console.log(a);                        //The output is NAN


//FILTER 
// function is_EVEN(x){
//     return x%2==0;                  //EVEN FUNCTION
//     return x%2;                     //odd function
// }                                             
// const arr = [1,2,3,4,5,6,7,8,9,10];
// var arr2 = arr.filter(is_EVEN);             // this filter function filter the function if it return true
// console.log(arr2);


//REDUCE
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var arr2 = arr.reduce(function(acc,curr){
//     acc=acc+curr;
//     return acc;
// },0);
// console.log(arr2);


//FIND MAXIMUM OF ARRAY BY NORMAL METHOD
// var arr = [1,2,3,4,5,89,34,23,12];
// //let max;                               // now it is showing undefined
// let max = 0;                             // works normally
// for(var i=0;i<arr.length;i++){
//     if(arr[i]>max) max=arr[i];
// }
// console.log(max);

//FIND MAXIMUM OF ARRAY BY REDUCE METHOD
// let arr = [661,2,3,4,5,61,7,8,9,10];
// var max = arr.reduce(function(acc,curr){
//     if(acc<curr){
//         acc=curr;
//     }
//     return acc;
// },0)
// console.log(max);


//ARRAY OBJECT

const users = [
    {
        firstname: "Mohit",
        Lastname: "Sharma",
        age: 22
    },
    {
        firstname: "Rohit",
        Lastname: "Sharma",
        age: 32
    },
    {
        firstname: "Shiva",
        Lastname: "Sharma",
        age: 42
    },
    {
        firstname: "Vishnu",
        Lastname: "kumar",
        age: 54
    }
]

//output their name
const name = users.map(users=>users.firstname +" "+users.Lastname);
console.log(name);

//Average of age
