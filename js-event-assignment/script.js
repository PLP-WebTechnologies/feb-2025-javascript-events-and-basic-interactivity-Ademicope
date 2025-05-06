function toggleMenu() {
    document.querySelector(".navbar-links").classList.toggle("active");
}

const form = document.getElementById("contact-form");
  const email = document.getElementById("email");
  const errorMessage = document.getElementById("errorMessage");

  form.onsubmit = function (e) {
    if (!email.value) {
      e.preventDefault(); // Prevent form submission
      errorMessage.textContent = "Email is required!";
    }
  };