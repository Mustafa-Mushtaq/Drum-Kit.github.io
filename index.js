/*
ANONYMOUS FUNCTION
document.querySelector("button").addEventListener("click", function(){
  alert("Chachu maaraa");
});
*/
/*
FUNCTION AS AN INPUT
document.querySelector("button").addEventListener("click", handleClick);
function handleClick(){
  alert("Chachu maaraa");
}
*/
/*
TO PUT DIFFERENT ALERT ON EVERY BUTTON
document.querySelectorAll("button")[0].addEventListener("click", function(){
  alert("Chachu maaraa");
});
*/


//DETECTING BUTTON CLICKS

var noOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerhtml = this.innerHTML;
    makeSound(buttonInnerhtml);
    buttonAnimation(buttonInnerhtml);
  });
}

//DETECTING KEYPRESSES

document.addEventListener("keydown", function(event){

  makeSound(event.key);
  buttonAnimation(event.key);
});



function makeSound(key){

  switch (key) {
    case "w":
    var audio = new Audio ("sounds/tom-1.mp3");
    audio.play();
      break;

    case "a":
    var audio = new Audio ("sounds/tom-2.mp3");
    audio.play();
      break;

    case "s":
    var audio = new Audio ("sounds/tom-3.mp3");
    audio.play();
      break;

    case "d":
    var audio = new Audio ("sounds/tom-4.mp3");
    audio.play();
      break;

    case "j":
    var audio = new Audio ("sounds/snare.mp3");
    audio.play();
      break;

    case "k":
    var audio = new Audio ("sounds/crash.mp3");
    audio.play();
      break;

    case "l":
    var audio = new Audio ("sounds/kick-bass.mp3");
    audio.play();
      break;


    default:console.log(buttonInnerhtml);

  }
}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
