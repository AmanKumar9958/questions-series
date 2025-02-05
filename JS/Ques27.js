// write a nested loop to print 3X3 grid of numbers

var hold = 1;

for(var i = 1; i < 4; i++){
    var nums="";
    for(var j = 1; j < 4; j++){
        nums += `${hold} `;
        hold++;
    }
    console.log(nums)
}