let cart=['shirt','pant','cloth','pen'];
api.createOrder(cart,function(){
    
    api.proceedToPayment(function(){
        api.showOrderSummary(){
            function (){
                api.updateWallet()
            }
        }

    })
})

