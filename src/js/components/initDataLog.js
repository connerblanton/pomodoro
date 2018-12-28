import pomodoroLog from "./pomodoroLog";
import addToDataLog from "./addToDataLog";

function initDataLog() {
  document.getElementById("dataLog").innerHTML = "";
  pomodoroLog.forEach((job, i) => {
    addToDataLog(i);
  });
}

export default initDataLog;
