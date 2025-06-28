const nav = document.getElementById("navbar");
nav.addEventListener("click",(event)=>{
    if(event.target.tagName==="LI"){
        console.log("you clicked on the :",event.target.textContent);
        if(event.target.textContent==="Home"){
            console.log("Welcome to home: ");
        }
    }
});


//ADD THE NEW ITEM ON HTML PAGE 
// var newitem = document.createElement("li");
// newitem.textContent="Sign up";
// nav.append(newitem);

// var newitem=document.createElement("li");
// newitem.textContent="Login";
// navbar.appendChild(newitem);

nav.append("Login");

nav.appendchild("Signup");