function cb(){
    console.log("Callback");
}

setTimeout(() => {
    console.log("Hello World");
}, 5000);

/*
setTimeout with the delay of 5000ms does not always exactly waits for 5 seconds it can take more than 5s and all depends upon the callstack
 */