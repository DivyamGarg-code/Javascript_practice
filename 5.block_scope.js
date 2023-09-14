/*
Block is also known as compound statement and and it is used to combine multiple javascript statements into 1 group 
{
    // compound statement
    var a=10;
    console.log(a);
} We grow multiple statements together in a block so that we can use it where js expects 1 statement

if(true) true; // here you are running only 1 statement
when you want to run multiple statements you group them together inside a block so that javascript gets the single statement to run 
eg if(true) {
    .......
    .......
    .......
}


{
    var a=10;
    let b=20;
    const c=30;
}

// In the memory allocation phase we wil see memory is allocated in this way
Block:
    b:undefind
    c:undefind
Global:
    a:undefined
That's why it is said that the let and const are block scoped as they are stored in the seperate memory space which is reserved for this block scope  

Now as you can see b & c varibles lie in the block scope so they are not accessable outside the block while a is in the global scope so it is accessable outside the block

// Shadowing in JS 
var a=100;
let b=100;
const c=100;
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a)// print 10
    console.log(b)// print 20
    console.log(c)// print 20
}
console.log(a) // print 10
variable a is shadowed and modify the value of a in global scope so it will print 10 in both the cases

console.log(b) // print 100
Here both the b's are differen, one is in the script scope while another is in the block scope so it will print different results

same for variable c

Shadowing is not limited to the block, it also behaves in the same way as that of the function

const c=100;
function x(){
    const c=38;
    console.log(c); // print 38
}
console.log(c); // print 100

let a=20;
{
    var a=20;
}
// This is the illegal shadowing i.e you cant the already declared variable : it will give syntaxerror
// Expaination : If a variable is shadowing something it could not cross the boundary of the scope   

var a=20;
function x(){   
    let a=20;
} // This will not give any kind of error

Lexical Block Scope - block scope also follows lexical scope chain pattern
let a=100;
{
    a=50;
    {
        a=20;
        {
            a=10;
            console.log(a);
        }
    }
}
 */
