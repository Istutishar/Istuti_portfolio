document.addEventListener("DOMContentLoaded", () => {

    function openSkill(skill) {

        const popup = document.getElementById("skill-popup");
        const title = document.getElementById("skill-title");
        const description = document.getElementById("skill-description");

        popup.style.display = "block";

        if (skill === "html") {
            title.innerText = "HTML";
            description.innerText = "I learned HTML to structure web pages using semantic elements.";
        }

        else if (skill === "css") {
            title.innerText = "CSS";
            description.innerText = "I use CSS to design layouts, colors, and animations.";
        }

        else if (skill === "js") {
            title.innerText = "JavaScript";
            description.innerText = "I use JavaScript for interactivity and dynamic content.";
        }

        else if (skill === "node") {
            title.innerText = "Node.js";
            description.innerText = "I am learning backend development using Node.js.";
        }

        else if (skill === "git") {
            title.innerText = "Git & GitHub";
            description.innerText = "I use GitHub to manage and showcase my projects.";
        }
    }

    function closePopup() {
        document.getElementById("skill-popup").style.display = "none";
    }

    // Make functions global (IMPORTANT)
    window.openSkill = openSkill;
    window.closePopup = closePopup;
    window.openCert = openCert;
window.closeCert = closeCert;

    // Scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });
function openCert(src) {
    const popup = document.getElementById("cert-popup");
    const image = document.getElementById("cert-image");

    popup.style.display = "block";
    image.src = src;
}

function closeCert() {
    document.getElementById("cert-popup").style.display = "none";
}
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach(el => observer.observe(el));

});
