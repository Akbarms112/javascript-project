
//function statement
function a(){
    console.log("a called");
}
//function Expression
var b=function (){
    console.log("b called");
}
a();
b(); 

//major difference in both is hosting
//in memory creation in hosting a is created a memory and function as created to A but is created like variable so that y b is not a function


//function Declaration
//Anonymous Function --> A function without name is called Anonymous funct,
//-> It does not have own Identity rise syntax error
//where to use is we can use function expression not a function statement
function (){


}

//Named Function Expression
//->giving name to the function
var b=function xyz(){
    console.log("b called");
}
xyz();// we cannot access like why becuse it cannot use outside


//Difference Between Parameters & Arguments
var b=function xyz(param1,param2){//this 2 params are local variable to function  it may call identifiers,labels
    console.log("b called");
}
b(1,2);//It is arguments

//first class function
var c=function xyz(param1){//this 2 params are local variable to function  it may call identifiers,labels
    console.log(param1 );
}
function xyz(){

}

// c(function(){

// });
c(xyz);


var c=function xyz(param1){//this 2 params are local variable to function  it may call identifiers,labels
   return function xyz(){

   }
}

// c(function(){

// });
console.log(c());


//->instance we pass functions inside another function
//->the ebility to use functions as values is know as first class function

//first class citizens
//Arrow functions
//it comes ES6
