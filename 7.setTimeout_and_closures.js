//  Important 
function x(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        }, i*1000);
        
    }
}
// x();
/* when the loop runs it will set 5 set timeouts of 1,2,3,4 and 5 seconds and the console.log(i) here i is basically the reference which gets updated intantaneously as var is global scope so its value gets updated each time and finally will print 6 at the interval of 1,2,3,4 and 5 sec but if you use a let over here in the loop as let have a block scope so for each and every loop iteration this i becomes a new variable each time and each time setTimeout is run this callback function has a new copy of i with it (bind) so it forms a closure with a new variable itself 
So in simple terms we can assume that each time this function is called it is refering to different memory location of i in the scope
*/

// but let suppose it is asked to print 1,2,3 4,5 after the interval of 1 sec with the var data type only
function y(){
    for(var i=0;i<=5;i++){
        function close(i){
            setTimeout(function(){
                console.log(i);
            }, i*1000);
        }
        close(i); // This will create the copy of i each time and function 
    }
}

y();


for(var i=1;i<=5;i++){
    function fn(i){
        setTimeout(() => {
            console.log(i);
        }, 1000*i);
    }
    fn(i);
}