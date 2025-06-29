//HW 1

// const nav = document.getElementById("navbar");
// nav.addEventListener("click",(event)=>{
//     if(event.target.tagName==="LI"){
//         console.log("you clicked on the :",event.target.textContent);
//         if(event.target.textContent==="Home"){
//             console.log("Welcome to home: ");
//         }
//     }
// });


//ADD THE NEW ITEM ON HTML PAGE 
// var newitem = document.createElement("li");
// newitem.textContent="Sign up";
// nav.append(newitem);

// var newitem=document.createElement("li");
// newitem.textContent="Login";
// navbar.appendChild(newitem);

// nav.append("Login");

// nav.appendchild("Signup");



//HW 2
//DEBOUNCE BY SETINTERVAL

const searchinput=document.getElementById("search");
function handelsearch(event){
    console.log("search for: ",event.target.value);
}
let intervalId;


function search_interval(func,delay){
    let lastargs;
    return function(...args){
        lastargs=args;

        if(intervalId){
            clearInterval(intervalId);
        }
        intervalId = setInterval(()=>{
            func.apply(this,lastargs);
            clearInterval(intervalId);
        },delay);
    };
}

const search_now=search_interval(handelsearch,1000);
searchinput.addEventListener("input",search_now);