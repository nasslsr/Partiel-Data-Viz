let counterPlus = document.querySelector(".increase")
    let counterMinus = document.querySelector(".decrease")
    let counterReset = document.querySelector(".reset")
    let result = document.querySelector("#result")


    let count = 0;



    counterPlus.addEventListener("click",()=>{
        count++;
     result.innerHTML = count;
    
});

    counterMinus.addEventListener("click",()=>{ 
         count--;
        result.innerHTML = count;
   
});

    counterReset.addEventListener("click",()=>{
        count=0;
        result.innerHTML = count;
});
    

