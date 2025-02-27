 const cart=["Apple","Bananna","Orange"];
 

//  const promise=createOrder(cart);
//  console.log(promise);
 

 createOrder(cart)
 .then(function (orderId){
    console.log(orderId);
    return orderId
})
.then(function (orderId){
     return proceedToPayment(orderId).then(function (paymentInfo){
        console.log(paymentInfo);
        
     });
 })
 
 .catch(function (err){
    console.log(err.message);
 })
 .then(function (orderId){
    console.log("No matter ,I will diffenetly call");
    
 })
 //Producer

 function createOrder(cart){
    return new Promise(function(resolve,reject){
        //createOrder
        //validateCart
        //orderId
        if (!validateCart(cart)) {
            const err=new Error("Cart is not valid");
            reject(err);
        }
        //logic for createoder
        const orderId="1234";//it may be dB.data
        if(orderId){
            setTimeout(function (){
                resolve(orderId);

            },5000);
        }
    });
 }
 
 function proceedToPayment(orderId){
    return new Promise(function (resolve,reject){
        resolve("Payment successfull");
    })
 }

 function validateCart(cart){
    return false;
 }