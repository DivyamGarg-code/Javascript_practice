/**
 * What is async?
 * What is await?
 * How async await works behind the scenes?
 * Examples of using async/await
 * Error Handling
 * Interviews
 * Async await vs Promises .then/.catch
 * 
 */
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 5000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 10000);
});

// This function will always return a promise
// if it is returning a value then that value will be wrapped inside the promise 
async function getData() {
    return p1;
}
const dataPromise = getData();

// console.log(dataPromise);
// dataPromise.then((res) => console.log(res)); // This will print the value


// ----------------------------------
// Normal function
// function handlePromise() {
// Js Engine will not wait for the promise to resolve and print the next line immediately as soon as the function is called
//     p.then((res)=>console.log(res));
//     console.log("Nameste Js"); // This will be printed 
// }
// handlePromise();
// ----------------------------------

// Async and await combination is used to handle promises
// await can only be used inside the async function  
async function handlePromise() {
    console.log("Hello World")
    // Js engine will wait for the promise to be resolved
    const val = await p1;
    console.log(val);
    console.log("Nameste Js");

    const val1 = await p2;
    console.log(val1);
    console.log("Nameste Js 2");

}
// handlePromise();

/*
call stack 
async - p1,p2
handlePromise() -> This function execution gets suspended for the time it sees the 1st await [ie it does'nt block the call stack]
After the promise gets resolved it again come back in the call stack from where it had left and starts executing the next lines of code 

 */

// Handling actual Promises
async function getUserData() {
    // If the API is successfully executed then the try block will work otherwise catch
    try {
        const data = await fetch("https://api.github.com/users/divyamgarg-code");
        // fetch => Response object 
        const jsonValue = await data.json();
        // Respose.json() => jsonValue
        console.log(jsonValue);
    } catch (error) {
        console.log(error);
    }

}
getUserData();
// getUserData().catch((err)=>console.log(err));