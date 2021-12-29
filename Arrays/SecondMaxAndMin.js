
let numArray=new Array();
let i=0;

//storing array with 10 3digit random numbers
while (i<10) {
    let ranNum=Math.floor(Math.random()*900+100);
    numArray.push(ranNum)
    i++
}

//printing the numbers in array
for(let num of numArray){
    console.log(num)
}

let max=numArray[0];
let secondMax=numArray[0];
let min=numArray[0];
let secondMin=numArray[0];

//finding second largest and smallest numbers in the array
for(i=0;i<numArray.length;i++){
    if(numArray[i]>max){
        secondMax=max;
        max=numArray[i];   
    }else if(numArray[i]>secondMax&&numArray[i]!=max){
        secondMax=numArray[i];
    }  
    if(numArray[i]<min){
        secondMin=min;
        min=numArray[i]; 
    }else if(numArray[i]<secondMin&&numArray[i]!=min){
        secondMin=numArray[i]
    }
}
console.log("Second largest number : "+secondMax)
console.log("Second smallest number : "+secondMin)
