function openSkill(skill) {

    const popup = document.getElementById("skill-popup");
    const title = document.getElementById("skill-title");
    const description = document.getElementById("skill-description");

    popup.style.display = "block";

    if (skill === "html") {
        title.innerText = "HTML";
        description.innerText = "I learned HTML to structure web pages using semantic elements. I use it to build clean and organized layouts.";
    }

    else if (skill === "css") {
        title.innerText = "CSS";
        description.innerText = "I use CSS to design layouts, colors, and animations, making websites visually appealing.";
    }

    else if (skill === "js") {
        title.innerText = "JavaScript";
        description.innerText = "I use JavaScript for interactivity, events, and dynamic behavior in websites.";
    }

    else if (skill === "node") {
        title.innerText = "Node.js";
        description.innerText = "I am learning Node.js to understand backend systems and server-side logic.";
    }

    else if (skill === "git") {
        title.innerText = "Git & GitHub";
        description.innerText = "I use GitHub to manage code, track changes, and host my projects.";
    }
}

/* CLOSE POPUP */
function closePopup() {
    document.getElementById("skill-popup").style.display = "none";
}

/* SCROLL ANIMATION (THIS WAS MISSING) */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(el => observer.observe(el));
