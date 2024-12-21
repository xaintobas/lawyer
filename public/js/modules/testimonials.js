export function initTestimonials() {
    const slider = document.querySelector('.testimonial-slider');
    const cards = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;

    function showTestimonial(index) {
        const offset = index * -100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    // Auto-rotate testimonials
    setInterval(() => {
        currentIndex = (currentIndex + 1) % cards.length;
        showTestimonial(currentIndex);
    }, 5000);
}