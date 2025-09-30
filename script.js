// Highlight active section in navbar while scrolling
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav ul li a");

  let current = "";

  sections.forEach((section) => {
    let sectionTop = section.offsetTop - 100;
    let sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
// Fade-in animation for sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 } // triggers when 20% of section is visible
);

sections.forEach((section) => {
  observer.observe(section);
});
// Zoom-in effect for profile picture on page load
window.addEventListener("load", () => {
  document.querySelector(".profile-pic").classList.add("show");
});
