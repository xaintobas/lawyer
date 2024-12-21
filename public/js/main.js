import { initNavigation } from "./modules/navigation.js";
import { initAccordion } from "./modules/accordion.js";
import { initProgressBars } from "./modules/progress.js";
import { initTestimonials } from "./modules/testimonials.js";
import { initFAQ } from "./modules/faq.js";
import { initNewsletter } from "./modules/newsletter.js";
import { initScrollAnimations } from "./utils/animations.js";
// import { initScrollAnimations } from "./utils/wow.min.js";

// Initialize all modules
document.addEventListener("DOMContentLoaded", () => {
  // initHeader();
  initAccordion();
  initNavigation();
  initProgressBars();
  initTestimonials();
  initFAQ();
  initNewsletter();
  initScrollAnimations();
});
