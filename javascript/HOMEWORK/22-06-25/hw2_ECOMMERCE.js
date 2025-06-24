const products = [
    {
        id:1,
        pdname:"Mobile",
        price: 12000
    },
    {
        id:2,
        pdname:"Headphone",
        price: 500
    },
    {
        id: 3,
        pdname:"Laptop",
        price: 60000
    },
    {
        id: 4,
        pdname:"Tablet",
        price: 6000
    },
    {
        id: 5,
        pdname: "AC",
        price: 14000
    }
]

//NORMAL CODE

let cart=[];

let wallet = 90000;
//1.ADD TO CART
function add_to_cart(pid){
        products.find(function(products){
            if(products.id==pid){
                    cart.push(products);
                  console.log(products.pdname + " added to cart");
}
    })
    if(cart.length==0) console.log("PRODUCT NOT FOUND");

}

function showcart(){
   const show=cart.map(cart=>cart.pdname);
    console.log("Cart Items:  " , show);
}

let totalprice=0;


function createOrder(){
    let pro=cart.map(cart=>cart.pdname+"    "+cart.price);
    console.log("Your Order:" ,pro);
    let order = cart.reduce(function(acc,curr){
        acc=acc+curr.price;
        return acc;
},0);
totalprice=order;
console.log("Total amount to pay:  "+order);
}


function payment(total){
    if(total<wallet){
        wallet=wallet-total;
        console.log("Payment Succsessful. Available Balance:  "+wallet);
        cart=[];
    }
    else{
        console.log("LOW BALANCE — YOU CAN ONLY BUY THESE ITEMS");
    }
}

function moreproduct(){
    let more=products.filter(products=> products.price<=wallet);
    let moreprod= more.map(more=> more.pdname+"  "+more.price);
    console.log("You can buy:" ,moreprod);
}


add_to_cart(3);
add_to_cart(2);
add_to_cart(5);
showcart();
createOrder();
payment(totalprice);
moreproduct();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// project by callback



//let totalprice = 0;

// ADD TO CART WITH CALLBACK
function add_to_cart(pid, callback) {
    const product = products.find(p => p.id === pid);
    if (product) {
        cart.push(product);
        console.log(product.pdname + " added to cart");
        callback();
    } else {
        console.log("PRODUCT NOT FOUND");
    }
}

// SHOW CART WITH CALLBACK
function showcart(callback) {
    const show = cart.map(cart => cart.pdname);
    console.log("Cart Items: ", show);
    callback();
}

// CREATE ORDER WITH CALLBACK
function createOrder(callback) {
    const pro = cart.map(cart => cart.pdname + "    " + cart.price);
    console.log("Your Order: ", pro);
    let order = cart.reduce(function(acc,curr){
                acc=acc+curr.price;
                return acc;
        },0);
    totalprice = order;
    console.log("Total amount to pay: " + order);
    callback();
}

// PAYMENT WITH CALLBACK
function payment(callback) {
    if (totalprice <= wallet) {
        wallet = wallet - totalprice;
        console.log("Payment Successful. Available Balance: " + wallet);
        cart = [];
        callback();
    } else {
        console.log("LOW BALANCE — YOU CAN ONLY BUY THESE ITEMS");
        callback();
    }
}

// SHOW AVAILABLE PRODUCTS BASED ON BALANCE
function moreproduct() {
    const more = products.filter(p => p.price <= wallet);
    const moreprod = more.map(p => p.pdname + "  " + p.price);
    console.log("You can buy: ", moreprod);
}

// RUN FLOW USING CALLBACKS
add_to_cart(3, function() {
    add_to_cart(2, function() {
        add_to_cart(5, function() {
            showcart(function() {
                createOrder(function() {
                    payment(function() {
                        moreproduct();
                    });
                });
            });
        });
    });
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//project by promises


//let totalprice = 0;

// ADD TO CART BY THE Promise
function add_to_cart(pid) {
    const a =new Promise((resolve, reject) => {
        const product = products.find(p => p.id === pid);
        if (product) {
            cart.push(product);
            console.log(product.pdname + " added to cart");
            resolve();
        } else {
            reject("Product Not Found");
        }
    });
    return a;
}

// SHOW CART BY PROMISES
function showcart() {
    const b =new Promise((resolve) => {
        const show = cart.map(cart => cart.pdname);
        console.log("Cart Items: ", show);
        resolve();
    });
return b;
}

// CREATE ORDER THE PROMSIS
function createOrder() {
    const c= new Promise((resolve) => {
        const pro = cart.map(cart => cart.pdname + "    " + cart.price);
        console.log("Your Order: ", pro);
        let order = cart.reduce(function(acc,curr){
                            acc=acc+curr.price;
                            return acc;
                    },0);
        totalprice = order;
        console.log("Total amount to pay: " + order);
        resolve();
    });
    return c;
}

// PAYMENT BY THE PROMISE
function payment() {
    const d= new Promise((resolve, reject) => {
        if (totalprice <= wallet) {
            wallet = wallet - totalprice;
            console.log("Payment Successful. Available Balance: " + wallet);
            cart = [];
            resolve();
        } else {
            reject("LOW BALANCE — YOU CAN ONLY BUY THESE ITEMS");
        }
    });
    return d;
}

// MORE PRODUCTS BY THE PROMISES
function moreproduct() {
    const e= new Promise((resolve) => {
        const more = products.filter(p => p.price <= wallet);
        const moreprod = more.map(p => p.pdname + "  " + p.price);
        console.log("You can buy: ", moreprod);
        resolve();
        return e;
    });
}

add_to_cart(3)
    .then(() => add_to_cart(2))
    .then(() => add_to_cart(5))
    .then(() => showcart())
    .then(() => createOrder())
    .then(() => payment())
    .then(() => moreproduct())
    .catch(err => console.log("Error:", err));
