/*
Even before the execution of code MEMORY gets allocated to all the varibles and functions

when you remove the line var x= 7 and then print x on top it gives error msg: x is not defined
Let's understand the the difference between not definded and undefined

Not defined -> error msg when the memory is not allocated to the particulr varible or the function
undefind -> variable or function got the memory but it's value is not set yet


Now let suppose you use the arrow function--------------------------------  

getName();  // Output: error message getName is not definded
console.log(getName) // Output: undefind

Here the getName will behave just like the another variable and initially it will be stored in the memory with  value undefind

var getName=()=>{
    console.log("Hello Everyone");
}

console.log(getName) will print  ()=>{console.log("Hello Everyone");}

    undefinded!=empty

    var a;
    console.log(a); // undefined
    if(a===undefined){
        console.log("a is undefined");
    }else{
        console.log("a is not undefined");
    }


// undefined and null are not the same thing but they both denote the absence of value == gives true while === gives false

*/