"use strict";


window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!audio) return; //stops the function
    
    audio.currentTime = 0; //sets current playtime to zero
    audio.play();
    
    key.classList.add("playing")//plays the css transition
    
    function removeTransition(e){
        if(e.propertyName != "transform") return;
        this.classList.remove("playing");
    };
    
    //remove the transition
    const keys = document.querySelectorAll(".key")
    keys.forEach(key => key.addEventListener("transitionend" , removeTransition));
     
});