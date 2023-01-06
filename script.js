
for (let i = 0; i<document.querySelectorAll(".drum").length;i++){
    let audio = new Audio('resources/sounds/tom-1.mp3');
   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
   
   audio.play()});

}