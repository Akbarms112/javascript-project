let p1=new Promise((resolve,reject)=>{
    setTimeout(() =>
        reject("P1 fail"), 3000);
})

let p2=new Promise((resolve,reject)=>{
    // setTimeout(() =>
    //     resolve("P2 Sucess"), 1000);
    setTimeout(() =>
        reject("P2 fail"), 5000);
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(() =>
        reject("P3 fail"), 2000);
})

// Promise.all([p1,p2,p3]).then(res=>{
//     console.log(res);
    
// })

// Promise.race([p1,p2,p3]).then(res=>{
//     console.log(res);
    
// })

// Promise.allSettled([p1,p2,p3]).then(res=>{
//     console.log(res);
    
// })

Promise.any([p1,p2,p3]).then(res=>{
    console.log(res);
    
})

.catch((err)=>{
    console.error(err);
    console.log(err.errors);
    
    
})