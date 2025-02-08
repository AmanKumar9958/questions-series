// use for loop to reverse an array [1, 2, 3, 4, 5]

let array = [1, 2, 3, 4, 5];

for(let i = 0; i < array.length/2; i++){
    var temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
}
console.log("Reversed Array: ", array);