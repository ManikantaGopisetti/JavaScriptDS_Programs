primeFactors=(num)=>{
    for(let i = 2; i*i <= num; i++){
        while((num%i)==0){
            primeFactArray.push(i);
            num /= i;
        }
    }
}

let num=540;
let primeFactArray=new Array();
primeFactors(num);

for(let element of primeFactArray){
    console.log(element)
}



