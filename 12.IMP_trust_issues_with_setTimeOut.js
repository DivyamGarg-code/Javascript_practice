function cb(){
    console.log("Callback");
}


/*
setTimeout with the delay of 5000ms does not always exactly waits for 5 seconds it can take more than 5s and all depends upon the callstack

console.log("Start");

setTimeout(() => {
    console.log("TimeOut Callback");
}, 5000);
console.log("End");
..... million of lines of code to executed which takes alot of time let suppose 10s to execute in that case the global execution context will still be busy running the code while the timer is running gets expired and the callback func has already put inside the callback queue
and Event loop constanly monitors whether the callstack is empty or not so as to put the callback func to the callstack 
 */

console.log("Start");

setTimeout(() => {
    console.log("TimeOut Callback");
}, 5000);

console.log("End");

// Lets block the main thread for 10000 mili seconds;

let startTime=new Date().getTime();
// console.log(startTime);
let endTime=startTime;
while(endTime<startTime+10000){
    endTime=new Date().getTime();
}

console.log("while expires");

/*
Output : 
Start 
End
while expires (after 10 seconds)
TimeOut Callback (after 10 seconds)
 */

// You will see after the 10 seconds the callback function is pushed from the callback queue to the callstack after the global execution context is poped out from the callstack making it empty

// IN THIS WAY THE WHOLE CONCURRENCY MODEL OF JAVASCRIPT WORKS ie we can execute the asynchronous operations in the single threaded language  


// console.log("Start");

// setTimeout(() => {
//     console.log("TimeOut Callback");
// }, 0);

// console.log("End");

// Output : 
/*
Start 
End
Timeout Callback
 */