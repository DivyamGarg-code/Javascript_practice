
// Equality Operator (==)
// console.log(5 == "5"); // true, because the string is coerced into a number
// console.log(true == 1); // true, because the boolean is coerced into a number
// console.log(null == undefined); // true

// Strict Equality Operator (===)
// console.log(5 === "5"); // false, because they are of different types
// console.log(true === 1); // false, because they are of different types
// console.log(null === undefined); // false

let a = [1, 2, 3, 4, 5];
let b = a.map((i) => { return i * i });
console.log(b);
let c = a.filter((i) => {
    return i % 2 === 0;
});
console.log(c);

let d=a.reduce((acc,curr)=>{
    return acc<curr?curr:acc;
},0);
console.log(d); 

const users=[
    {firstName:"akshay",lastName:"saini",age:26},
    {firstName:"divyam",lastName:"garg",age:21},
    {firstName:"rohit",lastName:"bishla",age:22},
    {firstName:"divy",lastName:"goyal",age:21},
]
// list of full names
const names=users.map((user)=>user.firstName+" "+user.lastName);
console.log(names);

// number of people having age-21
const obj=users.filter((i)=>i.age===21);
console.log(obj);

// IMPORTANT : You need to find out how many people are their with that particular age
// {21:2,22:1,26:1} You need to reduce the list of abjects into single object 
const count=users.reduce((acc,user)=>{
    if( acc[user.age]){
        acc[user.age]+=1;
    }else{
        acc[user.age]=1;
    }
    return acc;
},{})
console.log(count);

// chaining map and filter
// Let suppose you need to store the first names of people whose age is less than 25
const f_names=users.filter((user)=> user.age<25).map((user)=>user.firstName);
console.log(f_names);

// With the help of reduce function
const names_f=users.reduce((acc,user)=>{
    if(user.age<26){
        acc.push(user.firstName);
    }
    return acc;
},[])
console.log(names_f);
