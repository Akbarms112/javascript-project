//call

// let name={
//     firstname:"Akbar",
//     lastname:"Ali",
//     printFulName: function(){
//         console.log(this.firstname+" "+this.lastname);    
//     }
// }
// name.printFulName();

let namee={
    firstname:"Akbar",
    lastname:"Ali",
}
    let printFulName= function(hometown,state){
        console.log(this.firstname+" "+this.lastname+" form "+hometown+" "+state );    
    }
printFulName.call(namee,"Dharmapuri","tamil nadu");


let name2={
    firstname:"Palani",
    lastname:"Samy",
}
//function borrowing
printFulName.call(name2,"Mechari","tamil nadu");

//apply
//only different is call and apply method is the way we pass argument

printFulName.apply(name2,["Mechari","tamil nadu"]);
//bind method

//it looks exactly as call method the only difference is directly call this method in bind method it bind the methods printfulname with the object and return the copy of the method

let printMyNAme=printFulName.bind(name2,"Mechari","tamil nadu");
console.log(printMyNAme);
printMyNAme();

