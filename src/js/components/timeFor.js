import settings from "./settings";

function timeFor(phase, time) {
  if (time) {
    // setting time
    settings[phase].time = time;
  }

  return settings[phase].time;
}

export default timeFor;
