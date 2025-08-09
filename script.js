// --- Contact Section Dropdown Logic ---
document.addEventListener("DOMContentLoaded", function () {
  // Contact Email Dropdown
  const contactEmailTrigger = document.querySelector(".contact-email-trigger");
  const contactEmailItem = document.querySelector(".contact-email-item");
  if (contactEmailTrigger && contactEmailItem) {
    contactEmailTrigger.addEventListener("click", function (e) {
      e.preventDefault();
      contactEmailItem.classList.toggle("show-dropdown");
    });
    document.addEventListener("click", function (e) {
      if (!contactEmailItem.contains(e.target)) {
        contactEmailItem.classList.remove("show-dropdown");
      }
    });
  }

  // Contact Phone Dropdown
  const contactPhoneTrigger = document.querySelector(".contact-phone-trigger");
  const contactPhoneItem = document.querySelector(".contact-phone-item");
  if (contactPhoneTrigger && contactPhoneItem) {
    contactPhoneTrigger.addEventListener("click", function (e) {
      e.preventDefault();
      contactPhoneItem.classList.toggle("show-dropdown");
    });
    document.addEventListener("click", function (e) {
      if (!contactPhoneItem.contains(e.target)) {
        contactPhoneItem.classList.remove("show-dropdown");
      }
    });
  }
});
// --- Footer Dropdown Logic ---
document.addEventListener("DOMContentLoaded", function () {
  // Footer Email Dropdown
  const footerEmailTrigger = document.querySelector(".footer-email-trigger");
  const footerEmailDropdown = document.querySelector(
    ".footer-email-item .footer-contact-dropdown"
  );
  if (footerEmailTrigger && footerEmailDropdown) {
    footerEmailTrigger.addEventListener("click", function (e) {
      e.preventDefault();
      footerEmailDropdown.classList.toggle("show");
    });
    document.addEventListener("click", function (e) {
      if (
        !footerEmailDropdown.contains(e.target) &&
        !footerEmailTrigger.contains(e.target)
      ) {
        footerEmailDropdown.classList.remove("show");
      }
    });
  }

  // Footer Phone Dropdown
  const footerPhoneTrigger = document.querySelector(".footer-phone-trigger");
  const footerPhoneDropdown = document.querySelector(
    ".footer-phone-item .footer-contact-dropdown"
  );
  if (footerPhoneTrigger && footerPhoneDropdown) {
    footerPhoneTrigger.addEventListener("click", function (e) {
      e.preventDefault();
      footerPhoneDropdown.classList.toggle("show");
    });
    document.addEventListener("click", function (e) {
      if (
        !footerPhoneDropdown.contains(e.target) &&
        !footerPhoneTrigger.contains(e.target)
      ) {
        footerPhoneDropdown.classList.remove("show");
      }
    });
  }
});
// Main JavaScript file for portfolio website functionality

// DOM Content Loaded Event Listener
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all functionality when DOM is fully loaded
  initializeNavigation();
  initializeSkillBars();
  initializeContactForm();
  initializeSmoothScrolling();
  initializeScrollEffects();

  // Add a small delay to ensure all elements are rendered
  setTimeout(function () {
    animateSkillBars();
  }, 500);
});

// Ensure skill bars are visible even if animation fails
window.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".skill-progress").forEach((bar) => {
    const targetWidth = bar.getAttribute("data-width");
    bar.style.width = targetWidth;
  });
});

// Navigation functionality
function initializeNavigation() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle mobile menu
  if (hamburger) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking on nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  });

  // Always set navbar background to white
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.style.backgroundColor = "#fff";
    navbar.style.boxShadow = "none";
  }
}

// Initialize skill bars animation
function initializeSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");

  // Set initial width to 0 for animation
  skillBars.forEach((bar) => {
    bar.style.width = "0%";
  });
}

// Animate skill bars when they come into view
function animateSkillBars() {
  const skillsSection = document.querySelector(".technical-skills");

  if (skillsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll(".skill-progress");

            skillBars.forEach((bar) => {
              const targetWidth = bar.getAttribute("data-width");
              setTimeout(() => {
                bar.style.width = targetWidth;
              }, 200);
            });

            // Disconnect observer after animation
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(skillsSection);
  }
}

// Resume CV functionality
function viewCV() {
  // This function handles viewing CV in a new tab
  // In a real implementation, you would have an actual PDF file
  const cvUrl = "path/to/your/cv.pdf"; // Replace with actual CV path

  // For demo purposes, we'll show an alert
  alert(
    "CV viewing functionality will open your PDF in a new tab. Please add your actual CV file path."
  );

  // Uncomment the line below when you have an actual CV file
  // window.open(cvUrl, '_blank');
}

function downloadCV() {
  // This function handles CV download
  // In a real implementation, you would have an actual PDF file
  const cvUrl = "path/to/your/cv.pdf"; // Replace with actual CV path

  // For demo purposes, we'll show an alert
  alert(
    "CV download functionality will download your PDF. Please add your actual CV file path."
  );

  // Uncomment the lines below when you have an actual CV file
  // const link = document.createElement('a');
  // link.href = cvUrl;
  // link.download = 'Suliman_Yousef_CV.pdf';
  // document.body.appendChild(link);
  // link.click();
  // document.body.removeChild(link);
}

// Projects Show More/Less functionality
function showMoreProjects() {
  const hiddenProjects = document.querySelectorAll(".hidden-project");
  const showMoreBtn = document.getElementById("showMoreBtn");
  const showMoreContainer = document.getElementById("showMoreContainer");
  const showLessContainer = document.getElementById("showLessContainer");
  const projectsSection = document.querySelector(".projects-section");

  // Add expanded class to projects section
  projectsSection.classList.add("expanded");

  // Show all hidden projects with animation
  hiddenProjects.forEach((project, index) => {
    setTimeout(() => {
      project.style.display = "block";
      project.style.opacity = "0";
      project.style.transform = "translateY(20px)";

      // Animate in
      setTimeout(() => {
        project.style.transition = "all 0.5s ease";
        project.style.opacity = "1";
        project.style.transform = "translateY(0)";
      }, 50);
    }, index * 100);
  });

  // Hide show more button and show show less button
  setTimeout(() => {
    showMoreContainer.style.display = "none";
    showLessContainer.style.display = "flex";
    showLessContainer.style.justifyContent = "center";
  }, 200);
}

function showLessProjects() {
  const hiddenProjects = document.querySelectorAll(".hidden-project");
  const showMoreBtn = document.getElementById("showMoreBtn");
  const showMoreContainer = document.getElementById("showMoreContainer");
  const showLessContainer = document.getElementById("showLessContainer");
  const projectsSection = document.querySelector(".projects-section");

  // Remove expanded class from projects section
  projectsSection.classList.remove("expanded");

  // Hide projects with animation
  hiddenProjects.forEach((project, index) => {
    setTimeout(() => {
      project.style.opacity = "0";
      project.style.transform = "translateY(20px)";
      setTimeout(() => {
        project.style.display = "none";
      }, 300);
    }, index * 100);
  });

  // Show show more button and hide show less button
  setTimeout(() => {
    showMoreContainer.style.display = "flex";
    showMoreContainer.style.justifyContent = "center";
    showLessContainer.style.display = "none";
  }, 200);
}

// Legacy function for backward compatibility
function toggleProjects() {
  const showMoreBtn = document.getElementById("showMoreBtn");
  const isShowingMore = showMoreBtn.textContent === "Show Less";

  if (isShowingMore) {
    showLessProjects();
  } else {
    showMoreProjects();
  }
}

// Contact form functionality
function initializeContactForm() {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const name = formData.get("name");
      const email = formData.get("email");
      const subject = formData.get("subject");
      const message = formData.get("message");

      // Basic form validation
      if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Show loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      // Simulate form submission (replace with actual form handling)
      setTimeout(() => {
        alert("Thank you for your message! I will get back to you soon.");
        contactForm.reset();

        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 2000);

      // In a real implementation, you would send the data to your server
      // Example:
      // fetch('/contact', {
      //     method: 'POST',
      //     body: formData
      // }).then(response => {
      //     // Handle response
      // });
    });
  }
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Check if it's an internal link
      if (href.startsWith("#")) {
        e.preventDefault();

        const targetSection = document.querySelector(href);
        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar

          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Smooth scrolling for buttons that link to sections
  const actionButtons = document.querySelectorAll(".btn");
  actionButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const buttonText = this.textContent.toLowerCase();

      if (buttonText.includes("view work") || buttonText.includes("hire me")) {
        e.preventDefault();

        let targetSection;
        if (buttonText.includes("view work")) {
          targetSection = document.querySelector("#projects");
        } else if (buttonText.includes("hire me")) {
          targetSection = document.querySelector("#contact");
        }

        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 70;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }
    });
  });
}

// Scroll effects and animations
function initializeScrollEffects() {
  // Active navigation link highlighting
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // Throttled scroll listener for performance
  let ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        updateActiveNavLink();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Apply fade-in animation to various elements
  const fadeElements = document.querySelectorAll(
    ".stat-card, .service-card, .project-card, .contact-item"
  );
  fadeElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    fadeInObserver.observe(element);
  });
}

// Utility function to throttle function calls for performance
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Add loading animation for the page
window.addEventListener("load", function () {
  // Hide any loading spinner if you have one
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.style.display = "none";
  }

  // Add loaded class to body for any CSS animations
  document.body.classList.add("loaded");
});

// Handle window resize events
window.addEventListener(
  "resize",
  throttle(function () {
    // Close mobile menu on resize to larger screen
    const navMenu = document.querySelector(".nav-menu");
    const hamburger = document.querySelector(".hamburger");

    if (window.innerWidth > 768) {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      }
    }
  }, 250)
);

// Keyboard navigation support
document.addEventListener("keydown", function (e) {
  // Close mobile menu with Escape key
  if (e.key === "Escape") {
    const navMenu = document.querySelector(".nav-menu");
    const hamburger = document.querySelector(".hamburger");

    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  }
});

// Console log for developers
console.log("Suleiman Yousef Portfolio Website");
console.log("Developed with HTML, CSS, and JavaScript");
console.log("For any questions, contact: Sulimany662@gmail.com");
