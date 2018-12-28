function makeDisabled(phase) {
  let current = document.querySelector(`.timer.${phase}`);

  if (current.classList.contains("disabled")) {
    current.classList.remove("disabled");
  }

  document.querySelectorAll(`.timer:not(.${phase})`).forEach(el => {
    if (!el.classList.contains("disabled")) {
      el.classList.add("disabled");
    }
  });
}

export default makeDisabled;
