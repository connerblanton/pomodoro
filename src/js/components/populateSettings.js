import settings from "./settings";

function populateSettings() {
  document.getElementById("workMinuteInput").value = settings.work.time;
  document.getElementById("breakMinuteInput").value = settings.break.time;
  document.getElementById("lbMinuteInput").value = settings.longBreak.time;
}

export default populateSettings;
