/*
Hoisting is the process or phenomena by which you can access the variables and functions even before iniallizing them in further steps  wihtout any kind of error.
 */
getName();  // Output: Hello Everyone
// but if you console
console.log(getName) // Output: it will print the function itself

console.log(x); // Output: undefined

var x=7; // variable initialization 

function getName(){
    console.log("Hello Everyone");
}



