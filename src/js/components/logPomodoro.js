import pomodoroLog from "./pomodoroLog";
import settings from "./settings";
import addToDataLog from "./addToDataLog";
import initDataLog from "./initDataLog";

function logPomodoro() {
  let label = document.querySelector("#workLabel span").innerText;
  let hours = (settings.work.time * settings.sessions) / 60;

  const existingJob = pomodoroLog.find(obj => obj.name === label);
  if (existingJob) {
    // work already exists for this. add to it
    let jobIndex = pomodoroLog.indexOf(existingJob);
    existingJob.hoursWorked += hours;
    pomodoroLog[jobIndex] = existingJob;
  } else {
    // no work exists. push a new one
    pomodoroLog.push({
      name: label,
      hoursWorked: hours
    });
  }

  initDataLog();
}

export default logPomodoro;
