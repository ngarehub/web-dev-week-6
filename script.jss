// === Light/Dark Mode Toggle ===
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// === Counter Feature ===
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

// === Collapsible FAQ ===
const faqToggle = document.querySelector(".faq-toggle");
const faqAnswer = document.querySelector(".faq-answer");
faqToggle.addEventListener("click", () => {
  faqAnswer.style.display = faqAnswer.style.display === "block" ? "none" : "block";
});

// === Form Validation ===
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form from submitting automatically

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error spans
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const successMessage = document.getElementById("successMessage");

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  successMessage.textContent = "";

  let valid = true;

  // Validate name
  if (name.length < 2) {
    nameError.textContent = "Name must be at least 2 characters long.";
    valid = false;
  }

  // Validate email with regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  // Validate password
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // If all checks passed
  if (valid) {
    successMessage.textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});
