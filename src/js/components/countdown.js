import timeFor from "./timeFor";
import elementFor from "./elementFor";
import makeDisabled from "./makeDisabled";
import sessionComplete from "./sessionComplete";
import allSessionsComplete from "./allSessionsComplete";

function countdown(phase) {
  let time = timeFor(phase) * 60 * 1000;
  const secondUI = document.getElementById(elementFor(phase, "second"));
  const minuteUI = document.getElementById(elementFor(phase, "minute"));

  makeDisabled(phase);

  let timer = setInterval(() => {
    if (time < 1000) {
      if (phase === "break") {
        sessionComplete();
      }

      if (phase === "longBreak") {
        window.dispatchEvent(new Event("pomodoroComplete"));
      } else if (allSessionsComplete()) {
        window.dispatchEvent(new Event("startLong"));
      } else {
        window.dispatchEvent(new Event(`${phase}Complete`));
      }
      clearInterval(timer);
    }
    secondUI.innerText = `0${(time / 1000) % 60}`.slice(-2);
    minuteUI.innerText = `0${Math.floor(time / 60000)}`.slice(-2);
    time = time - 1000;
  }, 1000);
}

export default countdown;
