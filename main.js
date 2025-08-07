// Contact Dropdown Logic
function setupContactDropdowns() {
  const emailItem = document.querySelector(".contact-email-item");
  const emailTrigger = document.querySelector(".contact-email-trigger");
  const phoneItem = document.querySelector(".contact-phone-item");
  const phoneTrigger = document.querySelector(".contact-phone-trigger");

  function closeDropdowns() {
    if (emailItem) emailItem.classList.remove("show-dropdown");
    if (phoneItem) phoneItem.classList.remove("show-dropdown");
  }

  if (emailItem && emailTrigger) {
    emailTrigger.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (!emailItem.classList.contains("show-dropdown")) closeDropdowns();
      emailItem.classList.toggle("show-dropdown");
      emailTrigger.setAttribute(
        "aria-expanded",
        emailItem.classList.contains("show-dropdown")
      );
    });
    emailTrigger.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        emailTrigger.click();
      }
    });
    const emailDropdown = emailItem.querySelector(".contact-dropdown");
    if (emailDropdown) {
      emailDropdown.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }
  }
  if (phoneItem && phoneTrigger) {
    phoneTrigger.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (!phoneItem.classList.contains("show-dropdown")) closeDropdowns();
      phoneItem.classList.toggle("show-dropdown");
      phoneTrigger.setAttribute(
        "aria-expanded",
        phoneItem.classList.contains("show-dropdown")
      );
    });
    phoneTrigger.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        phoneTrigger.click();
      }
    });
    const phoneDropdown = phoneItem.querySelector(".contact-dropdown");
    if (phoneDropdown) {
      phoneDropdown.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }
  }
  document.addEventListener("click", function () {
    closeDropdowns();
  });
}

if (
  document.querySelector(".contact-email-item") ||
  document.querySelector(".contact-phone-item")
) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupContactDropdowns);
  } else {
    setupContactDropdowns();
  }
}
import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
