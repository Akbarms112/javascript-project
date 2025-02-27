//let const var
//const are constant it cannot modify or it must inistial some value if create variable in const
//const only use in when u don't have change value use const
//others wise use let becuse it is temporal dead zone u will not face any error like undifined etc..
//var are before initial it allocate memory space globally before log the VAR VALUE it create space and store undifined key
//var can access duplicate
//let and const are similar it cannot access dublicate or modify the value
//syntax error mean in might we write wrong syntax Example writing single variable name in different times
//reference error mean we acces the value before initialize 
//when js engine try to findout a specific variable inside the memory space and u cannot access it
//type error
//let store the values in script it totally different memory
console.log(a); //this a is in the temporal variable
console.log(c);

let a=1000;
let a=100;
var c=200;
const b=100;
a=10;
console.log(a);
