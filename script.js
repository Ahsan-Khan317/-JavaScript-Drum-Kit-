function rang(keycode){
    let audio = document.querySelector(`audio[data-key="${keycode}"]`)
    let key = document.querySelector(`.btn[data-key="${keycode}"]`);

    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    key.classList.add("sk")

    setTimeout(()=>{
        key.classList.remove("sk");
    },100)
}

window.addEventListener("keydown",(e)=>{
    rang(e.keyCode);
})

let btn = document.querySelectorAll(".btn");
btn.forEach((e)=>{
e.addEventListener("click",()=>{

    rang(e.dataset.key);
     
})
}
    
)
