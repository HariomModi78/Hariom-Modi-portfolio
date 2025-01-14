let bettypeselect = document.getElementsByClassName("bettypeselect");
let reduce = document.getElementsByClassName("ri-subtract-fill"); // - element
let increase = document.getElementsByClassName("ri-add-fill");  // + element
let amountenter = document.getElementsByClassName("amountenter");  // enter amount
let betamount = document.getElementsByClassName("betamount"); //element inside confirm bet
let remove = document.getElementsByClassName("remove"); //after confirm remove div
let winning = document.querySelector(".winning");
let totalBalance  = document.querySelector(".totalBalance");
let option = document.getElementsByClassName("option");
let refresh = document.querySelector(".refresh");
let wallet = document.querySelector(".wallet");

wallet.addEventListener("click",()=>{
    window.open("wallet.html","_blank");
})


let myutr;


if(localStorage.getItem("wallet")==null){//parseInt(totalBalance.innerText)!=51
    localStorage.setItem("wallet",11);
}
else{
    totalBalance.innerText = localStorage.getItem("wallet") +".00 INR";
}

let coins;
let buy = 0;
localStorage.setItem("num",1);
refresh.addEventListener("click",()=>{
    if(localStorage.getItem("num")==1){
        myutr = 4567;
    }
    else{
        myutr = 90;
        refresh.style.cssText = "color:red"
    }
    refresh.classList.toggle("refreshjs");
    if(parseInt(localStorage.getItem("utr")) == myutr){
        localStorage.setItem("num",0);
    coins = localStorage.getItem("userCoins");
    totalBalance.innerText = parseInt(coins) + parseInt(totalBalance.innerText) +".00 INR";
    localStorage.setItem("wallet",parseInt(totalBalance.innerText));
    localStorage.setItem("utr",null);
    }
    else if(localStorage.getItem("utr")==null){
    localStorage.setItem("userCoins",0);
        coins = 0;
    }
    if(buy==0){
        
    }
    setTimeout(()=>{
    refresh.classList.toggle("refreshjs");
    },1000)
})

for(let i=0;i<option.length;i++){
    option[i].addEventListener("click",()=>{
        localStorage.setItem("userCoins",0);
        window.open("qr.html")
    })
}


let result = document.getElementsByClassName("result");
let countforresult = 0;
function setresult(){
    result[countforresult].innerText = randomNumber;

    countforresult++;
    if(countforresult==7){
        for(let i=0;i<result.length;i++){
            result[i].innerText = "";
            countforresult = 0;
            result[countforresult].innerText = randomNumber;
        }

    }
}


let count = 0;
let audio = new Audio('rocket-launch-sfx-253937.mp3'); // roket sound
let audio1 = new Audio('blast-37988.mp3'); // blast sound
let audio2 = new Audio('timebombbeep-93074.mp3')  //counting sound
let audio3 = new Audio('maa-chud-gai.mp3'); //defete sound
let audio4 = new Audio('tmp5f9yp0pe.mp3')
for(let i=0;i<2;i++){ //button to select auto and manual mode of bet
    bettypeselect[i].addEventListener("click",()=>{
    bettypeselect[i].classList.toggle("bettypeselectjs");
        if(count==0){
            bettypeselect[i].textContent = "auto";
            count++;
        }
        else{
            bettypeselect[i].textContent = "bet";
            count = 0;
        }
    });
}
let maincoverreal = document.getElementsByClassName("maincoverreal"); //where roket fly element
let loader = document.getElementsByClassName("loader");  //timer or loader element
let x = document.querySelector(".x");  // how much x a rocket fly element
let confirm = document.getElementsByClassName("confirm"); //confirm bet button
let flag = true;
for(let i=0;i<confirm.length;i++){
        confirm[i].addEventListener("click",()=>{  //confirm par click karne ke bad
                        localStorage.setItem("num",1);
            let tempAmount = document.getElementsByClassName("betamount")
            betamount[i].innerText = amountenter[i].innerText;
            let interval = setInterval(()=>{  //for repetation in a fixed interval
                let checkAuto = document.getElementsByClassName("bettypeselect");
                if(!checkAuto[i].classList.contains("bettypeselectjs")){ 
                    clearInterval(interval);  //used to break the repetation
                }
                let check = document.querySelector("#target").value;
                if(check!=""){
                    for(let j=0;j<confirm.length;j++){
                        if(flag){
                            flag = false;
                            confirm[i].style.cssText = "box-shadow:inset 0 0 20px black";
                        let target = document.querySelector("#target").value; //.value is used to fetch input value
                        target = parseInt(target);
                        console.log(target);
                        if(parseInt(localStorage.getItem("wallet"))>=parseInt(amountenter[i].innerText)){
    
                            setTimeout(()=>{
                                loader[0].style.cssText = "color:red";
                                loader[0].innerText = "3"
                                audio2.play(); //paly timer sound
                            },1000)
                            setTimeout(()=>{
                                loader[0].innerText = "2"
                            },2000)
                            setTimeout(()=>{
                                loader[0].innerText = "1"
                            },3000)
    
                                setTimeout(()=>{
                                    loader[0].innerText = "0";
                                    totalBalance.innerText = (parseInt(totalBalance.innerText)-parseInt(amountenter[i].innerText))+".00 INR";
                                    localStorage.setItem("wallet",parseInt(totalBalance.innerText));
                                },4000)
                                setTimeout(()=>{
                                    loader[0].style.cssText = "color:transparent";
                                    loader[0].classList.toggle("loaderstart");
                                    audio.play(); //play roket sound
                                    randomNumber = (Math.random() **10)*100; //to find random number b/w 0-10
                                    randomNumber = randomNumber.toFixed(2);
                                },5000)
                                setTimeout(()=>{
                                    maincoverreal[0].classList.add("maincoverrealstart");
                                },5000)
                                setTimeout(()=>{
                                    loader[0].style.cssText = "background-image:url(bomb.jpg) ;";
                                    audio.pause();
                                    audio1.play();
                                    
                                    if(target<=randomNumber){
                                        let amount = parseFloat(amountenter[i].innerText);
                                        winning.innerText = (amount*target).toFixed(2)+"INR";
                                        audio4.play();
                                    }
                                    else{
                                        winning.innerText = "0";
                                        audio3.play();
                                    }
                                    x.innerText = randomNumber +'x';
                                    if(target<=randomNumber){
                                        x.style.cssText = "color:green";
                                    }
                                    else{
                                        x.style.cssText = "color:red";
                                    }
                                    confirm[i].style.cssText = "box-shadow:inset 0 0 0px black";
                                },12500)
                                
                                setTimeout(()=>{
                                    loader[0].classList.toggle("loaderstart");
                                    loader[0].style.cssText = "background-color:transparent";
                                    flag = true;
                                    setresult();
                                    totalBalance.innerText = parseInt(parseInt(totalBalance.innerText)+parseInt(winning.innerText))+".00 INR";
                                    localStorage.setItem("wallet",parseInt(totalBalance.innerText));

                                },13000)
    
                            }
                            else{
                                if(bettypeselect[i].classList.contains("bettypeselectjs")){
                                    bettypeselect[i].classList.toggle("bettypeselectjs");
                                }
                                
                                    alert("insufficent balance");

                    
                                setTimeout(()=>{
                                    loader[0].style.cssText = "background-color:transparent";
                                    flag = true;
                                    confirm[i].style.cssText = "box-shadow:inset 0 0 0px black";
                                })
                            }
                            
                        }
                }
                }
                else{
                    if(bettypeselect[i].classList.contains("bettypeselectjs")){
                        bettypeselect[i].classList.toggle("bettypeselectjs");
                    }
                    else{
                        alert("Please Set Target")

                    }
                }

            })

            
            
       
           
   })

    
}

for(let i=0;i<amountenter.length;i++){
    increase[i].addEventListener("click",()=>{  //increase function
        let amount = parseInt(amountenter[i].innerText);
        amountenter[i].innerText =amount + 5;
        amount = amount+5;
        betamount[i].innerText = amount;
    })
    
        reduce[i].addEventListener("click",()=>{  //decrease function
            let amount = parseInt(amountenter[i].innerText);
            if(amount>5){
                amountenter[i].innerText =amount - 5;
                amount = amount-5;
                betamount[i].innerText = amount;
            }
        })

}
 
