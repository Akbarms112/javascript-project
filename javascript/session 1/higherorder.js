const radius=[3,4,5,6];
const area=function(radius){
    return Math.PI*radius*radius;
};

const circumference=function(radius){
    return 2*Math.PI*radius;
};

const diameter=function(radius){
    return 2*radius;
}
const calculate=function(radius,logic){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
};
console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));
console.log(radius.map(area));

//A function which takes another function and input itself or return the function itself
//And the function passed to the higher order function is callled callback






//How to create map prototype to call function like map
Array.prototype.calculate=function(logic){
    const output=[];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
};
console.log(radius.calculate(area));
