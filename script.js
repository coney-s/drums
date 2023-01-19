
for (let i = 0; i<document.querySelectorAll(".drum").length;i++){
    let audio = new Audio('resources/sounds/tom-1.mp3');
   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

 })};


    document.addEventListener("keydown", function(event){
        makeSound(event.key);
    });
   

    function makeSound(key){

        switch(key){
            case "w":
             let crash = new Audio('resources/sounds/crash.mp3');
             crash.play();
            break;
            
            case "a":
                let tom1 = new Audio('resources/sounds/tom-1.mp3');
                tom1.play();
            break;
    
            case "s":
                let tom2 = new Audio('resources/sounds/tom-2.mp3');
                tom2.play();
            break;
            
            case "d":
                let snare = new Audio('resources/sounds/snare.mp3');
                snare.play();
            break;
            
            case "j":
                let tom3 = new Audio('resources/sounds/tom-3.mp3');
                tom3.play();
            break;
    
            case "k":
                let tom4 = new Audio('resources/sounds/tom-4.mp3');
                tom4.play();
            break;
    
            case "l":
                let bass = new Audio('resources/sounds/kick-bass.mp3');
                bass.play();
            break;
            
            default:
    
            
            
    
        }

    }

