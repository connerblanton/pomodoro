import settings from "./settings";

function elementFor(phase, element) {
  return settings[phase][element];
}

export default elementFor;
