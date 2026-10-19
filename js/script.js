
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(
        ".projects, .certificates, .education, .experience, .skills, .contact"
    );

    // Keep the page fully visible if reduced motion is preferred
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    // Add animation styles through JavaScript
    const style = document.createElement("style");

    style.textContent = `
        .reveal-on-scroll {
            opacity: 0;
            transform: translateY(20px);
            transition:
                opacity 0.7s ease,
                transform 0.7s ease;
        }

        .reveal-on-scroll.is-visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;

    document.head.appendChild(style);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    sections.forEach((section) => {
        section.classList.add("reveal-on-scroll");
        observer.observe(section);
    });
});
