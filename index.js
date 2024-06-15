document.addEventListener("DOMContentLoaded", () => {
    const component = document.querySelector(".joinImg img");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing once it is visible
            }
        });
    }, {
        threshold: 0.1
    });
    
    observer.observe(component);
});