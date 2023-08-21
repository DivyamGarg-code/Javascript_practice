/*
 Everything inside the javascript happens in the execution context [box]

 JAVASCRIPT IS A SYNCHRONOUS SINGLE THREADED LANGUAGE means  Javascript can execute single command at a time and in a specific order

Single Threaded means -> Javascript can execute single command at a time  
Synchronous means -> jab tak ek command execute nhi hoti it will not move to the next line
  
Single Threaded Language-> 
    Memory[Variable environment]              |       Code[Thread of execution] it is just like a thread in which whole code is executed

    key:value                                         ........................
    a:10                                              ........................
    fn:{...}                                          ........................

 */

var n=2;
function square(num){
    var ans=num*num;
    return ans;
}
var squre2=square(n);
var squre4=square(4);

/*
Let's understand with the help of an example  Global Execution Context
There are 2 phases
1st phase is the Memory allocation/creation phase [In case of variables it stores undefined but in case of functions it stores the whole code of fn inside the memory block]
            Memory

            n: undefinded
            square:{....}
            square2:undefined
            square4:undefined

2nd phase is the  Code Execution phase [now the code is executed line by line]

Step1  at line 18 initillize the variable with the value n:2
Step2  from line 19-24 there is nothing to execute 
Step3  at line 23 here we invoke a function (call the function and assign it's return value to the variable)
Here Functions are a kind of mini program Whenever the new function is invoked brand new execution context is created while the original was the global execution context

        memory              |       code

                                    For square(n)
                                    memory              |        code
                                    num:undefined               num*num
                                    ans:undefined

                                    return keyword states theat now return the control of the program to the place where the function was invoked and this execution context will be removed and control moves to line number 6
Step 4  square2:4         
Step5  repeat steps 3 and 4

Call Stack

        execution context 1      line23    then 
        global execution context  start

        execution context 1      pop out 
        global execution context  start


        execution context 2       line24    then 
        global execution context  start

        execution context 2      pop out 
        global execution context  start

        global execution context pop out after it ends call steps get exit

Call Stack -> Maintains the order of execution of excution contexts

It's different names
1. execution context stack
2. program stack
3. control stack 
4. runtime stack
5. machine stack

Wherever the JS is running in browsers it do have browser specific jS engine
global object points to the Window (this keyword)
At the global level this===window gives true

Whenever you create an execution context a "this" is created along with it even for the functional execution context and at the global level this points to the global object ie window in case of browsers

Global space Anything not inside any function
var a=10;
function b(){
    var x=10;
}
console.log(a); // Output : 10
console.log(window.a); // Output : 10
console.log(this.a); // Output : 10
    
Shortest program in the js : No code









 */