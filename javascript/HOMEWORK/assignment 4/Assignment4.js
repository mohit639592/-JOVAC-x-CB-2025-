// normal click 

const a = document.getElementById("box1");
const b = document.getElementById("box2");
const c = document.getElementById("box3");

a.addEventListener('click',()=>{
    console.log("box1 clicked");
});

b.addEventListener('click',() =>{
    console.log("box2 clixked");
});

c.addEventListener('click',()=>{
    console.log("box3 clicked");
});


//when we click box 1 only box 1 click and same as box 2 and 3
const a = document.getElementById("box1");
const b = document.getElementById("box2");
const c = document.getElementById("box3");

a.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log("box1 clicked");
});

b.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log("box2 clicked");
});

c.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log("box3 clicked");
});
