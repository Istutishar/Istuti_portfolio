// 🌌 Smooth Scroll for Navigation Links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// 🌟 Reveal Elements on Scroll
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);


// 🎯 Simple Typewriter Effect (optional for hero text)
const text = "Cybersecurity Enthusiast";
let index = 0;
const speed = 80;

function typeWriter() {
    const element = document.querySelector(".typewriter");

    if (!element) return;

    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.addEventListener("load", typeWriter);


// 🌌 Mouse Move Glow Effect (for background blobs)
document.addEventListener("mousemove", (e) => {
    const blobs = document.querySelectorAll(".blob");

    blobs.forEach(blob => {
        const speed = blob.getAttribute("data-speed") || 20;

        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        blob.style.transform = `translate(${x}px, ${y}px)`;
    });
});


// 🔥 Navbar Shadow on Scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (!nav) return;

    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        nav.style.boxShadow = "none";
    }
});
