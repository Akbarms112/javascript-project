// function x(){
//     let i=0;
//     setTimeout(function() {
//         while(i<10){
//             console.log(i);   
//             i++; 
//         }
//     }, 1000);
   
//     console.log("Hello Akbar");
    
// }
// x();

//b print 1 t0 50 at every i*1s by using let keyword
//why because let it block scope every time i create new variable



// function x(){
//     let i=0;
//     for(let i=0;i<60;i++){
//     setTimeout(function() {
//             console.log(i);   
           
//     }, i* 1000);
// }
//     console.log("Hello Akbar");
    
// }
// x();

  //without using let 
  //here we use clouser by creation another function and every time send the ith value and print it does't hold the value


function x(){
    let i=0;
    for(let i=0;i<60;i++){
        function close(i){
    setTimeout(function() {
            console.log(i);   
           
    }, i* 1000);
}
close(i);
}
    console.log("Hello Akbar");
    
}
x();