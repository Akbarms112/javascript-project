// * What is async?
// * What is await?
// * How async await works behind the scenes?
// * Examples of using aync/await* Error Handling
// * Interviews
// * Asnc vs promises.then/.catch


//always returns a promises
//Async and await are used to handle promises
const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved value!!");

    },10000);
});

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved value!!");

    },20000);
});

async function handlePromises() {
    //JS Engine was waiting for promise to resolved
    console.log("Hello");

    
    
   const val=await p; 
   console.log("WElcome back..!");
    console.log(val);

    const val2=await p2; 
    console.log("WElcome back 2..!");
     console.log(val2); 

      
}
handlePromises();


//handlePromise()
//call stack
//Async - p1,p2 
//JS Engine isn't waiting it is quickly executing everything but handle promise will suspend the execution and then it will continue once that promise is resolved   



//older way of handling promises
// function getData(){
//     //JS Engine will not wait for promise to be resolved
//     p.then((res)=>console.log(res));
//     console.log("Akbar Here..!");
    
// }
// getData();



// async function getData(){
//     return p;
// }


// const dataPromise=getData();
// dataPromise.then(res=>console.log(res));

//console.log(data);


