function outest(){
    var c=10;
function outer(b) {
    function inner(){
        console.log(a,b,c);
    }
    let a=20;
    return inner;
}
return outer;
}
let a=200; 
var close=outest()("Hello");
close();