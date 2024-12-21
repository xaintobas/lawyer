export function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('p');

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            // Close all FAQs
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('open');
                otherItem.querySelector('p').style.maxHeight = null;
            });

            // Open clicked FAQ if it wasn't open
            if (!isOpen) {
                item.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}