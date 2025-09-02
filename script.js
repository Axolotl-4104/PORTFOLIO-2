// Typing effect
const text = "Aspiring Developer | Quick Learner | Passionate Creator";
let i = 0;
const speed = 100;

function typeWriter() {
    if (i < text.length) {
        document.querySelector(".tagline").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".tagline").innerHTML = "";
    typeWriter();
});

// Scroll animations
const sections = document.querySelectorAll("section, .hero");
window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const boxTop = section.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            section.classList.add("show");
        }
    });
});

// Smooth navbar links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


