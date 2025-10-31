document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  document.getElementById("response").textContent =
    `✅ Thanks, ${name}! I'll reach out to you at ${email}.`;

  this.reset();
});
