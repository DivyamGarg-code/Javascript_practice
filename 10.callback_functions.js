/*
What is a callback function in javascript ? 
Function that you pass to the another function so that you can call that function in the later stage is the callback function
eg setTimeout(function(){
    console.log("TIMER");
},1000)
function x(y){
    console.log("x");
}

x(function y(){
    console.log("y");
})

// Javascript is the synchronous single threaded language 

 */

setTimeout(function(){
    console.log("TIMER");
},5000)

function x(y){
    console.log("x");
    y();
}

x(function y(){
    console.log("y");
})

// We should always use async method if a particular function takes time to execute as blocking the main thread is not desirable
// eg $("btn").click(function(){console.log("Click Me")});
// As soon asthe event listener is hit this callback function will come into the callstack and executed 

// let suppose you want to track how many times the button is clicked how to do with help of closures + event listeners

// function addEventListeners(){
//     let cnt=0;
//     $(".btn").click(function(){
//         console.log("Button clicked",++cnt," times");  
//     })
// }

// $(document).ready(function(){
//     addEventListeners();
// })

// Why do we need to remove the event listners ?

//  Event listeners are heavy as they may form the closures with the lexical scope local variables so their memory is not freed up ie not garbage collected therfore we need to remove them when not in use as they take the extra space 
