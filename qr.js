let hundred = document.querySelector("#hundred");
let twoHundred = document.querySelector("#twoHundred");
let threeHundred = document.querySelector("#threeHundred");
let fiveHundred = document.querySelector("#fiveHundred");
let sixHundred = document.querySelector("#sixHundred");
let sevenHundred = document.querySelector("#sevenHundred");



let qr = document.querySelector("#hundredRsQr");
let payment = document.querySelector(".payment");
let time = document.getElementsByClassName("time");
let temp = 1;
for(let i=0;i<time.length;i++){

    hundred.addEventListener("click",()=>{

        hundred.style.cssText = "box-shadow:inset 0 0 5px black"
        payment.addEventListener("click",()=>{
            window.location.href = "#hundredRsQr";
            let interval = setInterval(()=>{
                if(temp==0){
                    time[i].innerText = "Payment Done";
                    time[i].style.cssText = "background-color:green;width:150px";
                    clearInterval(interval);
                    localStorage.setItem("userCoins", 100);
                }
                temp = 0;
                
            },5000)
    
        })
    });
    
    twoHundred.addEventListener("click",()=>{
        twoHundred.style.cssText = "box-shadow:inset 0 0 5px black"
        payment.addEventListener("click",()=>{
            window.location.href = "#twoHundredRsQr";
            
            let interval = setInterval(()=>{
                if(temp==0){
                    time[i].innerText = "Payment Done";
                    time[i].style.cssText = "background-color:green;width:150px";
                    clearInterval(interval);
                    localStorage.setItem("userCoins", 200);
                }
                temp = 0;
                
            },5000)
    
        })
    });
    
    threeHundred.addEventListener("click",()=>{
        threeHundred.style.cssText = "box-shadow:inset 0 0 5px black"
        payment.addEventListener("click",()=>{
            window.location.href = "#threeHundredRsQr";
    
            let interval = setInterval(()=>{
                if(temp==0){
                    time[i].innerText = "Payment Done";
                    time[i].style.cssText = "background-color:green;width:150px";
                    clearInterval(interval);
                    localStorage.setItem("userCoins", 300);
                }
                temp = 0;
                
            },5000)
    
        })
    });
    fiveHundred.addEventListener("click",()=>{
        fiveHundred.style.cssText = "box-shadow:inset 0 0 5px black"
        payment.addEventListener("click",()=>{
            window.location.href = "#fiveHundredRsQr";
    
            let interval = setInterval(()=>{
                if(temp==0){
                    time[i].innerText = "Payment Done";
                    time[i].style.cssText = "background-color:green;width:150px";
                    clearInterval(interval);
                    localStorage.setItem("userCoins", 500);
                }
                temp = 0;
                
            },5000)
    
        })
    });
    
    sixHundred.addEventListener("click",()=>{
        sixHundred.style.cssText = "box-shadow:inset 0 0 5px black"
        payment.addEventListener("click",()=>{
            window.location.href = "#sixHundredRsQr";
    
            let interval = setInterval(()=>{
                if(temp==0){
                    time[i].innerText = "Payment Done";
                    time[i].style.cssText = "background-color:green;width:150px";
                    clearInterval(interval);
                    localStorage.setItem("userCoins", 600);
                }
                temp = 0;
                
            },5000)
    
        })
    });
    sevenHundred.addEventListener("click",()=>{
        sevenHundred.style.cssText = "box-shadow:inset 0 0 5px black"
        payment.addEventListener("click",()=>{
            window.location.href = "#sevenHundredRsQr";
    
            let interval = setInterval(()=>{
                if(temp==0){
                    time[i].innerText = "Payment Done";
                    time[i].style.cssText = "background-color:green;width:150px";
                    clearInterval(interval);
                    localStorage.setItem("userCoins", 700);
                }
                temp = 0;
                
            },5000)
    
        })
    });

}


