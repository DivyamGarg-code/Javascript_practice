/*
JSON stands for JavaScript Object Notation

JSON is a text format for storing and transporting data

JSON is "self-describing" and easy to understand
 */

let obj={
    "name":"Divyam",
    "age":23,
    "rollno":23
}
let str=JSON.stringify(obj);
str=str.replace(23,34);
console.log(str);