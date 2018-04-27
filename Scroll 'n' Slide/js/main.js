const para = document.querySelectorAll(".site-wrap p");

var i = 0;
para.forEach(item => (item.innerHTML = strings[i++]));

const imgs = document.querySelectorAll(".site-wrap img");

window.addEventListener("scroll", event => {
  debounce(checkSlide);
});

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    console.log("in debounce");
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide() {
  console.log("scrolling");
  imgs.forEach(img => {
    // half of the image
    const slideInAt = window.scrollY + window.innerHeight - img.height / 2;
    // bottom of the image
    const imgBottom = img.offsetTop + img.height;

    const isHalfShown = slideInAt > img.offsetTop;
    const isNotScrolledPast = window.screenY < imgBottom;
    if (isHalfShown && !isNotScrolledPast) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
}
