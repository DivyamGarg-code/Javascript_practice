function a(){   
    c();
    function c(){
        console.log(b);
    }
}
var b=10;
a();  // it will print 10 in the output ie the function is able to access the variable outside the function

// Scope means where you can access the varible or a function in the scope
// Lexical Environment
/*
Lexical means -> hirerchy / in order
Whenever an execution context is created a lexical environment is also created, So the lexical enviroment is the local memory along with the reference to the lexical enviroment of it's parent[ie access to the memory of parent+ reference to the lex. env. of the parent ] for eg. c function is lexically inside the a function 

                 memory
    c()          it's own variables and functions memory
                memory of a[lexical environmet]

                 memory
    a()         b:10
                c:{...}
                memory of it's parent[lexical environmet]

                 memory
    GEC          it's own variables and functions memory
                 [lexical environmet] and this points to the null

This all process of finding the variable accesablity in the local memory and then in the lexical environmet of it's parent is known as Scope Chain
So if the js does not find anything in the local memory it goes next level of the scope chain and keeps ongoing till the end  

 */