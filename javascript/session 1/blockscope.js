//block scope and shadowing
//block ->we group multiple statement in the block that we can use it where js expects one statement
//block scope mean what all variables and function we can access inside the block
//In var shadowing mean modify the value if 1st we put 100 and another time we put another value but same variable it modify
//in let value dose't modify it only acces with the scope value other wise print out side of scope value
//shadowing not nly in scope it behave the same way as function
//illegal shadowing we cannot access  or modify value in let to var 
//we can shade var to let
let b=100;
var a=100;
const c=200;
{
    var a=20;
    let b=30;
    const c=40;
    console.log(a);
    console.log(b);
    console.log(c);
    
}
console.log(a);
console.log(b);
console.log(c);
//shadowing in function
function x(){
    const c=30;
    console.log(c);
    
}
x();
console.log(c);
//illegal shadowing
let d=20;
{
    let d=20;
}