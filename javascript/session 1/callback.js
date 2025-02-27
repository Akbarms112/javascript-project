










//what is callback function in js
//A function call another function is callback funct
setTimeout(function () {
    console.log("timer");
    
},5000);
function x(y){
    console.log("x");
    y();
    

}
x(function y(){
    console.log("y");
    
});
//js is a synchronous and single-thread language


//blocking the main thread

//power of callbacks

//deep about Event listeners

//clousres demo with event listeners


//scope demo with event listeners
function name(params) {
    var count=0;
document.getElementById("clickme").addEventListener("click", function xyz(){
    console.log("clicked",count++);
});
}

name();
//garbage collection and remove eventlisteners
