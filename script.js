// =========================
// 🌟 DATA (YOUR CONTENT)
// =========================

const skillsData = [
    {
        name: "HTML",
        learned: "I learned how to structure web pages using semantic elements and create clean layouts.",
        usage: "I use it to build the foundation of websites and organize content properly."
    },
    {
        name: "CSS",
        learned: "I learned styling, layouts, flexbox, animations, and responsive design.",
        usage: "I use it to make websites visually appealing and create modern UI designs."
    },
    {
        name: "JavaScript",
        learned: "I learned how to add interactivity, handle events, and manipulate the DOM.",
        usage: "I use it to make websites dynamic like popups, animations, and real-time updates."
    },
    {
        name: "Cybersecurity",
        learned: "I learned about vulnerabilities, ethical hacking basics, and system protection.",
        usage: "I use it to understand threats and build secure applications."
    }
];

const certData = [
    {
        name: "Ethical Hacking",
        detail: "Learned penetration testing basics, vulnerabilities, and security practices."
    },
    {
        name: "Web Development Bootcamp",
        detail: "Covered full-stack basics including HTML, CSS, JavaScript and projects."
    }
];


// =========================
// 🎯 ELEMENTS
// =========================

const skillsBtn = document.getElementById("skillsBtn");
const certBtn = document.getElementById("certBtn");

const skillsPopup = document.getElementById("skillsPopup");
const certPopup = document.getElementById("certPopup");

const skillsList = document.getElementById("skillsList");
const certList = document.getElementById("certList");

// DETAIL POPUP
const detailPopup = document.createElement("div");
detailPopup.className = "popup";
detailPopup.innerHTML = `
    <div class="popup-content">
        <span id="closeDetail">&times;</span>
        <h2 id="detailTitle"></h2>
        <p id="detailLearned"></p>
        <p id="detailUsage"></p>
    </div>
`;
document.body.appendChild(detailPopup);


// =========================
// 🚀 OPEN MAIN POPUPS
// =========================

skillsBtn.onclick = () => {
    skillsPopup.style.display = "flex";
    renderSkills();
};

certBtn.onclick = () => {
    certPopup.style.display = "flex";
    renderCertificates();
};


// =========================
// ❌ CLOSE MAIN POPUPS
// =========================

document.getElementById("closeSkills").onclick = () => {
    skillsPopup.style.display = "none";
};

document.getElementById("closeCert").onclick = () => {
    certPopup.style.display = "none";
};


// =========================
// 🧠 RENDER SKILLS
// =========================

function renderSkills() {
    skillsList.innerHTML = "";

    skillsData.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill.name;

        li.style.cursor = "pointer";

        li.onclick = () => {
            openDetail(skill.name, skill.learned, skill.usage);
        };

        skillsList.appendChild(li);
    });
}


// =========================
// 📜 RENDER CERTIFICATES
// =========================

function renderCertificates() {
    certList.innerHTML = "";

    certData.forEach(cert => {
        const li = document.createElement("li");
        li.textContent = cert.name;

        li.style.cursor = "pointer";

        li.onclick = () => {
            openDetail(cert.name, cert.detail, "");
        };

        certList.appendChild(li);
    });
}


// =========================
// 💜 DETAIL POPUP FUNCTION
// =========================

function openDetail(title, learned, usage) {
    detailPopup.style.display = "flex";

    document.getElementById("detailTitle").textContent = title;
    document.getElementById("detailLearned").textContent = "What I learned: " + learned;

    const usageEl = document.getElementById("detailUsage");

    if (usage) {
        usageEl.textContent = "How I use it: " + usage;
    } else {
        usageEl.textContent = "";
    }
}


// =========================
// ❌ CLOSE DETAIL POPUP
// =========================

document.getElementById("closeDetail").onclick = () => {
    detailPopup.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === skillsPopup) skillsPopup.style.display = "none";
    if (e.target === certPopup) certPopup.style.display = "none";
    if (e.target === detailPopup) detailPopup.style.display = "none";
};
