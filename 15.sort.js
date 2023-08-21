const people = [
    { first_name: "Alice", last_name: "Smith", age: 28 },
    { first_name: "John", last_name: "Doe", age: 32 },
    { first_name: "Jane", last_name: "Smith", age: 25 },
    { first_name: "Alice", last_name: "Johnson", age: 24 },
];

function comparePeople(a, b) {
    if (a.first_name !== b.first_name) {
        return a.first_name.localeCompare(b.first_name);
    } else if (a.last_name !== b.last_name) {
        return a.last_name.localeCompare(b.last_name);
    } else {
        return a.age - b.age;
    }
}

people.sort(comparePeople);

console.log(people);

function comp(a,b){
    return b-a                            
}
let arr=[1,2,3,4,5,6,7];
arr.sort(comp);
console.log(arr);

function comp1(a,b){
    return b.localeCompare(a);
}
let arr1=["a","b","c","d"];
arr1.sort(comp1);
console.log(arr1);