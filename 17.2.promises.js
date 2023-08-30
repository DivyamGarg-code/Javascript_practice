// Promises are used to handle async operations in javascript
// promise is an object that represents the eventual completion or failure of the asynchronous operation 

// Suppose in an ecommerrce website you've added some items in the cart 
// const cart=["shoes","pants","kurta"];

// 2 API's | Both the API's are asynchronous in nature but they are dependent on each other ie the response of the 1st API will be used by the 2nd API
// createOrder(cart); // It will generate a specific order Id

// proceedToPayment(orderId);

// Lets see how we can write code using callbacks
// we will wrap this API inside the callback function and pass it as an argument in the createOrder API

// createOrder(cart,callback_function);

// createOrder(cart,function(){
//     proceedToPayment(orderId);
// });
//Here are passing the callback function to the createOrder API and blindly trusting over it 
// In this way we handle asynchronous operations using callbacks

// This promise in an empty object with some data value in it ie {data:(API_returned_data)}

// const promise=createOrder(cart);

// whenever the JS engine will execute this line it will create an empty object with some data value in it ie {data:undefined} and at some later stage when the API is called it will fill this value {data:orderDetails}

// Here we are attaching the callback function to this promise object using then function

// promise.then(function(orderId){
//     proceedToPayment(orderId); 
// }) //This will be called whenever their is data inside the promise object
// Here this function will be called once

// var settings={
//     "url":"api endpoint",
//     "method":"GET",
//     "data":JSON.stringify(obj),
// };
// $ajax(settings).done(function(response){
//     console.log(response);
// })

// Lets use the fetch function to call 

const URL="https://restcountries.com/all"
// fetch() function is basically an API given by browser to us to make external calls[http requests]
const user= fetch(URL); // This fetch function will return me the promise object
// Lets observe the running state of fetch API
/*
user-> {
    [[Prototype]]:Promise,
    [[Promise State]]:"pending",  // Have 3 states "pending" , "fulfilled" and "rejected"
    [[PromiseResult]]:undefined
}
 */
console.log(user); // At this point of time the promise object is in the pending state

user.then(function(data){
    console.log(data);
})

/*
This nesting can lead to the callback hell 
createOrder(cart,function(orderId){
    proceedToPayment(orderId,function(paymentInfo){
        showOrderSummary(paymentInfo,function(){
            updateWalleteBalence();
        })
    })
})

But with the help of promises

// NOTE : MUST WRITE THE RETURN STATEMENT FOR THE PROPER IN FLOW OF DATA...................
const promise=createOrder(cart); OR
createOrder(cart) // Jo bhi createOrder ka result aayga vo pass hoga orderId vala param main
    .then(function(orderId){
        return proceedToPayment(orderId); // Iska result agli api ke param main pass hoga 
    })
    .then(function(paymentInfo){
        return showOrderSummary(paymentInfo);
    })
    .then(function(){
        return updateWalletBalance();
    })

Using arrow functions
createOrder(cart)
.then(cart=>proceedToPayment(orderId))
.then(paymentInfo=>showOrderSummary(paymentInfo))
.then(paymentInfo=>updateWalletBalance(paymentInfo))

 */