//const API_URl="https://api.github.com/users/akshaymarch7";

const API_URl="https://invalidurl";
async function handlePromises() {
    try{
     const data=await fetch(API_URl);

    const jsonValue=await data.json()

   console.log(jsonValue);

    }catch(err){
        console.log(err);
        
    }
    

    //fetch()=>Responswe.json()=>jsonValue
    
}
//handlePromises().catch((err)=>console.log(err));
handlePromises();