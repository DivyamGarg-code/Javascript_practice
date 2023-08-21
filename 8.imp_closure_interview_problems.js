/*
What is closures?
Every function in the js has access to it's outer lexical environment ie access to the variables and functions that are present in the environment of it's parent, Even when this function is executed in some another scope it still remembers its outer lexical environment where it was originally present in the code 
eg
Suppose we have nested functions 
function outer(){
    var a=10;
    function inner(){
        console.log(a); 
    }
    return inner;
}

outer()(); or ->
var y=outer();
y(); // it will print 10
So you can see that the inner function forms the closure with this outer environment.
Now let suppose if I try to return this function outside the scope it still remembers what the value of a was  

What if you move the line 7 to 10 before return statement will it still form a  closure?
Yes ,it will be clousre ,there is nothing to do with the sequence.

What if you use let instead of var at line num 7 ?
Irrespective that the let is a block scoped the inner func will still forms the closure and it works the same way

What if we pass the parameter inside the outer func how it will affect closures?
function outer(b){
    var a=10;
    function inner(){
        console.log(a,b); 
    }
    return inner;
}

var y=outer("hello world");
y(); // it will print 10
It will work in the same way 

How will it work if outer func is also nested ? 
   function outest(){
    var c=20;
    function outer(b){
        function inner(){
            console.log(a,b,c); 
        }
        let a=10;
        return inner;
    }
    return outer;
}

let a=100;
var y=outest()("hello world"); 

It will again print the same result

-------------------------- IMPORTANT -----------------------------------
What are the advantages of closures ?

Data Hiding and Encapsulation -> Suppose we have varible and we want to have some data privacy like other functions and other pieces of code cannot have access to that particular data that is known as data hiding or encapsulation so that other functions or other part of the programms cannot access it
eg. suppose you are creating an increment function 
var counter=0;
function incrementCounter(){
    counter++;
}
// Now the major problem in our code is anybody can acces and modify this variable counter. So here comes the concept of data hiding and encapsulation .What we can do is we can wrap the whole code inside a function (creating  a closure)
ie 
function counter(){
    var counter=0;
    return function incrementCounter(){
        counter++;
    }
}
// So now cant access the variable counter as well as the funcincrementCounter directly     

var counter1=counter();
counter1();

function counter(){
    var counter=0;
    return function incrementCounter(){
        counter++;
        console.log(counter);
    }
}
var counter1=counter();
counter1();
counter1();
counter1();
var counter2=counter(); // This is a new counter all together 
counter2();
counter2();

Is this a good way to create a counter ? Is your code scaleable?
It is not good way rather here we can use the constructor function to create increment and decrement functions like  
For class go to 8.classes.js
function Counter(){
    var count=0;
    this.incrementCounter=function(){
        count++;
        console.log(count);
    }
    this.decrementCounter=function(){
        count--;
        console.log(count);
    }
}
new counter1=new Counter();
counter1.incrementCounter();

What are the disadvantages of closures?
Overconsumption of memory using closures because everytime a closure is formed it consumes alot of memory and those closed over variables are not garbage collected till the program expires and if not handle dproperly it may lead to the memory leaks beacuse that memory is accumulated overtime and it can also freeze the browser if not handled properly  

Garbage Collector -> is the program in the browser or the js engine which freeze up the untilized memory 

Relation b/w garbage collector, memory leaks and closures?
function a(){
    var x=0;
    return function b(){
        console.log(x);
    }
}
a();
as after the execution of a is finished ideally x memory should be garbage collected but as it is forming a closure with some inner function its memory will not be free up   
But modern browsers and javascript engines like chrome and V8 have smart garbage collection mechanism in which the variables that are part of of the closures but are unsued in the inner function are garbage collected
*/

function a(){
    var x=0,z=10;
    function inner(){
        console.log(x);
    }
    return inner;
}
var y=a();
y();