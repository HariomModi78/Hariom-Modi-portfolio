let reel = document.getElementsByClassName("reel-block");
let video = document.getElementsByTagName("video");
let number = 0;

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
