
let numArray=new Array();
let i=0;

//storing array with 10 3digit random numbers
while (i<10) {
    let ranNum=Math.floor(Math.random()*900+100);
    numArray.push(ranNum);
    i++;
}

//printing the numbers in array
console.log("Before Sorting :")
for(let num of numArray){
    console.log(num);
}

//sorting the array
numArray.sort();

console.log("\nAfter Sorting :")
for(let num of numArray){
    console.log(num);
}

console.log("\nSecond largest number : "+numArray[numArray.length-2]);
console.log("Second smallest number : "+numArray[1]);
