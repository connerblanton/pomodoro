import settings from "./settings";

function reset() {
  settings.sessionsComplete = 0;

  document.querySelectorAll(".timer.disabled").forEach(el => {
    el.classList.remove("disabled");
  });
}

export default reset;
