const openIcon = document.querySelector(".open");
const closeIcon = document.querySelector(".close");
const navItem = document.querySelector(".nav-items");
const overlay = document.querySelector(".overlay");

openIcon.addEventListener("click", () => {
  navItem.classList.toggle("active");
  overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  navItem.classList.toggle("active");
});
