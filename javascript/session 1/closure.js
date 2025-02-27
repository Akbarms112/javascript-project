function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    y();
}
x();


function z(){
    var b=6;
    // var b=function y(){
    //     console.log(a);
    // }

}
z(function y(){
    console.log(b);
});




//best ex tio clouser
function a(){
    var z=8;
    function s(){
        console.log(z);
    }
    z=100;
    return y;
}
var e=a();
console.log(e);
e();
//closure is function along with lexicall scop bundle together to from  a clousere
//Uses of closures
//Module Design Pattern
//Currying
//Function like once
//memoize
//maintaining start in async world
//setTimeouts
//Iterators
//and many more..