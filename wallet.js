let wallet = document.querySelector(".wallet");
wallet.innerText = localStorage.getItem("wallet") + ".00 INR";
let input = document.querySelector(".input");
let withdraw = document.querySelector(".withdraw");
let totalBalance = document.querySelector(".totalBalance")
let code = document.querySelector(".code");
input.addEventListener("click",()=>{
    if(input.innerText == "Enter Amount"){
        input.innerText = "";
    }
})


if(localStorage.getItem("allow")==0){
    localStorage.setItem("n",0);
    localStorage.setItem("allow",1);
}

withdraw.addEventListener("click",()=>{
    if(parseInt(input.innerText)%1000 == 0 && parseInt(input.innerText)>=1000 && (localStorage.getItem("wallet")-parseInt(input.innerText)>=0)){
        let update = localStorage.getItem("wallet") - parseInt(input.innerText);
        localStorage.setItem("wallet",update);
        wallet.innerText = localStorage.getItem("wallet") +".00 INR";
        withdraw.style.cssText = "box-shadow: inset 0 0 10px black";
        withdraw.style.cssText = "background-color:green";
        setTimeout(()=>{
        withdraw.style.cssText = "background-color:white";
            
        },500)
        if(localStorage.getItem("n")==0){
            code.innerText = "MR4Z-AYDWAR-3D8Y";
            localStorage.setItem("n",1);
        }
        else if(localStorage.getItem("n")==1){
            code.innerText = "qwejjddudbjs";
            localStorage.setItem("n",2);
        }
        else if(localStorage.getItem("n")==2){
            code.innerText = "WEFNNJDJFDJDDF";
            localStorage.setItem("n",3);
        }else if(localStorage.getItem("n")==3){
            code.innerText = "SDFSDCJNJDVCNJ";
            localStorage.setItem("n",4);
        }else if(localStorage.getItem("n")==4){
            code.innerText = "ff";
            localStorage.setItem("n",5);
        }
        else if(localStorage.getItem("n")==5){
            localStorage.setItem("n",0);
            code.innerText = "dfgfdgdfgdf";
        }
        
    }
})

