const ul = document.querySelector("aside");
const sections = document.querySelectorAll("section");

ul.addEventListener("click", (e) => {
  // e.target.classList.remove("selected");

  if (e.target.tagName === "LI") {
    Array.from(ul.children).forEach((item) => {
      item.classList.remove("selected");

      sections.forEach((el) => {
        el.classList.remove("active");
        if (el.firstElementChild.textContent.includes(e.target.textContent)) {
          el.classList.toggle("active");
        }
      });
    });
  }

  e.target.classList.toggle("selected");
});
