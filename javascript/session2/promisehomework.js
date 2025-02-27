const cart=["Apple","Bananna","Orange"];
 
createOrder,
proceedToPayment,
showOrderSummary,
updateWallet


//  const promise=createOrder(cart);
//  console.log(promise);
 

 createOrder(cart)
 .then(function (orderId){
    console.log(orderId);
    return orderId
})
.then(function (orderId){
     return proceedToPayment(orderId)
     .then(function (paymentInfo){
        return {orderId,paymentInfo};
     });
 })
 .then(function (data){
    console.log(data.paymentInfo);
    return showOrderSummary(data.orderId)
    .then(function(showOrderSummary){
        return {data,showOrderSummary};
    });
 })

 .then(function (data) {
    // Log the order summary message.
    console.log(data.showOrderSummary);
    // Finally, update the wallet with the orderId.
    return updateWallet(data.orderId);
  })
 .then(function (updateWallet){
    console.log(updateWallet);
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

            },1000);
        }
    });
 }
 
 function proceedToPayment(orderId){
    return new Promise(function (resolve,reject){
        resolve("Payment successfull");
        
    })
 }

 function showOrderSummary(orderId){
    return new Promise(function (resolve,reject){
        resolve("Your order is");
    })
 }

 function updateWallet(orderId){
    return new Promise(function (resolve,reject){
        resolve("Updated Wallet is");
    })
 }

 function validateCart(cart){
    return true;
 }