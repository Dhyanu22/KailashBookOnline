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

document.getElementById('menu-toggle').addEventListener('click', function() {
    var navItems = document.getElementById('nav-items');
    if (navItems.classList.contains('active')) {
        navItems.classList.remove('active');
    } else {
        navItems.classList.add('active');
    }
});


<button onclick="window.location.href='https://api.whatsapp.com/send?phone=8950742105';" class="GFG">Click Here</button>