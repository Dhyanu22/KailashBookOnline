const menuToggle = document.getElementById('menu-toggle');
const centerNav = document.getElementById('centerNav');
const rightNav = document.getElementById('rightNav');

menuToggle.addEventListener('click', () => {
    centerNav.classList.toggle('active');
    rightNav.classList.toggle('active');
});

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

<button onclick="window.location.href='https://api.whatsapp.com/send?phone=8950742105';" class="GFG">Click Here</button>