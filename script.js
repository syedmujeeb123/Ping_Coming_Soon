"use strict";

const errorText = document.querySelector(".error-text");
const form = document.querySelector("form");
const errorEmailInput = document.getElementById("email");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const errorEmailValue = errorEmailInput.value;
  const emailValue = errorEmailInput.value;

  if (!emailPattern.test(emailValue)) {
    errorEmailInput.classList.add("error-outline");
    errorText.classList.remove("hidden");
  } else {
    window.location.reload();
    alert(`
      Message sent!
      
      Thanks for completing the form we'll be in touch soon

      Email: ${errorEmailValue}
        `);
  }
});
