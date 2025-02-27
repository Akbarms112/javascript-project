//clousere is 
function outer(){
    var a=10;
    function inner(){
        console.log(a);
    }
    return inner;
}
outer()();
// var close=outer();
// close();
//in above function call outer()() this is same as by creating another variable store existing function and by call newly created another fuction
