// Sort an array of numbers [5, 3, 2, 4, 1] in ascending order

// we will try to keep the biggest number on the rightest side of the array, this is called bubble sort

let array = [25, 35, 12, 4, 1];

for(let j=0; j<array.length; j++){  // this loop will run for the length of the array times to make sure all the elements are sorted in the array
    for(let i=0; i<array.length - 1; i++){  // this loop will run for the length of the array - 1 times to compare the elements, -1 because we are comparing the current element with the next element, and we can't compare last element with anyone
        if(array[i] > array[i+1]){  // if the current element is greater than the next element, then swap them
            let temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
        }
    }
}
console.log(array);
