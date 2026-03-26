document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");

    // CONTACT FORM
    form.addEventListener("submit", async function(e) {
        e.preventDefault();

        const formData = {
            name: form.querySelector("input[type='text']").value,
            email: form.querySelector("input[type='email']").value,
            message: form.querySelector("textarea").value
        };

        try {
            await fetch("http://localhost:3000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            alert("Message sent successfully 💜");
            form.reset();

        } catch (error) {
            alert("Something went wrong 😢");
        }
    });

    // SCROLL ANIMATION
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach(el => observer.observe(el));

});

// SKILL POPUP
function openSkill(skill) {
    const popup = document.getElementById("skill-popup");
    const title = document.getElementById("skill-title");
    const description = document.getElementById("skill-description");

    popup.style.display = "block";

    if (skill === "html") {
        title.innerText = "HTML";
        description.innerText = "I learned HTML to structure web pages.";
    } 
    else if (skill === "css") {
        title.innerText = "CSS";
        description.innerText = "I design layouts and animations.";
    } 
    else if (skill === "js") {
        title.innerText = "JavaScript";
        description.innerText = "I add interactivity to websites.";
    } 
    else if (skill === "node") {
        title.innerText = "Node.js";
        description.innerText = "I build backend systems.";
    } 
    else if (skill === "git") {
        title.innerText = "Git & GitHub";
        description.innerText = "I manage and track code.";
    }
}

function closePopup() {
    document.getElementById("skill-popup").style.display = "none";
}

// CERT POPUP
function openCert(src) {
    const popup = document.getElementById("cert-popup");
    const image = document.getElementById("cert-image");

    popup.style.display = "block";
    image.src = src;
}

function closeCert() {
    document.getElementById("cert-popup").style.display = "none";
}

// GLOBAL ACCESS
window.openSkill = openSkill;
window.closePopup = closePopup;
window.openCert = openCert;
window.closeCert = closeCert;
