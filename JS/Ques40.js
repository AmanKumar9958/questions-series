// Write a program that creates a copy of an array without mutating the original array

let array = [1, 2, 3, 4, 5];
// let copyArray = array;  // this will mutate the original array, we have assigned the reference of array to copyArray


// let copyArray = [...array];  // this will create a new array with the same elements as the original array

let copyArray = [];

array.forEach((value) => {
    copyArray.push(value);
})

console.log("Original Array: ", array);
console.log("Copy Array: ", copyArray);