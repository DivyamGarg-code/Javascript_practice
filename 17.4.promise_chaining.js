// Promise Chaining 
const cart=["shoes","pants","kurta"]

// This is an asynchronous operation 
createOrder(cart)
.then(function(orderId){
    console.log(orderId);
    return orderId;
})
.then(function(orderId){ // kind of callback function as we are passing the order id to call next api
    return proceedToPayment(orderId);
}) // Its reponse will be passed to the next statement here new promise | here we are returning the promise 
.then(function(paymentInfo){ // Here based upon the response of the proceedTo Pa.. api call resolve/reject
    console.log(paymentInfo);
})
//Here we attaching a failure callback function to a catch using a promise object
.catch(function(err){ // This will handle all the errors thrown in the browser window
    console.log(err.message); 
}) // It will handle any kind of error message at any nested step to the top of this catch  it will not be concerned about the below chaining it will still work as it is

.then(function(orderId){ // Here based upon the response of the proceedToPayment api call resolve/reject
    console.log("No Matter if the previous step failed .Next steps will definately be called");
})
// Now let suppose you want to go the proceedToPayment even before the cart is failed how you will handle the case if at some step of chaining one fails how you'll manage next further functions in promise chaining 

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
            },3000);
        }
    });
    return pr;
}

function validateCart(cart){
    return cart.length!=0;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        // resolve("Payment Successful.....");
        const err=new Error("Payment Unsuccessful.....");
        reject(err);
    })
}