const panels = document.querySelectorAll(".panel");
panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel =>
  panel.addEventListener("transitionend", toggleOpenActive)
);

function toggleOpen(event) {
  this.classList.toggle("open");
}

function toggleOpenActive(event) {
  console.log(event.propertyName);
  if (event.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
