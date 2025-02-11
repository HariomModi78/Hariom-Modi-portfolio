let reel = document.getElementsByClassName("reel-block");
let video = document.getElementsByTagName("video");
let homeButton = document.querySelector(".ri-home-fill");
homeButton.addEventListener("click",()=>{
    window.location.href = "main.html";
});
let profileButton = document.querySelector(".ri-account-circle-line");
profileButton.addEventListener("click",()=>{
    window.location.href = "profile.html";
});
let number = 0;
let startY = 0;

// For Mobile (Touch Events)
document.addEventListener("touchstart", (event) => {
    startY = event.touches[0].clientY; // Store initial touch position
});

document.addEventListener("touchmove", (event) => {
    let endY = event.touches[0].clientY;
    
    if (startY > endY) {
        console.log("Scrolling Down (Mobile)");
        number = number -100;
            for(let i=0;i<reel.length;i++){
                reel[i].style.cssText = `transform: translateY(${-number}%) `;
            }            
        
    } else {
        console.log("Scrolling Up (Mobile)");
        for(let i=0;i<reel.length;i++){
                reel[i].style.cssText = `transform: translateY(${-number}%) `;
            }
            number = number +100;
    }
});

// For Desktop (Mouse Wheel)
document.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        console.log("Scrolling Down (Desktop)");
    } else {
        console.log("Scrolling Up (Desktop)");
    }
});
for(let i=0;i<reel.length;i++){
    reel[i].addEventListener("click",(delt)=>{



        
        if(delt.y>313 && i!=reel.length-1){
            for(let i=0;i<reel.length;i++){
                reel[i].style.cssText = `transform: translateY(${-number}%) `;
            }
            number = number +100;
        }
        else if(delt.y<313 && i!=0){
            
            number = number -100;
            for(let i=0;i<reel.length;i++){
                reel[i].style.cssText = `transform: translateY(${-number}%) `;
            }            
        }
        
    })
}
let likeIcon = document.getElementsByClassName("ri-heart-line item")
let like = document.querySelector(".like-animation");
for(let i=0;i<likeIcon.length;i++){
    console.log(likeIcon[i]);
    likeIcon[i].addEventListener("click",()=>{
        like.classList.add("like-animationjs");
        setTimeout(()=>{
            like.classList.remove("like-animationjs");
        },1000)
    })
}
