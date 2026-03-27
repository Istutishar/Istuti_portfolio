```javascript id="m3z7x9"
// =========================
// 🌟 SKILL DATA
// =========================

const skillsInfo = {
    html: {
        title: "HTML",
        description: "I structure websites using semantic elements and build clean, organized layouts."
    },
    css: {
        title: "CSS",
        description: "I design responsive layouts, animations, and modern UI using flexbox and styling techniques."
    },
    js: {
        title: "JavaScript",
        description: "I create interactivity, handle events, and build dynamic features like popups and animations."
    },
    node: {
        title: "Node.js",
        description: "I understand backend basics and how servers work to connect frontend with backend."
    },
    git: {
        title: "Git & GitHub",
        description: "I manage version control, track changes, and collaborate on projects efficiently."
    }
};

// =========================
// 🎯 SKILL POPUP
// =========================

function openSkill(skill) {
    const popup = document.getElementById("skill-popup");
    const title = document.getElementById("skill-title");
    const desc = document.getElementById("skill-description");

    title.textContent = skillsInfo[skill].title;
    desc.textContent = skillsInfo[skill].description;

    popup.style.display = "flex";
}

function closePopup() {
    document.getElementById("skill-popup").style.display = "none";
}

// =========================
// 🖼️ CERTIFICATE POPUP
// =========================

function openCert(src) {
    const popup = document.getElementById("cert-popup");
    const img = document.getElementById("cert-image");

    img.src = src;
    popup.style.display = "flex";
}

function closeCert() {
    document.getElementById("cert-popup").style.display = "none";
}

// =========================
// ❌ CLOSE POPUPS ON OUTSIDE CLICK
// =========================

window.addEventListener("click", function (e) {
    const skillPopup = document.getElementById("skill-popup");
    const certPopup = document.getElementById("cert-popup");

    if (e.target === skillPopup) {
        skillPopup.style.display = "none";
    }

    if (e.target === certPopup) {
        certPopup.style.display = "none";
    }
});

// =========================
// 🌊 SCROLL REVEAL (FIXED)
// =========================

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => {
    observer.observe(el);
});

// =========================
// ✨ OPTIONAL: SMOOTH SCROLL NAV
// =========================

document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// =========================
// 💌 CONTACT FORM (FRONTEND ONLY)
// =========================

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Message sent successfully ✨ (frontend only)");

    this.reset();
});
```
