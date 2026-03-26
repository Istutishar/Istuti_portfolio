function openSkill(skill) {

    const popup = document.getElementById("skill-popup");
    const title = document.getElementById("skill-title");
    const description = document.getElementById("skill-description");

    popup.style.display = "block";

    if (skill === "html") {
        title.innerText = "HTML";
        description.innerText = "I learned HTML to understand how websites are structured. It helped me build the foundation of every webpage. In the future, I’ll use it to create clean and accessible layouts.";
    }

    if (skill === "css") {
        title.innerText = "CSS";
        description.innerText = "CSS helped me bring design into my projects. I use it to style layouts, add colors, and create responsive designs. In the future, I’ll use it to build visually engaging interfaces.";
    }

    if (skill === "js") {
        title.innerText = "JavaScript";
        description.innerText = "I learned JavaScript to make websites interactive. It allows me to handle events, update content dynamically, and improve user experience. In the future, I’ll use it for building dynamic applications.";
    }

    if (skill === "node") {
        title.innerText = "Node.js";
        description.innerText = "Node.js introduced me to backend development. It helps me understand how servers work and how data is handled. In the future, I’ll use it to build full-stack applications.";
    }

    if (skill === "git") {
        title.innerText = "Git & GitHub";
        description.innerText = "I learned Git and GitHub to manage my code and track changes. It helps me collaborate and maintain projects efficiently. In the future, I’ll use it for version control in all my development work.";
    }

}

function closePopup() {
    document.getElementById("skill-popup").style.display = "none";
}

/* OPTIONAL: close popup if user clicks outside */
window.onclick = function(event) {
    const popup = document.getElementById("skill-popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
}
