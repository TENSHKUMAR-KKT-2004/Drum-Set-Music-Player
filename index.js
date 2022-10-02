// Input via button pressing
var ln = document.querySelectorAll(".drum").length;
for (var i = 0; i < ln; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var letter = this.innerHTML;
    makingsound(letter);
    animation(letter);
  });
}
// input via keypress
document.addEventListener("keypress", function(event) {
  makingsound(event.key);
  animation(event.key);
})
// main function
function makingsound(letter) {
  switch (letter) {
    case 'w':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default:
  }
}
//animation
function animation(btn) {
  var btnelement = document.querySelector("." + btn);
  btnelement.classList.add("pressed");
  setTimeout(function() {
    btnelement.classList.remove("pressed")
  }, 100);
}
