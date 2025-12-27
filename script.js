// Initialize AOS animation library
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initial loader simulation
  simulateLoader();

  // Initialize theme toggle
  initThemeToggle();

  // Initialize navigation
  initNavigation();

  // Initialize scroll to top button
  initScrollToTop();

  // Initialize skill animations
  initSkillAnimations();

  // Initialize stats counter
  initStatsCounter();

  // Initialize projects toggle
  initProjectsToggle();

  // Initialize projects filter
  initProjectsFilter();

  // Smooth scrolling for navigation links
  initSmoothScrolling();
});

// Simulate loader progress
function simulateLoader() {
  const loader = document.getElementById("loader");
  const progressBar = document.querySelector(".progress-bar");
  const progressText = document.querySelector(".progress-text span:last-child");
  const mainContent = document.getElementById("main-content");

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 5) + 1;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);

      // Hide loader and show main content
      setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
          loader.style.display = "none";
          mainContent.style.display = "block";
          document.body.classList.add("home-page");
        }, 500);
      }, 500);
    }

    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${progress}%`;
  }, 50);
}
const sections = document.querySelectorAll("section"); // كل السكشنات عندك
const navLi = document.querySelectorAll(".nav-links li a"); // روابط الـ navbar

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active"); // نحذف الكلاس من الكل
    if (li.getAttribute("href") === "#" + current) {
      li.classList.add("active"); // نضيف الكلاس للسكشن الحالي
    }
  });
});

// Initialize theme toggle functionality
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");

  // Set initial theme based on saved preference or default to dark
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.checked = true;
  }

  // Theme toggle event listener
  themeToggle.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    }
  });
}

// Initialize navigation functionality
function initNavigation() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Hamburger menu toggle
  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}

// Initialize scroll to top button
function initScrollToTop() {
  const scrollButton = document.getElementById("scrollToTop");

  // Show/hide button based on scroll position
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollButton.classList.add("show");
    } else {
      scrollButton.classList.remove("show");
    }
  });

  // Scroll to top when button is clicked
  scrollButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Initialize skill progress bar animations
function initSkillAnimations() {
  const skillSections = document.querySelectorAll(".skill-item");

  // Create intersection observer for skill animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target.querySelector(".skill-progress");
          const width = progressBar.getAttribute("data-width");
          progressBar.style.width = width;
          progressBar.classList.add("animate");
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observe each skill section
  skillSections.forEach((skill) => {
    observer.observe(skill);
  });
}

// Initialize stats counter animation
function initStatsCounter() {
  const counters = document.querySelectorAll(".stat-number");
  const speed = 200;

  // Create intersection observer for stats counter
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = +entry.target.getAttribute("data-target");
          const count = +entry.target.innerText;
          const increment = Math.ceil(target / speed);

          if (count < target) {
            entry.target.innerText = Math.min(count + increment, target) + "+";
            setTimeout(() => observer.observe(entry.target), 1);
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observe each counter
  counters.forEach((counter) => {
    observer.observe(counter);
  });
}

// Initialize projects show more/less toggle
function initProjectsToggle() {
  const showMoreBtn = document.getElementById("show-more-btn");
  const projectsGrid = document.getElementById("projects-grid");
  const hiddenProjects = projectsGrid.querySelectorAll(".project-card.hidden");
  let allProjectsVisible = false;

  showMoreBtn.addEventListener("click", function () {
    hiddenProjects.forEach((project) => {
      project.classList.toggle("hidden");
    });

    allProjectsVisible = !allProjectsVisible;

    if (allProjectsVisible) {
      this.querySelector(".btn-text").textContent = "Show Less ";
      this.querySelector(".btn-icon").classList.remove("fa-chevron-down");
      this.querySelector(".btn-icon").classList.add("fa-chevron-up");
    } else {
      this.querySelector(".btn-text").textContent = "Show All Projects (10)";
      this.querySelector(".btn-icon").classList.remove("fa-chevron-up");
      this.querySelector(".btn-icon").classList.add("fa-chevron-down");
    }

    // Refresh AOS animations for newly visible projects
    AOS.refresh();
  });
}

// Initialize projects filter functionality
function initProjectsFilter() {
  const projectCards = document.querySelectorAll('.project-card');
  const filterBtns = document.querySelectorAll('.filter-btn');

  // Auto-categorize projects based on tech stack
  projectCards.forEach(card => {
    // Skip if already has category
    if (card.getAttribute('data-category')) return;

    const techTags = Array.from(card.querySelectorAll('.tech-tag')).map(tag =>
      tag.textContent.trim().toLowerCase()
    );

    const backendTechs = ['node js', 'express js', 'postgresql', 'php', 'laravel', 'fastapi', 'python', 'sql', 'mongodb'];
    const frontendTechs = ['html', 'css', 'javascript', 'react', 'vue', 'angular', 'typescript', 'next js', 'tailwind', 'vite'];

    const hasBackend = techTags.some(tech => backendTechs.some(backTech => tech.includes(backTech)));
    const hasFrontend = techTags.some(tech => frontendTechs.some(frontTech => tech.includes(frontTech)));

    let category = 'frontend';
    if (hasBackend && hasFrontend) {
      category = 'fullstack';
    } else if (hasBackend) {
      category = 'backend';
    }

    card.setAttribute('data-category', category);
  });

  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const filter = this.getAttribute('data-filter');

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Filter projects
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const isHidden = card.classList.contains('hidden-by-filter');

        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          card.classList.remove('hidden-by-filter');
        } else {
          card.style.display = 'none';
          card.classList.add('hidden-by-filter');
        }
      });

      // Refresh AOS animations
      AOS.refresh();
    });
  });
}

// Initialize smooth scrolling for navigation links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Close alert function
function closeAlert() {
  const alert = document.getElementById("contact-alert");
  alert.classList.remove("show");
}
