// Project Show More/Less Logic
function showMoreProjects() {
  const hiddenProjects = document.querySelectorAll(
    ".project-card.hidden-project"
  );
  hiddenProjects.forEach((card) => {
    card.style.display = "block";
  });
  document.getElementById("showMoreContainer").style.display = "none";
  document.getElementById("showLessContainer").style.display = "block";
}

function showLessProjects() {
  const hiddenProjects = document.querySelectorAll(
    ".project-card.hidden-project"
  );
  hiddenProjects.forEach((card) => {
    card.style.display = "none";
  });
  document.getElementById("showMoreContainer").style.display = "block";
  document.getElementById("showLessContainer").style.display = "none";
}

// On page load, ensure only 6 projects are visible
window.addEventListener("DOMContentLoaded", function () {
  showLessProjects();
});
