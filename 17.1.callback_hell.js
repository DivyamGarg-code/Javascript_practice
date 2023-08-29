/*
Callbacks are used to to asynchronous operations in JS
Problems assosiated while using Callbacks 
1. Callback Hell    
2. Inversion of Control
Let's talk about aan ecommerce website in which you have 2 api's first you have to create an order only after that you will be able to proceed to the payment ie 2nd API depends upon the 1st API response,we can do it with the help of the callback function

const cart=["shoes","pants","kurta"]

api.createOrder();
api.proceedToPayment();
api.showorderSummary(); // After the successful payment showing the order summary page
api.updateWallet(); // Now you want to update the wallet after you've shown the order summary

// Wrapping the dependent api's inside the callback functions to run efficiently......

api.createOrder(cart,function(){

    api.proceedToPayment(orderId,function(){

        api.showorderSummary(function(){

            api.updateWallet(); 
        });
    }); 
})
As you can see code starts to grow horizontally rather than vertically leading to so many nested callbacks resulting into a Callback Hell[Pyramid of Doom] 

Inversion of Control -> Lossing the control of code while using the callbacks as you have to blindly trust over one API that it will call another API to execute
 */

