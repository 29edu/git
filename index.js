document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent form from refreshing page

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  document.getElementById("response").textContent = 
    `Thanks, ${name}! We'll contact you at ${email}.`;

  // Optionally clear the form after submission
  this.reset();
});
