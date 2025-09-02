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
  const tagline = document.querySelector(".tagline");
  if (tagline) {
    tagline.innerHTML = "";
    typeWriter();
  }
});

// Scroll animations
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  reveals.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("show");
    }
  });
});

// Smooth navbar links
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});



