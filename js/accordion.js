const accordion = document.querySelector(".feature-list");
const accordionButtons = accordion.querySelectorAll(".feature__link");

accordionButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    accordionButtons.forEach((button) => {
      button.classList.remove("feature__link_active");
      button.nextElementSibling.classList.add("hidden");
    });

    btn.classList.toggle("feature__link_active");
    btn.nextElementSibling.classList.toggle("hidden");
  });
});
