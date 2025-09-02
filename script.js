// Typing effect (only for homepage tagline if it exists)
const tagline = document.querySelector(".tagline");
if (tagline) {
  const text = "Aspiring Developer | Quick Learner | Passionate Creator";
  let i = 0;
  const speed = 100;

  function typeWriter() {
    if (i < text.length) {
      tagline.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  tagline.innerHTML = "";
  typeWriter();
}

// Scroll reveal effect
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

// Run once on load
window.addEventListener("DOMContentLoaded", revealOnScroll);
// Run on scroll
window.addEventListener("scroll", revealOnScroll);

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





