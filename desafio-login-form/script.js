function validateForm() {
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");

  var email = emailInput.value.trim();
  var password = passwordInput.value.trim();

  var emailError = document.getElementById("email-error");
  var passwordError = document.getElementById("senha-error");

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    emailError.innerHTML = "Por favor, insira um e-mail válido. ";
  } else {
    emailError.innerHTML = "";
  }

  if (password.length < 8) {
    passwordError.innerHTML = "A senha deve ter pelo menos 8 caracteres.";
  } else {
    passwordError.innerHTML = "";
  }

  if (emailError.innerHTML !== "" || senhaError.innerHTML !== "") {
    return false;
  }
}

function tooglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var eyeIcon = document.getElementById("icon-2");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "assets/eye-closed.svg";
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "assets/eye.svg";
  }
}
