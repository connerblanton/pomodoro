import countdown from "./countdown";
import reset from "./reset";
import toggleLabel from "./toggleLabel";
import updateWorkLabel from "./updateWorkLabel";
import logPomodoro from "./logPomodoro";
import initDataLog from "./initDataLog";
import popModal from "./popModal";
import settingsHTML from "./settingsHTML";
import populateSettings from "./populateSettings";
import applySettings from "./applySettings";
import closeModal from "./closeModal";
import playSound from "./playSound";

// clicks
document.getElementById("start").addEventListener("click", () => {
  countdown("work");
  playSound("start");
});

document.querySelector("#workLabel span").addEventListener("click", e => {
  toggleLabel(e.path.find(el => el.id === "workLabel"));
  document.getElementById("workLabelInput").focus();
});

document.getElementById("workLabelSubmit").addEventListener("click", e => {
  updateWorkLabel();
  toggleLabel(e.path.find(el => el.id === "workLabel"));
});

document.getElementById("workLabelCancel").addEventListener("click", e => {
  updateWorkLabel("setInput");
  toggleLabel(e.path.find(el => el.id === "workLabel"));
});

document.getElementById("settings").addEventListener("click", () => {
  popModal("Settings", settingsHTML, "settings");
  populateSettings();
  document.getElementById("applySettings").addEventListener("click", () => {
    applySettings();
    closeModal();
  });
});

// Emitted Events

window.addEventListener("workComplete", () => {
  playSound("done");

  setTimeout(() => {
    countdown("break");
  }, 5000);

  // countdown("break");
});

window.addEventListener("breakComplete", () => {
  playSound("done");

  setTimeout(() => {
    countdown("work");
  }, 5000);

  // countdown("work");
});

window.addEventListener("startLong", () => {
  countdown("longBreak");
});

window.addEventListener("pomodoroComplete", () => {
  reset();
  logPomodoro();
  playSound("done");
});

initDataLog();
