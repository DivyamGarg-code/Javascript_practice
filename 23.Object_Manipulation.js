/*
Here we will be performing operations like
loop
search
create
update
delete
in object/nested objects at n levels
 */

// This function will print all the key value pairs at all levels
function print(user) {
    Object.entries(user).forEach(([key, value]) => {
        if (typeof value === "object" && !Array.isArray(value)) {
            print(value);
            return;
        } else {
            console.log(key, value);
        }
    })
}   

// Search for key at n nested levels | It will return that key value pair
function searchKey(user, str = "obj5") {
    Object.entries(user).forEach(([key, value]) => {
        if (typeof value === "object" && !Array.isArray(value)) {
            // console.log(key);
            if (key === str) {
                console.log(key, value);
                return;
            }
            searchKey(value);
            return;
        } else {
            if (key === str) {
                console.log(key, value);
                return;
            }
        }
    })
}

// Update the value at n nested levels | It will return that key value pair
function updateKey(user, updated_value, str = "age") {
    Object.entries(user).forEach(([key, value]) => {
        if (typeof value === "object" && !Array.isArray(value)) {
            // console.log(key);
            if (key === str) {
                user[key] = updated_value;
                return;
            } else {
                updateKey(value,updated_value,str);
            }
        } else {
            if (key === str) {
                user[key] = updated_value;
                return;
            }
        }
    })
    return;
}

// Delete the value at n nested levels | It will return that key value pair
function deleteKey(user, str = "obj5") {
    Object.entries(user).forEach(([key, value]) => {
        if (typeof value === "object" && !Array.isArray(value)) {
            if (key === str) {
                delete user[key];
                return;
            } else {
                deleteKey(value,str);
            }
        } else {
            if (key === str) {
                delete user[key];
                return;
            }
        }
    })
    return;
}
// Delete the value at n nested levels | It will return that key value pair
function createKey(user, level, str, new_key, new_value) {
    if (level === 0) {
        user[new_key] = new_value;
        return;
    }
    Object.entries(user).forEach(([key, value]) => {
        if (typeof value === "object" && !Array.isArray(value)) {
            if (key === str) {
                user[new_key] = new_value;
                return;
            } else {
                createKey(value, level, str, new_key, new_value);
            }
        } else {
            if (key === str) {
                user[new_key] = new_value;
                return;
            }
        }
    })
    return;
}
let user = {
    "name": "John",
    "age": 20,
    "branch": "Electrical",
    "obj": {
        count: 23,
        "student": {
            "brt": 34,
        }
    },
    "obj2": {
        "name": "dsklld",
        ef: "dnfls",
        "obj3": {
            "obj4": {
                "obj5": ["23", "34", "45"]
            }
        }
    }
}

// This function will search the key at the n nested level 

// Looping over object property names
// Keys method or values method will return an array
// That array will contain all the properties of passed object as its element 
let properties = Object.keys(user);
// for(let prop of properties){
//     console.log(prop);
// }
// console.log(properties);

// Lopping over object property values
// values method return an array
let value = Object.values(user);
// console.log(value);

// Looping over the property name and property value
let entries = Object.entries(user); // return the array of arrays containing key value elements in each array
// ie [key,value]  [[k1,v1],[k2,v2],[k3,v3].....]
// console.log(entries);

// Object.entries(user).forEach(([key,value]) => {
//     console.log(typeof key,typeof value)
//   });

// searchKey(user);
// updateKey(user,50,"age");
// deleteKey(user);
createKey(user, 1, "obj4", "course", "English");  // main_obj | level at which you want to add the key | nested_object_name | new_key | new_value
console.log(user);