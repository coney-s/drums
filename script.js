
for (let i = 0; i<document.querySelectorAll(".drum").length;i++){
    let audio = new Audio('resources/sounds/tom-1.mp3');
   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
    let audio = new Audio('resources/sounds/crash.mp3');
    
    audio.play()});
    }


    function Drum(drumImage, drumSound){
        this.drumImage = drumImage;
        this.drumSound = drumSound;
    }

    let w = new Drum("resources/images/crash.png", "resources/sounds/crash.mp3");