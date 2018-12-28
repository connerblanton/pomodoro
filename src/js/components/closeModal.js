function closeModal() {
  document.body.classList.remove("no-scroll");
  document.body.removeChild(document.querySelector(".skrim"));
  document.body.removeChild(document.querySelector(".modal"));
}

export default closeModal;
