const navigationBar = document.querySelector(".navbar");
const hamburgerIcon = document.querySelector(".hamburger-icon");
hamburgerIcon.addEventListener("click", () => {
  navigationBar.classList.toggle("active");
});
const navbarLinks = document.querySelectorAll('.navbar ul li a');
navbarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navigationBar.classList.remove('active');
  });
});
