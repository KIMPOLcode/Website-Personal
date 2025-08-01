const roles = ["Junior Frontend Developer", "UI/UX Designer", "Data Analyst", "Konsultan IT"];

const textEl = document.getElementById("typingText");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  const currentRole = roles[roleIndex];
  const displayedText = currentRole.substring(0, charIndex);

  textEl.textContent = displayedText;

  if (!isDeleting && charIndex < currentRole.length) {
    charIndex++;
    setTimeout(typeRole, 120);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeRole, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      roleIndex = (roleIndex + 1) % roles.length;
    }
    setTimeout(typeRole, 1000); // jeda antar peran
  }
}

typeRole();

const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Optional: close menu when clicking a link (for mobile UX)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});
