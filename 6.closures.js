/*
Closure is function bundled together in a lexical environment or a function enclosed with its lexical scope forms a closure
function x(){
    var a= 7;
    function y(){
        console.log(a);
    }
    y();
}
// Here the fn y binds to the variable of x to form the closure
x();

// You can also return the functions 
function x(){
    var a= 7;
    function y(){
        console.log(a);
    }
    return y;
}
var z=x();
console.log(z) // here it will print the fn
......
z(); // it will print 7 
Explaination: When the functions are returned from another functions they still maintains their lexical scope,they remember where they were actually present ie when they are returned not only the function but their lexical scope is also returned 

function x(){
    var a= 7;
    function y(){
        console.log(a);
    }
    a=100;
     return y;
}

var z=x();
z() // here it will print 100 as function y() contains the reference to the lexical environment .. variables

Uses of Closures: 
-Module Design Pattern
-Currying
-Functions like once [which only run once]
-memoize
-maintaining state in async world
-setTimeouts
-Iterators
- Data Hiding and Encapsulation ...it's explaination in file number 8
-and mainy more..
 */