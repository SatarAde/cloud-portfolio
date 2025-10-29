// ================= script.js =================

// ---------------- Typing effect ----------------
const typingText = "Cloud Engineer | AWS Enthusiast | Lifelong Learner";
const typingElement = document.getElementById("typing");
let i = 0;

function typeWriter() {
  if (i < typingText.length) {
    typingElement.innerHTML += typingText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;

// ---------------- Smooth scroll for buttons ----------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ---------------- Project modal ----------------
const projects = document.querySelectorAll(".project-card");
projects.forEach(card => {
  card.addEventListener("click", () => {
    const projectName = card.dataset.project;
    alert(`Project: ${projectName}\nCheck the README for more details.`); 
    // We can replace alert with a modal popup if desired
  });
});
