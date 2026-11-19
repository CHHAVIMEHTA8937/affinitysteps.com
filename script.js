
// ==============================
// MOBILE NAVBAR
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");

  menuToggle.setAttribute("aria-expanded", isOpen);

  menuToggle.innerHTML = isOpen
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';

});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function(link) {

  link.addEventListener("click", function() {

    navLinks.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

  });

});


// ==============================
// STICKY NAVBAR SHADOW
// ==============================

const header = document.getElementById("header");

window.addEventListener("scroll", function() {

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const revealElements = document.querySelectorAll(
  ".about-grid, .why-card, .service-card, .roles-grid, .process-card, .contact-grid"
);

revealElements.forEach(function(element) {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(function(entries) {

  entries.forEach(function(entry) {

    if (entry.isIntersecting) {

      entry.target.classList.add("visible");

      observer.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.12
});

revealElements.forEach(function(element) {
  observer.observe(element);
});


// ==============================
// CONTACT FORM VALIDATION
// ==============================

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {

    formStatus.style.color = "red";
    formStatus.textContent = "Please fill in all required fields.";

    return;

  }

  if (!emailPattern.test(email)) {

    formStatus.style.color = "red";
    formStatus.textContent = "Please enter a valid email address.";

    return;

  }

  // Frontend demonstration only.
  // No data is sent or stored without a backend.

  formStatus.style.color = "green";

  formStatus.textContent =
    "Thank you, " + name +
    "! Your form is valid. Connect a backend to submit your enquiry.";

  contactForm.reset();

});


// ==============================
// AUTOMATIC COPYRIGHT YEAR
// ==============================

document.getElementById("year").textContent =
  new Date().getFullYear();


// ==============================
// CURRENT NAVIGATION LINK
// ==============================

const sections = document.querySelectorAll("main section[id]");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function() {

  let currentSection = "";

  sections.forEach(function(section) {

    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }

  });

  navItems.forEach(function(link) {

    link.classList.remove("current");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("current");
    }

  });

});
