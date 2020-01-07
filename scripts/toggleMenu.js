const burger = document.getElementById("burger");
const navMenu = document.getElementById("navbar-menu");
const dropdown = document.getElementById("dropdown");
const servicosLinks = document.querySelectorAll(".servicos-link");
const dividerLines = document.querySelectorAll(".link-divider");

let menuIsActive = false;

burger.addEventListener("click", () => {
  toggleMenu();
  menuIsActive ? (menuIsActive = false) : (menuIsActive = true);
});

window.addEventListener("resize", onResize);

function toggleMenu() {
  const navbar = document.getElementById("navbar");

  burger.classList.toggle("is-active");
  navMenu.classList.toggle("is-active");
  dropdown.classList.toggle("hidden-link");

  servicosLinks.forEach(link => {
    link.classList.toggle("hidden-link");
  });

  dividerLines.forEach(line => {
    line.classList.toggle("hidden-link");
  });

  navbar.classList.contains("navbar-home") &&
    navbar.classList.toggle("navbar-home");
}

function onResize() {
  let currentWidth = document.body.clientWidth;

  if (currentWidth >= 1024 && menuIsActive) {
    toggleMenu();
    menuIsActive = false;
  }
}
