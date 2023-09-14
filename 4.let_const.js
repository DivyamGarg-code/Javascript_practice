/*
    let and const declarations are Hoisted
    console.log(a); // This will give you reference error(because a is in the temporal dead zone) Cannot access 'a' before initiallization 
    let a=10;
    var b=100;
    let and const behave differently as compared to var
    They are also allocated the memory initially but the thing is their memory is not allocated in the global scope they are stored in seperate memory space before the initallization due to which you cannot access these varibles unless you initiallize values in them
    var b got the memory in the global space that's why we can access it

    Temporal Dead Zone is the time since the let variable was hoisted and till it is initiallized some value 
    Whenever you try to access a variable in a temeporal dead zone it gives you a reference error

    console.log(a); // This will give you reference error Cannot access 'a' before initiallization
    console.log(x); // This will give you reference error 'x' is not defined
    console.log(b); // undefined  as it got the memory 
    let a=10; 
    var b=100;
    You can access var through window also as they are attached to the global object window window.b
    but you can't access a through window as they are stored in the seperate memory space 

    let -> redeclaration is not possible
    const -> redeclaration and reinitiallization is not possible and you have to initiallize it while declaring it
    const c=1000;
    c=23; // This will give you the TypeError
    const c; // This will give you syntax error
    or let a=23; let a=34; same syntax error
 */