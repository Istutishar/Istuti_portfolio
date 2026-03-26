function openSkill(skill) {

    const popup = document.getElementById("skill-popup");
    const title = document.getElementById("skill-title");
    const description = document.getElementById("skill-description");

    popup.style.display = "block";

    if (skill === "html") {
        title.innerText = "HTML";
        description.innerText = "I learned HTML to structure web pages using semantic elements. I use it to build clean and organized layouts for websites.";
    }

    else if (skill === "css") {
        title.innerText = "CSS";
        description.innerText = "I use CSS to design and style websites with layouts, colors, and animations. It helps me create visually appealing user interfaces.";
    }

    else if (skill === "js") {
        title.innerText = "JavaScript";
        description.innerText = "I use JavaScript for interactivity like animations, events, and dynamic content. It allows me to make websites responsive and engaging.";
    }

    else if (skill === "node") {
        title.innerText = "Node.js";
        description.innerText = "I am learning Node.js to understand backend development and server-side logic. It helps in building full-stack applications.";
    }

    else if (skill === "git") {
        title.innerText = "Git & GitHub";
        description.innerText = "I use Git and GitHub to manage my code, track changes, and collaborate. It also helps me host and showcase my projects.";
    }
}

/* CLOSE POPUP */
function closePopup() {
    document.getElementById("skill-popup").style.display = "none";
}
