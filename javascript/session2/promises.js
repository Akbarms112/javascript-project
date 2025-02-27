// //Promises is the new way of handling asynchronous operations in JavaScript.
// const cart=['shoes','pants','shirts'];

// createOrder(cart,function (orderId){
//     proceedToPayment(orderId);
// });


// const promise=createOrder(cart);

// promise.then(function (orderId){
//     proceedToPayment(orderId);
// });

const GitHubApi="https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-the-authenticated-user"
const user=fetch(GitHubApi);

console.log(user);
user.then(function (data){
    console.log(data);
    
})

//promises is an object which represents the eventual completion of an asnc operation
createOrder(cart,function (orderId){
        proceedToPayment(orderId,function (paymentinfo){
            showOrderSummary(paymentinfo,function (){
                updateWalletBalance();
            });
        });
    });
    
    
   // const promise=createOrder(cart);
    
    createOrder(cart)
    .then(function (orderId){
       return proceedToPayment(orderId);
    })
    .then(function (paymentinfo){
       return showOrderSummary(paymentinfo);
    })
    .then(function (paymentinfo){
       return updateWalletBalance(paymentinfo);
    });
//By using Arrow function
    createOrder(cart)
    .then(orderId => proceedToPayment(orderId))
    .then(paymentinfo => showOrderSummary(paymentinfo))
    .then(paymentinfo =>updateWalletBalance(paymentinfo));
