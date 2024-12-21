export function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

export function fadeInElement(element, delay = 0) {
    setTimeout(() => {
        element.classList.add('fade-in');
    }, delay);
}

export function slideInElement(element, delay = 0) {
    setTimeout(() => {
        element.classList.add('slide-in');
    }, delay);
}