
function counter(){
let count=0;
return function incerment(){
    count++;
    console.log(count);
}
}
var count1=counter();
count1();
count1();
var count2=counter();
count2();
count2();