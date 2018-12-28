import settings from "./settings";
import updateUITimes from "./updateUITimes";

function applySettings() {
  let workTime = Math.ceil(document.getElementById("workMinuteInput").value),
    breakTime = Math.ceil(document.getElementById("breakMinuteInput").value),
    lbTime = Math.ceil(document.getElementById("lbMinuteInput").value);

  settings.work.time = workTime;
  settings.break.time = breakTime;
  settings.longBreak.time = lbTime;

  updateUITimes();
}

export default applySettings;
