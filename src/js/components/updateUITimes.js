import settings from "./settings";

function updateUITimes() {
  document.getElementById(settings.work.minute).innerText = settings.work.time;
  document.getElementById(settings.break.minute).innerText =
    settings.break.time;
  document.getElementById(settings.longBreak.minute).innerText =
    settings.longBreak.time;
}

export default updateUITimes;
