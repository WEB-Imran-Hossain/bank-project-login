"use strict";

// submit button approval
document.getElementById("submitButton").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  if (email === "imran@obeation.com" && password === "i12345@##") {
    window.location.href = "home.html";
  } else {
    alert("Invalid User!!");
  }
});
