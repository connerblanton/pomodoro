import closeModal from "./closeModal";

function popModal(title, body, bodyClass) {
  let modal = document.createElement("div");
  modal.classList.add("modal");

  let modalTitle = document.createElement("h3");
  modalTitle.classList.add("title");
  modalTitle.innerText = title;

  let modalBody = document.createElement("section");
  modalBody.classList.add("body");
  if (bodyClass) {
    modalBody.classList.add(bodyClass);
  }
  modalBody.innerHTML = body;

  let skrim = document.createElement("div");
  skrim.classList.add("skrim");

  modal.appendChild(modalTitle);
  modal.appendChild(modalBody);

  document.body.appendChild(skrim);
  document.body.appendChild(modal);
  document.body.classList.add("no-scroll");
  skrim.addEventListener("click", () => {
    closeModal();
  });
}

export default popModal;
