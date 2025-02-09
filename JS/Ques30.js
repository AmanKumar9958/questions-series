// use a for..in loop to iterate over an object and log its keys.

let obj = {
    name: "Aman",
    age: 20,
    course: "BCA",
    City: "New Delhi",
    Country: "India"
}

for(let key in obj){
    console.log(key);
    // console.log(obj[key]);
}