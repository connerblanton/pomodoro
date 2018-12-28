function toggleLabel(workLabel) {
  [].slice.call(workLabel.children).forEach(el => {
    el.classList.toggle("hide");
  });
}

export default toggleLabel;
