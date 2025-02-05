// Write a loop that skips even number b/w 1 to 20

for(let i=0; i<21; i++){
    if(i%2 == 0){
        continue;
    } else{
        console.log(i);
    }
}