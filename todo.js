let cover = document.querySelector(".cover");
let button = document.querySelector("button");
let input = document.querySelector("input");
let reset = document.querySelector(".reset");
let box = [];
let arr = [];
let check = [];

if(localStorage.getItem("count")==null){
    localStorage.setItem("taskComplete",0);
    console.log("taskComplete");
    reset.innerText = localStorage.getItem("taskComplete");
}
else{
    reset.innerText = localStorage.getItem("taskComplete");
}

button.addEventListener("click",()=>{
    if(input.value.trim() !== ""){
localStorage.setItem("count",1)

        let task = document.createElement("div");  // create a div
        task.innerText = input.value;  // input ke value ka task
        task.classList = "task";  // class of div is task
        cover.appendChild(task);  // cover ke andar div dal dea 
        let checkBox = document.createElement("input"); //input tag create kara 
        checkBox.type = "checkbox";  //  input ka type checkbox dea
        checkBox.classList = "checkBox";  // checkbox ko class checkBox de
        task.appendChild(checkBox);  // checkbox ko task ke andar dala
        input.value = "";   // fir input ke value ko remove kar dea
        box.push(task.innerText);  // box array main div ko push kar dea
        check.push(checkBox);
        arr.push(task);
        console.log(arr)
        console.log(check)
        console.log(box);
         
        localStorage.setItem("array",JSON.stringify(box));
    }
    for(let i=0;i<check.length;i++){
        check[i].addEventListener("click",()=>{
        arr[i].style.cssText = "    text-decoration:line-through";
           

            setTimeout(()=>{
                let temp = parseInt(localStorage.getItem("taskComplete"));
           temp++;
           localStorage.setItem("taskComplete",parseInt(temp));
    reset.innerText = localStorage.getItem("taskComplete");
                let text = arr[i].innerText;
            console.log(text)
            cover.removeChild(arr[i]);
            // box[i].removeChild;
            box = box.filter(item => item !== text);
            localStorage.setItem("array",JSON.stringify(box));
            },1000)
        })
    }

})

if(localStorage.getItem("count")!=null){
    for(let i=0;i<JSON.parse(localStorage.getItem("array")).length;i++){
        let task = document.createElement("div");
        task.innerText =JSON.parse(localStorage.getItem("array"))[i];
        task.classList = "task";
        cover.appendChild(task);
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.classList = "checkBox";
        task.appendChild(checkBox);
        box.push(task.innerText);
        check.push(checkBox);
        arr.push(task);
    }
    
}

for(let i=0;i<check.length;i++){
    check[i].addEventListener("click",()=>{
        arr[i].style.cssText = "    text-decoration:line-through";
        

        setTimeout(()=>{
            let temp = parseInt(localStorage.getItem("taskComplete"));
        console.log(temp);

        temp++;
        console.log(temp);
        localStorage.setItem("taskComplete",parseInt(temp));
    reset.innerText = localStorage.getItem("taskComplete");
            let text = arr[i].innerText;
        console.log(text)
        cover.removeChild(arr[i]);
        // box[i].removeChild;
        box = box.filter(item => item !== text);
        localStorage.setItem("array",JSON.stringify(box));
        },1000)
    })
}



