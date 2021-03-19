for (var i = 0; i < 7; i++)
  document.querySelectorAll("button")[i].addEventListener("click", fun);

function fun() {
  var x = this.innerHTML;

  btnAnimation(x);
  makeSound(x);
}


document.addEventListener("keydown", function(event) {
  makeSound(event.key)
  btnAnimation(event.key)
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;
    case "a":
      var tom1 = new Audio("sounds/kick-bass.mp3");
      tom1.play();
      break;
    case "s":
      var tom1 = new Audio("sounds/snare.mp3");
      tom1.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom1 = new Audio("sounds/tom-2.mp3");
      tom1.play();
      break;
    case "k":
      var tom1 = new Audio("sounds/tom-3.mp3");
      tom1.play();
      break;
    case "l":
      var tom1 = new Audio("sounds/tom-4.mp3");
      tom1.play();
      break;
    default:
      console.log();
  }
}

function btnAnimation(a)
{
document.querySelector("."+a).classList.add("pressed");
setTimeout(function(){document.querySelector("."+a).classList.remove("pressed");},100);
}
