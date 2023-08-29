/*
Browser -> JS Engine(has the callStack where the GEC is push..) + Web API's

Web API's -> These are not the part the part of js rather they are the part of browser which further gives access to the js engine/call stack to utilize them through the global object ie "Window"

Global Object -> Window that contains
- setTimeout() 
- DOM API's   document....
- fetch()
- local Storage
- console
- location http://www
- event listners



The event loop is a fundamental concept in JavaScript's concurrency model that enables it to handle asynchronous operations and events in a non-blocking manner. It's responsible for managing the execution of code, handling events, and ensuring that the user interface remains responsive even when there are time-consuming tasks to be executed.

JavaScript is single-threaded, meaning it processes one task at a time in a linear manner. This thread of execution is managed by the event loop. Here's how the event loop works:

Call Stack: When JavaScript code is executed, it's placed on the call stack, which is essentially a data structure that keeps track of the order in which functions are called.

Execution: The JavaScript engine processes functions from the call stack one by one, executing their code sequentially.

Asynchronous Tasks and Callbacks: JavaScript also supports asynchronous operations, like fetching data from a server or setting a timeout. These tasks are offloaded to the browser's APIs (e.g., the DOM API or the Web API). When an asynchronous task is completed, a callback function (a function provided as an argument) is placed in the Callback Queue.

Event Loop: The event loop continuously checks the Call Stack and the Callback Queue. If the Call Stack is empty, it takes the first callback from the Callback Queue and pushes it onto the Call Stack, where it's executed. This process continues as long as there are tasks in the Callback Queue.

// Why there is need of callback queue?
Suppose a click event listner is attached to a btn and it is clicked 5-6 times then basically its callback will be pushed accordingly in the callback queue 
Here's a simplified example:

---------------------------------------------------
console.log("Start");

setTimeout(function() {
    console.log("Timeout callback");
}, 2000);

console.log("End");
---------------------------------------------------

In this example, the output will be:

Start
End
Timeout callback

Here's what happens step by step:

"Start" is added to the Call Stack and logged.
The setTimeout function is called, and the browser's Web API schedules the callback function to be executed after 2000 milliseconds.
"End" is added to the Call Stack and logged.
The Call Stack is empty, so the event loop checks the Callback Queue and finds the setTimeout callback.
The callback is pushed onto the Call Stack and logged.
The event loop allows JavaScript to handle asynchronous operations and events without blocking the main thread, which is crucial for creating responsive user interfaces and efficient execution of code.
 */

/*
2nd example 
fetch("https://api.netflix.com").then(function cbF(){
    console.log("CB Netflix");
});

Here the exactly the same thing will not happen the callback function will go to the microtask queue
Here we have a Microtask Queue -> it is similar to the callback queue but it has the higher priority then the callback queue whatever the functions that come inside this queue are executed first then the callback queue 
ALL THE CALLBACK FUNCTIONS THAT COME THROUGH PROMISES WILL GO INTO THIS MICROTASK QUEUE also the Mutation Observer
Callback Queue also known as Task QUeue
Starvation->  when the  task in the microtask queue are running and the task in the callback queue waiting for long time for its turn
 */