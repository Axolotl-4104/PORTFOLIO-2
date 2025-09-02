// Typing animation
const typedText = document.querySelector(".typing");
const textArray = ["Aspiring Developer", "Quick Learner", "Passionate Creator"];
let arrayIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < textArray[arrayIndex].length) {
    typedText.textContent += textArray[arrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typedText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    arrayIndex = (arrayIndex + 1) % textArray.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typedText) typeEffect();
});

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  revealElements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
});

// Smooth scroll
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
