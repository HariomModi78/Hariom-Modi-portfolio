let about = document.querySelector(".about");
about.addEventListener("mousemove",function tilt(event){
    about.style.cssText = "box-shadow:0 0 40px black";
    skill.style.cssText = "box-shadow:0 0 0 black";
})
let skill = document.querySelector(".skill");
skill.addEventListener("mousemove",function none(){
    skill.style.cssText = "box-shadow:0 0 40px black";
    about.style.cssText = "box-shadow:0 0 0 black";
})
let project = document.querySelector(".viewProject")
let audio = new Audio("abhi-maza-ayagga.mp3");
project.addEventListener("click",function play(){
    audio.play();
})
