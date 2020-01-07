const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function(event) {
  let currentPosition = this.scrollY;

  currentPosition <= 100
    ? navbar.classList.add("navbar-home")
    : navbar.classList.remove("navbar-home");
});
