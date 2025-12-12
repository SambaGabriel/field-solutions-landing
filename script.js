document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add("visible");
        });
    });

    items.forEach(i => observer.observe(i));
});
