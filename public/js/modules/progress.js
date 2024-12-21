export function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    
    function animateProgress() {
        progressBars.forEach(progress => {
            const percent = progress.dataset.percent;
            progress.style.width = '0%';
            setTimeout(() => {
                progress.style.width = percent + '%';
            }, 100);
        });
    }

    // Animate when in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgress();
                observer.unobserve(entry.target);
            }
        });
    });

    // Fix: Use querySelectorAll to get all progress bars sections
    const progressSections = document.querySelectorAll('.progress-bars');
    progressSections.forEach(section => {
        observer.observe(section);
    });
}