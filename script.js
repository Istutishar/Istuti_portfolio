// =========================
// 💜 SKILL DATA
// =========================

const skillsData = {
    html: {
        title: "HTML",
        description: "I learned how to structure websites using semantic elements and build clean layouts. I use it to create the foundation of every web page."
    },
    css: {
        title: "CSS",
        description: "I learned styling, layouts, flexbox, and animations. I use it to design responsive and visually appealing interfaces."
    },
    js: {
        title: "JavaScript",
        description: "I learned DOM manipulation, events, and interactivity. I use it to create dynamic features like popups and animations."
    },
    node: {
        title: "Node.js",
        description: "I learned backend basics and how servers work. I use it to handle data and connect frontend with backend."
    },
    git: {
        title: "Git & GitHub",
        description: "I learned version control, repositories, and collaboration. I use it to manage and track my projects efficiently."
    }
};


// =========================
// 🎯 SKILL POPUP
// =========================

function openSkill(skill) {
    const popup = document.getElementById("skill-popup");
    const title = document.getElementById("skill-title");
    const desc = document.getElementById("skill-description");

    if (!skillsData[skill]) return;

    title.textContent = skillsData[skill].title;
    desc.textContent = skillsData[skill].description;

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
// ❌ CLOSE ON OUTSIDE CLICK
// =========================

window.onclick = function(e) {
    const skillPopup = document.getElementById("skill-popup");
    const certPopup = document.getElementById("cert-popup");

    if (e.target === skillPopup) {
        skillPopup.style.display = "none";
    }

    if (e.target === certPopup) {
        certPopup.style.display = "none";
    }
};


// =========================
// 🌟 SMOOTH SCROLL (NAV)
// =========================

document.querySelectorAll("nav a").forEach(anchor => {
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


// =========================
// ✨ OPTIONAL: SCROLL FADE EFFECT
// =========================

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});
// =========================
// 📩 CONTACT FORM CONNECTION
// =========================

const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");

        const data = {
            name: inputs[0].value,
            email: inputs[1].value,
            message: inputs[2].value
        };

        try {
            const res = await fetch("http://localhost:3000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await res.text();
            alert(result);

            form.reset();

        } catch (err) {
            console.error(err);
            alert("Something went wrong");
        }
    });
<<<<<<< HEAD
}
=======
}
>>>>>>> 1f7c348e50a8525cd9ddb89d21619b6a994f8c35
