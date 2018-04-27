const checkBoxes = document.querySelectorAll('.item input[type="checkbox"]');

let lastChecked;
checkBoxes.forEach(checkbox =>
  checkbox.addEventListener("click", event => {
    if (!lastChecked) {
      lastChecked = event.target;
      return;
    }
    let inBetween = false;
    if (event.shiftKey && event.target.checked) {
      checkBoxes.forEach(box => {
        console.log(lastChecked);
        if (box === event.target || box === lastChecked) {
          inBetween = !inBetween;
        }

        if (inBetween) {
          box.checked = true;
        }
      });
    }
    lastChecked = event.target;
  })
);
