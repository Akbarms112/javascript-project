"use strict";




// this in global space 


console.log(this); //globalOject-window,global->it behave it node js
//-> what is value of this inside globalSpace? -> it is a globalObject it can be window something depanding on where u are running that piece of code where u are running this js 

// this inside a function

function x(){
    //the value depends on strict/non strict mode it behave different
    //in inside function this behave undifined
    console.log(this);
    
}
x();
//this keyword have 2 moods strict and non strict mood
// in above 2 example only running non -strict mood
//what is the value of this keyword inside a function?-> value of this keyword inside a function undifined




// this inside non- strict mood-(this substitution)
//->if the value of this keyword is undifined orr null
//this keyword will be replaced with globalObject 
//only in non strict mode



// this value depends on how this is called (window)
x();  //undefined             //this is strict mode because we mention strict mode
window.x();  //window       


// this inside a object's method
const student={
    name:"Akbar",
    a:10,
    printName:function(){
        console.log(this.name);//value of this is object
        
    },
};
student.printName();
//student.x();
//this -> 3 imprt function u know call,apply,bind
const student2={
    name:"Aff",
    
};
// call apply bind methods(sharing methods)

student.printName.call(student2);//value of this => student 2



// this inside arrow function

let obj={
    a:10,
    //x: function(){
    x: ()=>{  //in arrow function this will not behave  like it is inside a function but will behave like this is present in the global space
        console.log(this);//in arrow function the enclosing lexical content is global space over here the value of this will be global object in browser global object is window
        
    },
};
//if run this code the value be window object
obj.x();

//what is lexical context => whenever you see an arrow function  the value of this keyword will be where this arrow function is lexically enclosed 

// this inside nested arrow function
let obj2={
    a:20,
    x: function (){
        //enclosing lexical content-> this keyword represent this obj2
        const y=()=>{
             console.log(this);

        };
        y();       
    },
};
obj2.x();


// this inside DOM => reference to HTMLElement

// Example:
// <button onclick="alert(this.tagName)">Click me</button>

//this keyword has different meaning inside classes and constructors 