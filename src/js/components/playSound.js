function playSound(bell) {
  let sound;
  if (bell === "start") {
    sound = new Audio("../../../sounds/startBell.mp3");
  } else {
    sound = new Audio("../../../sounds/finishBell.mp3");
  }

  sound.play();
}

export default playSound;
