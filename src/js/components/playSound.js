function playSound(bell) {
  let sound;
  if (bell === "start") {
    sound = new Audio("/pomodoro/sounds/startBell.mp3");
  } else {
    sound = new Audio("/pomodoro/sounds/finishBell.mp3");
  }

  sound.play();
}

export default playSound;
