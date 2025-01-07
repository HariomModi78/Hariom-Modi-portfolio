let level = document.querySelector("level");
console.log(level.textContent);
let audio =new Audio('game-music-loop-7-145285.mp3');
let audio1 = new Audio('90s-game-ui-6-185099.mp3');
let audio2 = new Audio('in-game-level-uptype-2-230567.mp3')
let box = document.getElementsByClassName("box");
audio.play();
let first = 'a';
let second = 'b';
    let number = 0;
//gameOver
function gameOver(){
    number++;
    number++;
    if(number==box.length){
        for(let i=0;i<box.length;i++){
            box[i].classList.remove("drop")
            box[i].style.cssText = "color:transparent";
            first='a';
            second='b';
        }
        number=0;
    window.location.href="#page2"

    }
    
}
function match(){
    box[first].style.cssText = "color:blue";
    box[second].style.cssText = "color:blue";
    box[first].classList.add("drop");
    box[second].classList.add("drop");
    setTimeout(gameOver,200);
    first='a';
    second='b';
    audio2.play();
}
function check(){
    setTimeout(match, 200)
}
function notmatch(){
        box[first].style.cssText = "color:transparent";
        box[second].style.cssText = "color:transparent";
        first='a';
        second='b';
}
function check1(){
    setTimeout(notmatch,200)
}
//gameover
let count = 0;

    for(let i=0;i<box.length;i++){
        box[i].style.cssText = "color:transparent";
        let index = i;
            box[i].addEventListener("click",()=>{
                audio1.play();
                audio.play();
                
                box[i].style.cssText = "color:black";
                count++;
                console.log(count)
                console.log(first);
                console.log(second)
                if(count==1) first = i;
                if(count==2) second = i;
                try{
                    if(first==second) count = 0;
                    if(box[first].innerHTML == box[second].innerHTML){
                        if(first==second){
                            box[first].style.cssText = "color:transparent";
                            box[second].style.cssText = "color:transparent";
                            first='a';
                            second='b';
                        }
                        else{
                            check();
    
                        }
                        count=0;
                        
                    }
                    else if(count==2){
                        check1();
                        count = 0;
                    }
                }
                catch(e){
                    console.log("chuteye second value de")
                }
            })
        
    }
