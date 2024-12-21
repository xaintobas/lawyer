export function initHeader() {
  const hamburgerIcon = document.getElementById("hamburger");
  const closeMenu = document.getElementById("hamburger-close");
  const overlay = document.getElementById("overlay");
  const navLinks = document.getElementById("nav-links");

  function closeMobileMenu() {
    navLinks.style.right = "-300rem";
    overlay.style.display = "none";
    navLinks.style.display = "none";
  }

  function openMobileMenu() {
    mobileMenu.style.width = "25rem";
    overlay.style.display = "block";
    mobileMenu.style.display = "block";
  }

  overlay.addEventListener("click", closeMobileMenu);
  closeMenu.addEventListener("click", closeMobileMenu);
  hamburgerIcon.addEventListener("click", openMobileMenu);
}
