export function initAccordion() {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("accordion-active");

      // Close all items
      accordionItems.forEach((otherItem) => {
        otherItem.classList.remove("accordion-active");
      });

      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add("accordion-active");
      }
    });
  });
}
