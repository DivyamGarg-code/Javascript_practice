
a(); // print : a called
b(); // TypeError : b is not a function
// Function Statement 
// This is a function statement or function declaration 
function a(){
    console.log("a called");
}

// Function Expression 
// Assigning function to a variable
var b=function(){
    console.log("b is called");
}

// Main difference b/w the function statement and function expression is the Hoisting  ie you can call the a() but b()m will give the error as the function is not initiallized to the variabe b

// Anonymous Functions -> Function without a name is an anonymous function [Anonymous Func's does not have their own identity]
// function(){}
// this will give the syntax error as per naming convention it should have a name 
// Anonymous functions are used at the place where the functions are used as values 

// Named function expression
var b=function xyz(){
    console.log("b is called");
}

// but if you try to do xyz() it will give error that xyz is not defined 

// Differenceb/w the parameters and the arguments
function fn(param1,param2){ // Here values passed to the functions are the parameters 

}
fn(1,2); // you pass arguments to the function during calling 

// FIRST CLASS FUNCTIONS 
// The abilty of the functions to be passed as values or func returned from the functons are the first class functions































