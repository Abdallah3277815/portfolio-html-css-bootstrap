let navbar = document.getElementById("navbar");
window.addEventListener("scroll", function() {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
      navbar.classList.remove("navbar-dark");
      navbar.classList.add("navbar-light");
      
    } else {
      navbar.classList.remove("scrolled");
      navbar.classList.add("navbar-dark");
    }
  });