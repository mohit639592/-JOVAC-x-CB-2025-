// make a search engine 
const search = document.getElementById("search");
function handelsearch(event){
    console.log("search for",event.target.value);
}
// search.addEventListener("input",handelsearch);



//make it by debouncing by SETTIMEOUT
// function debsearch(func,delay){
//     let timeoutId;
//     return function(...args){
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(()=>{
//             func.apply(this,args);
//         },delay)

//     }
// }
// const search_debounce = debsearch(handelsearch,1000);
// search.addEventListener("input",search_debounce);


//make it by SET INTERVAL
let intervalid;

function interval_search(func,delay){
    let lastargs;
    return function(...args){
        lastargs=args;

    if(intervalid){
        clearInterval(intervalid);
    }
    intervalid = setInterval(()=>{
        func.apply(this,lastargs);
        clearInterval(intervalid);
    },500);
    }
}
const search_now = interval_search(handelsearch,1000);
search.addEventListener("input",search_now);