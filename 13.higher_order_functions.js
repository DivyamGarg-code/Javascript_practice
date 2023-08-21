// A function which takes a function as an argument or returns a function from it is known as the higher order function 

function x(){
    console.log("Nameste");
}

function y(x){
    x();
}

// Here x is the callback function while y is the higher order function

// Significance is to reduce the repeatitive code
/*
Suppose you have to calculate the area,diameter,circumference of the circles given the radius of those circles
 */

let radius=[2,4,6,8,10];
// One way to find area will be
// const area=function(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(Math.PI*radius[i]*radius[i]);
//     }
//     return output;
// }

// console.log(area(radius));  

// Another optimized way to optimize the code 
const area=function(radius){
    return Math.PI*radius*radius;
}
const circumference=function(radius){
    return 2*Math.PI*radius;
}
const diameter=function(radius){
    return 2*radius;
}

const calculate=function(radius,area){ //Here you can change the functions to get the desired output
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(area(radius[i]));
    }
    return output;
}

console.log(calculate(radius,area));
// Now just see this calculate function is similar to the map
console.log(radius.map(area));

/*
If you do something like this Array.prototype.calculate=.....
The calculate function will be available over all the arrays  ie radius.calculate(area);
 */