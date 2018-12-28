import pomodoroLog from "./pomodoroLog";

function addToDataLog(index = pomodoroLog.length - 1) {
  let job = pomodoroLog[index];
  let dataLog = document.getElementById("dataLog");

  let jobLabel = document.createElement("div");
  jobLabel.classList.add("data");
  jobLabel.innerText = job.name;

  let hoursWorked = document.createElement("div");
  hoursWorked.classList.add("data");
  hoursWorked.innerText = job.hoursWorked.toFixed(2) + " hrs";

  dataLog.appendChild(jobLabel);
  dataLog.appendChild(hoursWorked);
}

export default addToDataLog;
