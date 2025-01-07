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
