export function initNavigation() {
  const hamburgerIcon = document.getElementById("hamburger");
  const closeMenu = document.getElementById("close-btn");
  const navLinks = document.getElementById("nav-links");
  const overlay = document.getElementById("overlay");

  function closeMobileMenu() {
    navLinks.style.right = "-400rem";
    overlay.style.right = "-400rem";
  }

  function openMobileMenu() {
    navLinks.style.right = "0";
    overlay.style.right = "0";
    navLinks.style.display = "block";
    overlay.style.display = "block";
  }

  overlay.addEventListener("click", closeMobileMenu);
  closeMenu.addEventListener("click", closeMobileMenu);
  hamburgerIcon.addEventListener("click", openMobileMenu);

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Header scroll effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.style.background = "rgba(255, 255, 255, 0.95)";
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.background = "#fff";
      header.style.boxShadow = "none";
    }
  });
}
