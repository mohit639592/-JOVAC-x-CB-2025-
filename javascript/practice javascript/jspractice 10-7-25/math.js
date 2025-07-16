// let a = 10;
// let b = 20;

// module.exports=a;

let a = 10;
let b = 20;            // output of this code in script.js is {a: 10 , b:10}  even when we only import a

module.exports = {
    a,
    b
}