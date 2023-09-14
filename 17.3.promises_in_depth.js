// const cart=["shoes","pants","kurta"]
const cart=[]

// This is an asynchronous operation 
const promise=createOrder(cart) // This will return me the order id 
// console.log(promise);

// Consumer part...........
promise.then(function(orderId){
    console.log(orderId);
    // proceedToPayment(orderId);
}) // In case the promise fails you can use the catch function to handle it 
.catch(function(err){
    console.log(err.message);
})

// Producer Part..................
function createOrder(cart){ // It will return a promise over here
    // Here we will create a promise and return it
    const pr=new Promise(function(resolve,reject){
        // createOrder
        // ValidateCart
        // orderId
        if(!validateCart(cart)){ // If the cart is not validated you reject the promise
            const err=new Error("Cart is not valid");
            reject(err);  // Reject the promise
        }
        // logic for createOrder 
        const orderId="12345"
        if(orderId){
            setTimeout(() => {
                resolve(orderId);   
            }, 5000);
        }
    });
    return pr;
}

function validateCart(cart){
    return cart.length!=0;
}
