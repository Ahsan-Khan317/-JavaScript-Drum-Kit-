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

window.addEventListener("keydown", (e) => {
    let f=e.key.toUpperCase();
    // Get ASCII value for single-character keys
    if (f.length === 1) {
        let ascii = f.charCodeAt(0);
        rang(ascii);
       console.log(f);
       console.log(e.key);
        
        
    }
});

let btn = document.querySelectorAll(".btn");
btn.forEach((e)=>{
e.addEventListener("click",()=>{

    rang(e.dataset.key);
     
})
}
    
)
