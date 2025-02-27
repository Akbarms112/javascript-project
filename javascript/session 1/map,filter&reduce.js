let arr=[3,5,6,7,2];
//map
function binary(x){
    return x.toString(2);
}
const output=arr.map((x)=>x.toString(2));
const output=arr.map((x)=>{
    x.toString(2);
});

console.log(output);



//filter
function isOdd(x){
    return x%2;
}
const fil=arr.filter((x)=>{
    return x%2;
});
console.log(fil);

