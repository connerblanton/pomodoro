function updateWorkLabel(action) {
  let label = document.querySelector("#workLabel span"),
    labelInput = document.getElementById("workLabelInput");

  if (action === "setInput") {
    labelInput.value = label.innerText;
  } else {
    label.innerText = labelInput.value;
  }
}

export default updateWorkLabel;
