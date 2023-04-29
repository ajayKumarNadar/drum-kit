var buttons = document.querySelectorAll("button.drum")

function playMusic(txt) {
  switch (txt) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3")
      tom1.play()
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play()
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3")
      tom3.play()
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3")
      tom4.play()
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3")
      crash.play()
      break;

    case "k":
      var snare = new Audio("sounds/snare.mp3")
      snare.play()
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3")
      kick.play()
      break;
    default: console.log(txt);

  }
}

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey)
  activeButton.classList.add("pressed")

  setTimeout(function () {
    activeButton.classList.remove("pressed")
  }, 100);
}

for (index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function () {
      console.log(this)

      var buttonInnerHTML = this.textContent;
      playMusic(buttonInnerHTML)
      buttonAnimation(buttonInnerHTML)
    }
  )
  }

document.addEventListener("keydown", function(event) {
  var keyPressed = event.key
  console.log(keyPressed)
  playMusic(keyPressed)
  buttonAnimation(keyPressed)
})
