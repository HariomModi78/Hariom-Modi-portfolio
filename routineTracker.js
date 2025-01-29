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

let today = document.querySelector("#today");
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
    let currentPercentage = document.querySelector(".currentPercentage");

    // if(JSON.parse(localStorage.getItem("todayTick")) ==null){
    //     JSON.parse(localStorage.getItem("todayTick")) = [];
    // }
    // if(JSON.parse(localStorage.getItem("commonTick")) ==null){
    //     JSON.parse(localStorage.getItem("commonTick")) = [];
    // }

    let percentage = [];

    if(JSON.parse(localStorage.getItem("todayTick")) !=null){
        let taskDone = JSON.parse(localStorage.getItem("todayTick")).length;

        let totalTask = JSON.parse(localStorage.getItem("todayArray")).length;
    
        dailyPercentage.innerText = ((taskDone/totalTask)*100).toFixed(2) + "%";
        
    }
let sum = 0;
        for(let i=0;i<JSON.parse(localStorage.getItem("currentPercentage")).length;i++){
            sum = sum + JSON.parse(localStorage.getItem("currentPercentage"))[i];
        }
        console.log( "arr = "+sum);
        currentPercentage.innerText = (sum/JSON.parse(localStorage.getItem("currentPercentage")).length).toFixed(2) + "%"
        


let dateDiv = document.getElementsByClassName("date");

let date = new Date();

// Format the date and time in 12-hour format
let modefiedDate = date.toLocaleString('default',{
day:'2-digit',
month:'2-digit',
year:'numeric'
})
for(let i=0;i<dateDiv.length;i++){
    dateDiv[i].innerText = modefiedDate;
}

let day = new Date().toLocaleString('default',{
    day:'2-digit'
})
console.log(day);
if(localStorage.getItem("currentDay") == null){
    localStorage.setItem("currentDay",day);
}
localStorage.setItem("nextDate",parseInt(localStorage.getItem("currentDay"))+1);
console.log(localStorage.getItem("nextDate"));
let monthlyTodayTick = [];
let monthlyCommonTick = [];
let monthlyTodayArray = [];
let monthlyCommonArray= [];
let monthlyTodayIncomplete = [];
let monthlyTodayDate = [];
let currentAvg = 0;



let tarik = new Date();
tarik = tarik.toLocaleString('default',{
    day: "2-digit",
    year:'numeric',
    month:'2-digit'
})
if(localStorage.getItem("previousDate")==null){
    localStorage.setItem("previousDate",tarik);
}
if(tarik!=localStorage.getItem("previousDate") || JSON.parse(localStorage.getItem("monthlyTodayDate"))==null){
    monthlyTodayDate = JSON.parse(localStorage.getItem("monthlyTodayDate")) || [];
    monthlyTodayDate.push(tarik);
    localStorage.setItem("monthlyTodayDate",JSON.stringify(monthlyTodayDate));
}

console.log(monthlyTodayDate);
console.log(localStorage.getItem("previousDate"));
localStorage.setItem("nextDate",25)
if(day!=localStorage.getItem("currentDay") && JSON.parse(localStorage.getItem("todayTick"))!=null && JSON.parse(localStorage.getItem("commonTick"))!=null ){
    console.log("working");
    
    let taskDone = JSON.parse(localStorage.getItem("todayTick")).length;

        let totalTask = JSON.parse(localStorage.getItem("todayArray")).length;
    
        


    percentage = JSON.parse(localStorage.getItem("currentPercentage")) || [];
    let number = ((taskDone/totalTask)*100).toFixed(2);
    percentage.push(parseFloat(number));
    localStorage.setItem("currentPercentage",JSON.stringify(percentage));

    // currentPercentage.innerText = percentage;
    
    monthlyTodayTick = JSON.parse(localStorage.getItem("monthlyTodayTick")) || [];
    monthlyCommonTick = JSON.parse(localStorage.getItem("monthlyCommonTick")) || [];
    monthlyTodayArray = JSON.parse(localStorage.getItem("monthlyTodayArray")) || [];
    monthlyCommonArray = JSON.parse(localStorage.getItem("monthlyCommonArray")) || [];

    monthlyTodayTick.push(JSON.parse(localStorage.getItem("todayTick"))); // completed today task
    monthlyCommonTick.push(JSON.parse(localStorage.getItem("commonTick"))); //completed common task
    monthlyTodayArray.push(JSON.parse(localStorage.getItem("todayArray"))); //total today task
    monthlyCommonArray.push(JSON.parse(localStorage.getItem("commonArray"))); //total common task
    console.log(monthlyTodayTick);
    console.log(monthlyCommonTick);
    console.log(monthlyTodayArray);
    console.log(monthlyCommonArray);
    localStorage.setItem("monthlyTodayTick",JSON.stringify(monthlyTodayTick));
    localStorage.setItem("monthlyCommonTick",JSON.stringify(monthlyCommonTick));
    localStorage.setItem("monthlyTodayArray",JSON.stringify(monthlyTodayArray));
    localStorage.setItem("monthlyCommonArray",JSON.stringify(monthlyCommonArray));

    
    localStorage.setItem("todayTick",JSON.stringify(null));
    localStorage.setItem("commonTick",JSON.stringify(null));
    localStorage.setItem("todayArray",JSON.stringify(null));
    localStorage.setItem("commonArray",JSON.stringify(null));
    console.log(JSON.parse(localStorage.getItem("todayArray")));
    localStorage.setItem("currentDay",day);
 
 }

 let complete = document.querySelector(".complete");
 let incomplete = document.querySelector(".incomplete");

 complete.addEventListener("click",()=>{
    window.location.href = "#completed"
 })
 incomplete.addEventListener("click",()=>{
    window.location.href = "#incompleted"
 })

 let completed = document.querySelector("#completed")
 let incompleted = document.querySelector("#incompleted")

for(let i =0;i<JSON.parse(localStorage.getItem("monthlyTodayTick")).length;i++){
    let newComplete = document.createElement("div");
        newComplete.classList = "newCompleteDate";
        completed.appendChild(newComplete);
        newComplete.innerText = JSON.parse(localStorage.getItem("monthlyTodayDate"))[i];
        console.log(i + " bar");
    for(let j=0;j<JSON.parse(localStorage.getItem("monthlyTodayTick"))[i].length;j++){
        let newComplete = document.createElement("div");
        newComplete.classList = "newComplete";
        completed.appendChild(newComplete);
        newComplete.innerText = JSON.parse(localStorage.getItem("monthlyTodayArray"))[i][JSON.parse(localStorage.getItem("monthlyTodayTick"))[i][j]];
        let checkBox = document.createElement("div");
                checkBox.classList = "checkBox tick";
                newComplete.appendChild(checkBox);

    }
    
}
