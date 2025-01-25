let todayBox = document.querySelector("#todayBox");
let page = "Today Task";
todayBox.style.cssText = "background: linear-gradient(135deg,aqua,blue)";

todayBox.addEventListener("click",()=>{
    todayBox.style.cssText = "background: linear-gradient(135deg,aqua,blue)";
    commonBox.style.cssText = "background: transparent";
    trackBox.style.cssText = "background: transparent";
    moreBox.style.cssText = "background: transparent";
window.location.href = "#today";
page = "Today Task";
addButton.classList = "addButton"
input.classList.remove("inputjs");

})

let commonBox = document.querySelector("#commonBox");
commonBox.addEventListener("click",()=>{
    commonBox.style.cssText = "background: linear-gradient(135deg,aqua,blue)";
    todayBox.style.cssText = "background: transparent";
    trackBox.style.cssText = "background: transparent";
    moreBox.style.cssText = "background: transparent";
window.location.href = "#common"
page = "Common Task";
addButton.classList = "addButton"
input.classList.remove("inputjs");
})

let trackBox = document.querySelector("#trackBox");
trackBox.addEventListener("click",()=>{
    trackBox.style.cssText = "background: linear-gradient(135deg,aqua,blue)";
todayBox.style.cssText = "background: transparent";
commonBox.style.cssText = "background: transparent";
moreBox.style.cssText = "background: transparent";
window.location.href = "#track"
addButton.classList.remove("addButton");
input.classList.remove("inputjs");

})

let moreBox = document.querySelector("#moreBox");
moreBox.addEventListener("click",()=>{
    moreBox.style.cssText = "background: linear-gradient(135deg,aqua,blue)";
todayBox.style.cssText = "background: transparent";
trackBox.style.cssText = "background: transparent";
commonBox.style.cssText = "background: transparent";
window.location.href = "#more"
addButton.classList.remove("addButton");
input.classList.remove("inputjs");

})


// let addButtonp = document.querySelector(".addButton p");
let addButton = document.querySelector(".addButton");
let input = document.querySelector(".input")
let inputValue = document.querySelector("#input");


let save = document.querySelector("button");
let todayArray = [];
let commonArray = [];
let todayTaskBox = [];
let commonTaskBox = [];
let todayTick = [];
let commonTick = [];

addButton.addEventListener("click",()=>{
   
    input.classList.toggle("inputjs");
    
})

save.addEventListener("click",()=>{   //save par click karne ke bad
    input.classList.remove("inputjs");
    if(page=="Today Task" && inputValue.value.trim() != ""){  // jab today task page par hoga tab
        
        todayArray = JSON.parse(localStorage.getItem("todayArray")) || [];  //todayArray main purani values aa jayege

            inputValue = document.querySelector("#input");//inputValue ko feth kar lea
            todayArray.push(inputValue.value); // array main push kar dea 
        localStorage.setItem("todayArray",JSON.stringify(todayArray)); //fir local main array ko svae kar dea
            console.log(JSON.parse(localStorage.getItem("todayArray")));
            let newDiv = document.createElement("div");  // new div create kar dea
            newDiv.classList = "newDiv"; //class dai de
            
            newDiv.innerText = inputValue.value; // jo input dea vo task ke inner Text main de dea
            inputValue.value = ""; // input ke value ko blaknk kar dea
            today.appendChild(newDiv);  // today page main new div ko append kar dea
            let checkBox = document.createElement("div");
            checkBox.classList = "checkBox";
            newDiv.appendChild(checkBox);

            todayTaskBox.push(checkBox);
        }

        else if(inputValue.value.trim() != ""){
                inputValue = document.querySelector("#input");
                commonArray = JSON.parse(localStorage.getItem("commonArray")) || [];
                commonArray.push(inputValue.value);
                localStorage.setItem("commonArray",JSON.stringify(commonArray));
    
                let newDiv = document.createElement("div");
                newDiv.classList = "newDiv";
                newDiv.innerText = inputValue.value;
                inputValue.value = "";
                common.appendChild(newDiv);
                console.log(JSON.parse(localStorage.getItem("commonArray")));
                let checkBox = document.createElement("div");
                checkBox.classList = "checkBox";
                newDiv.appendChild(checkBox);
                    commonTaskBox.push(checkBox);
        }
        })


if(JSON.parse(localStorage.getItem("commonArray"))!=null){
    for(let i=0;i<JSON.parse(localStorage.getItem("commonArray")).length;i++){
        let newDiv = document.createElement("div");
        newDiv.classList = "newDiv";
        newDiv.innerText = JSON.parse(localStorage.getItem("commonArray"))[i];
        common.appendChild(newDiv);
        let checkBox = document.createElement("div");
        checkBox.classList = "checkBox";
        newDiv.appendChild(checkBox);
        commonTaskBox.push(checkBox);
    }

    
}

if(JSON.parse(localStorage.getItem("todayArray"))!=null){
    for(let i=0;i<JSON.parse(localStorage.getItem("todayArray")).length;i++){
        let newDiv = document.createElement("div");
        newDiv.classList = "newDiv";
        newDiv.innerText = JSON.parse(localStorage.getItem("todayArray"))[i];
        today.appendChild(newDiv);
        let checkBox = document.createElement("div");
        checkBox.classList = "checkBox";
        newDiv.appendChild(checkBox);
                todayTaskBox.push(checkBox);
    }

}

// console.log(todayTaskBox);

for(let i=0;i<todayTaskBox.length;i++){
    todayTaskBox[i].classList.add("wait");
        todayTaskBox[i].addEventListener("click",()=>{
    if(!todayTaskBox[i].classList.contains("tick")){
            todayTaskBox[i].classList.remove("wait");
            todayTaskBox[i].classList.add("tick");
            todayTick = JSON.parse(localStorage.getItem("todayTick")) || [];
            todayTick.push(i);
            localStorage.setItem("todayTick",JSON.stringify(todayTick));
            console.log(JSON.parse(localStorage.getItem("todayTick")));
    }

        })
    
}
for(let i=0;i<commonTaskBox.length;i++){
    commonTaskBox[i].classList.add("wait");
    commonTaskBox[i].addEventListener("click",()=>{
        if(!commonTaskBox[i].classList.contains("tick")){
            commonTaskBox[i].classList.remove("wait");
        commonTaskBox[i].classList.add("tick")
        commonTick = JSON.parse(localStorage.getItem("commonTick")) || [];
        commonTick.push(i);
        localStorage.setItem("commonTick",JSON.stringify(commonTick));
        console.log(JSON.parse(localStorage.getItem("commonTick")));

    }

        
    })
}

if(JSON.parse(localStorage.getItem("commonTick"))!=null ){
    for(let i=0;i<JSON.parse(localStorage.getItem("commonTick")).length;i++){  // tick ko localStorage main se feth karke starting main dal do on restart

        commonTaskBox[JSON.parse(localStorage.getItem("commonTick"))[i]].classList.add("tick");
        commonTaskBox[JSON.parse(localStorage.getItem("commonTick"))[i]].classList.remove("wait");
        console.log("Tick = "+ JSON.parse(localStorage.getItem("commonTick"))[i])
    
    }
    
}

if(JSON.parse(localStorage.getItem("todayTick"))!=null ){

    for(let i=0;i<JSON.parse(localStorage.getItem("todayTick")).length;i++){  // tick ko localStorage main se feth karke starting main dal do on restart
    
            todayTaskBox[JSON.parse(localStorage.getItem("todayTick"))[i]].classList.add("tick");
            todayTaskBox[JSON.parse(localStorage.getItem("todayTick"))[i]].classList.remove("wait");
       
    }
    
}

    console.log("Tick =" + JSON.parse(localStorage.getItem("todayTick")))

    let dailyPercentage = document.querySelector(".dailyPercentage");
    let weeklyPercentage = document.querySelector(".weeklyPercentage");
    let monthlyPercentage = document.querySelector(".monthlyPercentage");
    let yearlyPercentage = document.querySelector(".yearlyPercentage");

    // if(JSON.parse(localStorage.getItem("todayTick")) ==null){
    //     JSON.parse(localStorage.getItem("todayTick")) = [];
    // }
    // if(JSON.parse(localStorage.getItem("commonTick")) ==null){
    //     JSON.parse(localStorage.getItem("commonTick")) = [];
    // }
    if(JSON.parse(localStorage.getItem("todayTick")) ==null && JSON.parse(localStorage.getItem("commonTick")) !=null){
        let taskDone = JSON.parse(localStorage.getItem("commonTick")).length;

        let totalTask = JSON.parse(localStorage.getItem("commonArray")).length;
    
        dailyPercentage.innerText = ((taskDone/totalTask)*100).toFixed(2) + "%";
        weeklyPercentage.innerText = (parseInt(dailyPercentage.innerText)/7).toFixed(2) + "%"
        monthlyPercentage.innerText = (parseInt(dailyPercentage.innerText)/30).toFixed(2) + "%"
        yearlyPercentage.innerText = (parseInt(dailyPercentage.innerText)/365).toFixed(2) + "%"
    }

    if(JSON.parse(localStorage.getItem("todayTick")) !=null && JSON.parse(localStorage.getItem("commonTick")) ==null){
        let taskDone = JSON.parse(localStorage.getItem("todayTick")).length;

        let totalTask = JSON.parse(localStorage.getItem("todayArray")).length;
    
        dailyPercentage.innerText = ((taskDone/totalTask)*100).toFixed(2) + "%";
        weeklyPercentage.innerText = (parseInt(dailyPercentage.innerText)/7).toFixed(2) + "%"
        monthlyPercentage.innerText = (parseInt(dailyPercentage.innerText)/30).toFixed(2) + "%"
        yearlyPercentage.innerText = (parseInt(dailyPercentage.innerText)/365).toFixed(2) + "%"
    }

    if(JSON.parse(localStorage.getItem("todayTick")) !=null &&  JSON.parse(localStorage.getItem("commonTick")) !=null){
        let taskDone = JSON.parse(localStorage.getItem("todayTick")).length + JSON.parse(localStorage.getItem("commonTick")).length;

        let totalTask = JSON.parse(localStorage.getItem("todayArray")).length + JSON.parse(localStorage.getItem("commonArray")).length;
    
        dailyPercentage.innerText = ((taskDone/totalTask)*100).toFixed(2) + "%";
        weeklyPercentage.innerText = (parseInt(dailyPercentage.innerText)/7).toFixed(2) + "%"
        monthlyPercentage.innerText = (parseInt(dailyPercentage.innerText)/30).toFixed(2) + "%"
        yearlyPercentage.innerText = (parseInt(dailyPercentage.innerText)/365).toFixed(2) + "%"
    }

   
