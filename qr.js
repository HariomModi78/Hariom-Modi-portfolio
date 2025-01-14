let hundred = document.querySelector("#hundred");
let twoHundred = document.querySelector("#twoHundred");
let threeHundred = document.querySelector("#threeHundred");
let fiveHundred = document.querySelector("#fiveHundred");
let sixHundred = document.querySelector("#sixHundred");
let sevenHundred = document.querySelector("#sevenHundred");



let image = document.getElementsByTagName("img");
console.log(image);

let utr = document.getElementsByClassName("utr");

for(let i=0;i<utr.length;i++){
    utr[i].addEventListener("click",()=>{
        if(utr[i].innerText == "Enter last four digit of UTR number"){
            utr[i].innerText = "";
        }
        
    })
    
}

let time = document.getElementsByClassName("time"); //payment done button

// let qr = document.querySelector("#hundredRsQr");
let payment = document.querySelector(".payment");
let temp = 1;
for(let i=0;i<time.length;i++){

    time[i].addEventListener("click",()=>{
        localStorage.setItem("utr",parseInt(utr[i].innerText));
        localStorage.setItem("allow",0);
    })

    hundred.addEventListener("click",()=>{

        hundred.style.cssText = "box-shadow:inset 0 0 5px black";
        twoHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        threeHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        fiveHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        sixHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        sevenHundred.style.cssText = "box-shadow:inset 0 0 0px black";

        payment.addEventListener("click",()=>{
            window.location.href = "#hundredRsQr";
            time[i].innerText = "Payment Done";
            time[i].style.cssText = "width:150px;"
            time[i].addEventListener("click",()=>{
            time[i].innerText = "payment is add within 24hr thanks";
            time[i].style.cssText = "background-color:green;width:290px;box-shadow:inset 0 0 10px black";
            })
                    localStorage.setItem("userCoins", 100);

        })
    });
    
    twoHundred.addEventListener("click",()=>{
        hundred.style.cssText = "box-shadow:inset 0 0 0px black";
        twoHundred.style.cssText = "box-shadow:inset 0 0 5px black";
        threeHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        fiveHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        sixHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        sevenHundred.style.cssText = "box-shadow:inset 0 0 0px black";

        payment.addEventListener("click",()=>{
            window.location.href = "#twoHundredRsQr";
                    time[i].innerText = "Payment Done";
                    time[i].style.cssText = "width:150px;"
                    time[i].addEventListener("click",()=>{
                    time[i].innerText = "payment is add within 24hr thanks";
                    time[i].style.cssText = "background-color:green;width:290px;box-shadow:inset 0 0 10px black";
                    })
                    localStorage.setItem("userCoins", 200);
        })
    });
    
    threeHundred.addEventListener("click",()=>{
        hundred.style.cssText = "box-shadow:inset 0 0 0px black";
        twoHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        threeHundred.style.cssText = "box-shadow:inset 0 0 5px black";
        fiveHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        sixHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        sevenHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        payment.addEventListener("click",()=>{
            window.location.href = "#threeHundredRsQr";
    
            time[i].innerText = "Payment Done";
            time[i].style.cssText = "width:150px;"
            time[i].addEventListener("click",()=>{
            time[i].innerText = "payment is add within 24hr thanks";
            time[i].style.cssText = "background-color:green;width:290px;box-shadow:inset 0 0 10px black";
            })
                    localStorage.setItem("userCoins", 300);
    
        })
    });
    fiveHundred.addEventListener("click",()=>{
        hundred.style.cssText = "box-shadow:inset 0 0 0px black";
        twoHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        threeHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        fiveHundred.style.cssText = "box-shadow:inset 0 0 5px black";
        sixHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        sevenHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        payment.addEventListener("click",()=>{
            window.location.href = "#fiveHundredRsQr";
    
            time[i].innerText = "Payment Done";
            time[i].style.cssText = "width:150px;"
            time[i].addEventListener("click",()=>{
            time[i].innerText = "payment is add within 24hr thanks";
            time[i].style.cssText = "background-color:green;width:290px;box-shadow:inset 0 0 10px black";
            })
                    localStorage.setItem("userCoins", 500);
    
        })
    });
    
    sixHundred.addEventListener("click",()=>{
        hundred.style.cssText = "box-shadow:inset 0 0 0px black";
        twoHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        threeHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        fiveHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        sixHundred.style.cssText = "box-shadow:inset 0 0 5px black";
        sevenHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        payment.addEventListener("click",()=>{
            window.location.href = "#sixHundredRsQr";
    
            time[i].innerText = "Payment Done";
            time[i].style.cssText = "width:150px;"
            time[i].addEventListener("click",()=>{
            time[i].innerText = "payment is add within 24hr thanks";
            time[i].style.cssText = "background-color:green;width:290px;box-shadow:inset 0 0 10px black";
            })
                    localStorage.setItem("userCoins", 600);
    
        })
    });
    sevenHundred.addEventListener("click",()=>{
        hundred.style.cssText = "box-shadow:inset 0 0 0px black";
        twoHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        threeHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        fiveHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        sixHundred.style.cssText = "box-shadow:inset 0 0 0px black";
        sevenHundred.style.cssText = "box-shadow:inset 0 0 5px black";
        payment.addEventListener("click",()=>{
            window.location.href = "#sevenHundredRsQr";
    
            time[i].innerText = "Payment Done";
            time[i].style.cssText = "width:150px;"
            time[i].addEventListener("click",()=>{
            time[i].innerText = "payment is add within 24hr thanks";
            time[i].style.cssText = "background-color:green;width:290px;box-shadow:inset 0 0 10px black";
            })
                localStorage.setItem("userCoins", 700);
    
        })
    });

}


