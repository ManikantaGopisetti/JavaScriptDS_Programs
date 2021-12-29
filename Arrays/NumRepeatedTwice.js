
let arr = new Array();

for(let i=0 ; i <= 100 ; i++){
    if(i%11==0 && i>0){
        arr.push(i);
    }
}

for(let x of arr){
    console.log(x);
}
