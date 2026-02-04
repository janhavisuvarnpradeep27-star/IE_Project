// ==========================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ==========================================
// CONTACT FORM HANDLING
// ==========================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const company = document.getElementById("company").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Basic validation
  if (!name || !company || !email || !message) {
    showMessage("Please fill in all fields", "error");
    return;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showMessage("Please enter a valid email address", "error");
    return;
  }

  // Simulate form submission (since there's no backend)
  // In a real application, this would send data to a server

  // Show success message
  showMessage(
    "Thank you! Your consultation request has been received. We'll contact you soon.",
    "success",
  );

  // Reset form
  contactForm.reset();

  // Log to console (for demonstration purposes)
  console.log("Form Submission:", {
    name: name,
    company: company,
    email: email,
    message: message,
    timestamp: new Date().toISOString(),
  });
});

// ==========================================
// HELPER FUNCTION TO DISPLAY MESSAGES
// ==========================================

function showMessage(text, type) {
  formMessage.textContent = text;
  formMessage.className = "form-message " + type;

  // Auto-hide message after 5 seconds
  setTimeout(() => {
    formMessage.className = "form-message";
    formMessage.textContent = "";
  }, 5000);
}

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(10, 14, 39, 0.98)";
    navbar.style.boxShadow =
      "0 4px 30px rgba(0, 240, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.3)";
  } else {
    navbar.style.background = "rgba(10, 14, 39, 0.95)";
    navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.3)";
  }
});

// ==========================================
// HIGHLIGHT ACTIVE NAVIGATION LINK
// ==========================================

window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "";
    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "#00f0ff";
    }
  });
});

// ==========================================
// ANIMATE ELEMENTS ON SCROLL (Optional)
// ==========================================

// Observer for fade-in animations when elements come into view
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Apply fade-in animation to cards and sections on page load
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".card, .service-card, .pricing-card, .step, .why-card",
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// ==========================================
// CONSOLE MESSAGE FOR DEMONSTRATION
// ==========================================

console.log(
  "%c🚀 AIFluence Website Loaded Successfully!",
  "background: linear-gradient(135deg, #00f0ff 0%, #0ea5e9 100%); color: #0a0e27; font-size: 16px; font-weight: bold; padding: 10px 20px; border-radius: 5px;",
);
console.log(
  "%c✨ AI-Tech Blue Gradient Theme Active",
  "color: #00f0ff; font-size: 14px; font-weight: bold;",
);
console.log(
  "%cThis is a frontend-only demo for Innovation & Entrepreneurship project",
  "color: #a5b4fc; font-size: 12px;",
);
console.log(
  "%cForm submissions are logged to console (no backend connected)",
  "color: #a5b4fc; font-size: 12px;",
);
