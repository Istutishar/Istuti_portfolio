// =========================
// 🌟 SKILL DATA
// =========================

const skillsInfo = {
    html: {
        title: "HTML",
        description: "I learned how to structure websites using semantic elements and build the foundation of web pages. I use it to create clean and organized layouts."
    },
    css: {
        title: "CSS",
        description: "I learned styling, layouts, flexbox, and animations. I use it to design visually appealing and responsive websites."
    },
    js: {
        title: "JavaScript",
        description: "I learned how to add interactivity, handle events, and manipulate the DOM. I use it to build dynamic features like popups and animations."
    },
    node: {
        title: "Node.js",
        description: "I learned backend basics and how servers work. I use it to handle data and connect frontend with backend."
    },
    git: {
        title: "Git & GitHub",
        description: "I learned version control, repositories, and collaboration. I use it to manage projects and track changes."
    }
};

// =========================
// 🎯 SKILL POPUP FUNCTION
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
