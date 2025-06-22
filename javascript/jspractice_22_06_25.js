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
function a(callback){
    console.log("1");
    callback();
}
function b(callback){
    console.log("2");
    callback();
}
function c(callback){
    console.log("3");
     callback();
}
function d(){
    console.log("4");
}
a(()=>{
    b(()=>{
        c(()=>{
            console.log("DONE");
        })
    })
})

function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps completed");
        });
    });
});

